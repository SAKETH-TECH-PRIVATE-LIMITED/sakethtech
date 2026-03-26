import { NextResponse } from "next/server";

type Body = {
  fullName?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  roleInterest?: string;
  coverLetter?: string;
};

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const fullName = String(body.fullName ?? "").trim();
  const email = String(body.email ?? "").trim();
  const roleInterest = String(body.roleInterest ?? "").trim();
  const coverLetter = String(body.coverLetter ?? "").trim();

  if (!fullName || !email || !roleInterest || !coverLetter) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  /** Hook for email / ATS integration — log in development only */
  if (process.env.NODE_ENV === "development") {
    console.info("[careers application]", {
      fullName,
      email,
      phone: body.phone ?? "",
      linkedin: body.linkedin ?? "",
      roleInterest,
      coverLetterPreview: coverLetter.slice(0, 240),
    });
  }

  return NextResponse.json({ ok: true });
}
