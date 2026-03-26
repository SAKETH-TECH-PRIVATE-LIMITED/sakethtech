"use client";

import { useState } from "react";
import Link from "next/link";
import { Loader2, Send } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20";

export function CareersApplicationForm() {
  const { t, locale } = useLocale();
  const f = t.whoWeAreCareersForm;
  const textDir = locale === "ar" ? "rtl" : "ltr";

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      fullName: String(data.get("fullName") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      linkedin: String(data.get("linkedin") || "").trim(),
      roleInterest: String(data.get("roleInterest") || "").trim(),
      coverLetter: String(data.get("coverLetter") || "").trim(),
    };

    if (!payload.fullName || !payload.email || !payload.roleInterest || !payload.coverLetter) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-3xl border border-emerald-200/80 bg-emerald-50/80 p-10 text-center dark:border-emerald-900/50 dark:bg-emerald-950/40"
        dir={textDir}
      >
        <h3 className="font-sans text-xl font-semibold text-emerald-900 dark:text-emerald-100">{f.successTitle}</h3>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-emerald-800/90 dark:text-emerald-200/90">
          {f.successBody}
        </p>
        <Link
          href="/#contact"
          className="mt-8 inline-flex text-[14px] font-semibold text-[#0066cc] underline-offset-4 hover:underline dark:text-sky-400"
        >
          {t.contact.label}
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" dir={textDir} noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="careers-fullName" className="text-[13px] font-semibold text-slate-800 dark:text-slate-200">
            {f.fullName} <span className="text-red-600 dark:text-red-400">*</span>
          </label>
          <input id="careers-fullName" name="fullName" className={inputClass} type="text" autoComplete="name" required />
        </div>
        <div>
          <label htmlFor="careers-email" className="text-[13px] font-semibold text-slate-800 dark:text-slate-200">
            {f.email} <span className="text-red-600 dark:text-red-400">*</span>
          </label>
          <input
            id="careers-email"
            name="email"
            className={inputClass}
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label htmlFor="careers-phone" className="text-[13px] font-semibold text-slate-800 dark:text-slate-200">
            {f.phone}
          </label>
          <input id="careers-phone" name="phone" className={inputClass} type="tel" autoComplete="tel" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="careers-linkedin" className="text-[13px] font-semibold text-slate-800 dark:text-slate-200">
            {f.linkedin}
          </label>
          <input id="careers-linkedin" name="linkedin" className={inputClass} type="url" placeholder="https://…" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="careers-role" className="text-[13px] font-semibold text-slate-800 dark:text-slate-200">
            {f.roleInterest} <span className="text-red-600 dark:text-red-400">*</span>
          </label>
          <input
            id="careers-role"
            name="roleInterest"
            className={inputClass}
            type="text"
            placeholder="e.g. Senior backend engineer, Solution architect"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="careers-cover" className="text-[13px] font-semibold text-slate-800 dark:text-slate-200">
            {f.coverLetter} <span className="text-red-600 dark:text-red-400">*</span>
          </label>
          <textarea
            id="careers-cover"
            name="coverLetter"
            className={`${inputClass} min-h-[140px] resize-y`}
            required
          />
        </div>
      </div>

      <p className="text-[12px] leading-relaxed text-slate-500 dark:text-slate-400">
        {f.privacyNote}{" "}
        <Link href="/privacy" className="font-semibold text-[#0066cc] underline-offset-2 hover:underline dark:text-sky-400">
          {t.footer.legalPrivacy}
        </Link>
        .
      </p>

      {status === "error" ? (
        <p className="text-[14px] font-medium text-red-600 dark:text-red-400" role="alert">
          {f.errorGeneric}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0066cc] py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:bg-[#0058b3] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-sky-500 dark:hover:bg-sky-400 sm:w-auto sm:min-w-[220px] sm:px-10"
      >
        {status === "submitting" ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
        {status === "submitting" ? f.submitting : f.submit}
      </button>
    </form>
  );
}
