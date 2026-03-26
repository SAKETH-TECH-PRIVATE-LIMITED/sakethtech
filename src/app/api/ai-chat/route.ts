import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;

type ChatTurn = { role: string; content: string };

function extractReply(data: unknown): string | null {
  if (typeof data === "string") {
    const s = data.trim();
    return s.length ? s : null;
  }
  if (!data || typeof data !== "object") return null;
  const o = data as Record<string, unknown>;
  for (const k of ["reply", "output", "message", "text", "response", "answer", "content"]) {
    const v = o[k];
    if (typeof v === "string" && v.trim()) return v.trim();
  }
  if (Array.isArray(o)) {
    for (const item of o) {
      const r = extractReply(item);
      if (r) return r;
    }
    return null;
  }
  if (typeof o.data !== "undefined") return extractReply(o.data);
  if (typeof o.json === "object" && o.json) return extractReply(o.json);
  if (Array.isArray(o.results) && o.results[0]) return extractReply(o.results[0]);
  return null;
}

export async function POST(req: NextRequest) {
  let body: { message?: string; history?: ChatTurn[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const message = (body.message ?? "").trim();
  if (!message) {
    return NextResponse.json({ error: "Message required" }, { status: 400 });
  }

  const history = Array.isArray(body.history)
    ? body.history.filter(
        (h): h is ChatTurn =>
          !!h && (h.role === "user" || h.role === "assistant") && typeof h.content === "string",
      )
    : [];

  const url = process.env.N8N_AI_WEBHOOK_URL?.trim();
  if (!url) {
    const snippet = message.length > 200 ? `${message.slice(0, 200)}…` : message;
    return NextResponse.json({
      reply: `[Demo mode] You said: «${snippet}»\n\nAdd your n8n production webhook URL to the environment variable N8N_AI_WEBHOOK_URL (server-side only). The app will POST JSON: { message, chatInput, history }.\n\nFor human help: contact@sakethech.com`,
      demo: true,
    });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 55_000);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.N8N_AI_WEBHOOK_SECRET
          ? { Authorization: `Bearer ${process.env.N8N_AI_WEBHOOK_SECRET}` }
          : {}),
      },
      body: JSON.stringify({
        message,
        chatInput: message,
        history,
      }),
      signal: controller.signal,
    });

    const rawText = await res.text();
    clearTimeout(timeout);

    if (!res.ok) {
      return NextResponse.json({
        reply: `The assistant returned an error (${res.status}). Please try again or email contact@sakethech.com.`,
      });
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(rawText);
    } catch {
      parsed = rawText;
    }
    const reply = extractReply(parsed);
    return NextResponse.json({
      reply: reply ?? (rawText.trim() || "No text in workflow response."),
    });
  } catch {
    clearTimeout(timeout);
    return NextResponse.json({
      reply:
        "Could not reach the assistant (timeout or network). Check your n8n webhook or try again later.",
    });
  }
}
