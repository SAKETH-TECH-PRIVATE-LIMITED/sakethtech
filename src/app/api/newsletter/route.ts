import { NextResponse } from "next/server";

type Body = { email?: string };

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const email = String(body.email ?? "").trim();
  if (!email) return NextResponse.json({ ok: false, error: "missing_email" }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  // Hook for Mailchimp/SendGrid/etc. Keep it no-op for now.
  if (process.env.NODE_ENV === "development") {
    console.info("[newsletter] subscribe", { email });
  }

  return NextResponse.json({ ok: true });
}

