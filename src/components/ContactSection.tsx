"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const EMAIL = "contact@sakethaiautomation.com";
const PHONE = "+91 8187889752";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const { t, locale } = useLocale();
  const textDir = locale === "ar" ? "rtl" : "ltr";
  const c = t.contact;

  const [phoneValue, setPhoneValue] = useState("");

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white px-4 py-24 text-slate-900 dark:bg-slate-950 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-10 [direction:ltr] lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4" dir={textDir}>
            <h2 className="headline-section text-center font-sans text-[1.75rem] text-foreground sm:text-[2rem] lg:text-left">
              {c.infoTitle}
            </h2>
            <p className="mt-3 text-center text-[13px] leading-relaxed text-slate-600 dark:text-slate-300 lg:text-left whitespace-pre-line">
              {c.infoSub}
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-md">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-slate-900 dark:text-white">{c.cards.phoneLabel}</p>
                    <p className="mt-1 text-[13px] text-slate-600 dark:text-slate-300">{PHONE}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-md">
                    <Mail className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-slate-900 dark:text-white">{c.cards.emailLabel}</p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="mt-1 block text-[13px] text-slate-600 underline-offset-4 hover:underline dark:text-slate-300"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-md">
                    <MessageSquare className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-slate-900 dark:text-white">{c.cards.whatsappLabel}</p>
                    <p className="mt-1 text-[13px] text-slate-600 dark:text-slate-300">{c.cards.whatsappValue}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-md">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-slate-900 dark:text-white">{c.cards.locationLabel}</p>
                    <p className="mt-1 text-[13px] text-slate-600 dark:text-slate-300">{c.cards.locationValue}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
              <p className="text-[13px] font-semibold text-slate-900 dark:text-white">{c.guaranteeTitle}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-600 dark:text-slate-300">{c.guaranteeBody}</p>
            </div>
          </div>

          <motion.form
            dir={textDir}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 rounded-3xl border border-slate-200/80 bg-white p-8 shadow-[0_10px_30px_-18px_rgba(2,6,23,0.25)] dark:border-slate-800 dark:bg-slate-900/40"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <h3 className="text-center font-sans text-[1.35rem] font-semibold text-slate-900 dark:text-white sm:text-left">
              {c.formTitle}
            </h3>

            <div className="mt-6 grid gap-5 [direction:ltr] sm:grid-cols-2">
              <label className="block">
                <span className="text-[12px] font-semibold text-slate-700 dark:text-slate-200">{c.firstName}</span>
                <input
                  required
                  name="firstName"
                  dir={textDir}
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950/40 dark:text-white dark:placeholder:text-slate-500"
                  placeholder={c.placeholders.firstName}
                />
              </label>
              <label className="block">
                <span className="text-[12px] font-semibold text-slate-700 dark:text-slate-200">{c.lastName}</span>
                <input
                  required
                  name="lastName"
                  dir={textDir}
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950/40 dark:text-white dark:placeholder:text-slate-500"
                  placeholder={c.placeholders.lastName}
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="text-[12px] font-semibold text-slate-700 dark:text-slate-200">{c.email}</span>
                <input
                  required
                  type="email"
                  name="email"
                  dir="ltr"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950/40 dark:text-white dark:placeholder:text-slate-500"
                  placeholder={c.placeholders.email}
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="text-[12px] font-semibold text-slate-700 dark:text-slate-200">{c.role}</span>
                <input
                  required
                  name="role"
                  dir={textDir}
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950/40 dark:text-white dark:placeholder:text-slate-500"
                  placeholder={c.placeholders.role}
                />
              </label>

              <label className="block">
                <span className="text-[12px] font-semibold text-slate-700 dark:text-slate-200">{c.companyName}</span>
                <input
                  required
                  name="companyName"
                  dir={textDir}
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950/40 dark:text-white dark:placeholder:text-slate-500"
                  placeholder={c.placeholders.companyName}
                />
              </label>
              <label className="block">
                <span className="text-[12px] font-semibold text-slate-700 dark:text-slate-200">{c.websiteOptional}</span>
                <input
                  name="website"
                  dir="ltr"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950/40 dark:text-white dark:placeholder:text-slate-500"
                  placeholder={c.placeholders.website}
                />
              </label>

              <label className="block">
                <span className="text-[12px] font-semibold text-slate-700 dark:text-slate-200">{c.phoneNumber}</span>
                <div className="mt-2">
                  <PhoneInput
                    defaultCountry={locale === "ar" ? "ae" : "in"}
                    value={phoneValue}
                    onChange={(v) => setPhoneValue(v)}
                    inputProps={{
                      name: "phone",
                      required: true,
                      placeholder: c.placeholders.phone,
                    }}
                    className="st-phone"
                  />
                </div>
              </label>

              <label className="block">
                <span className="text-[12px] font-semibold text-slate-700 dark:text-slate-200">{c.companySize}</span>
                <select
                  required
                  name="companySize"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-[14px] text-slate-700 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-100"
                  defaultValue=""
                >
                  {c.options.companySizes.map((o) => (
                    <option key={o.value || o.label} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-[12px] font-semibold text-slate-700 dark:text-slate-200">{c.annualRevenueOptional}</span>
                <select
                  name="annualRevenue"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-[14px] text-slate-700 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-100"
                  defaultValue=""
                >
                  {c.options.annualRevenue.map((o) => (
                    <option key={o.value || o.label} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-[12px] font-semibold text-slate-700 dark:text-slate-200">{c.projectBudget}</span>
                <select
                  required
                  name="projectBudget"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-[14px] text-slate-700 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-100"
                  defaultValue=""
                >
                  {c.options.projectBudgets.map((o) => (
                    <option key={o.value || o.label} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block sm:col-span-2">
                <span className="text-[12px] font-semibold text-slate-700 dark:text-slate-200">{c.howCanWeHelp}</span>
                <textarea
                  required
                  name="help"
                  rows={4}
                  dir={textDir}
                  className="mt-2 w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-[14px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950/40 dark:text-white dark:placeholder:text-slate-500"
                  placeholder={c.placeholders.help}
                />
              </label>
            </div>

            <div className="mt-5 flex items-start gap-3">
              <input
                required
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 dark:border-slate-600"
              />
              <p className="text-[12px] text-slate-600 dark:text-slate-300">{c.termsLabel}</p>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-emerald-600"
            >
              {c.submit}
              <Send className="h-4 w-4 rtl:rotate-180" />
            </button>

            {sent ? (
              <p className="mt-4 text-[13px] font-medium text-emerald-700 dark:text-emerald-300" dir={textDir}>
                Thanks — we received your message.
              </p>
            ) : null}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
