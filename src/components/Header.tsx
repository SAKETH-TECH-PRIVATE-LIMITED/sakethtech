"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Search, Sparkles, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLocale } from "@/context/LocaleContext";
import { motionTokens } from "@/lib/motion";
import { SearchOrb } from "@/components/ai/SearchOrb";
import { Tooltip } from "@/components/Tooltip";

export function Header() {
  const { t, locale } = useLocale();
  const router = useRouter();
  const textDir = locale === "ar" ? "rtl" : "ltr";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const industries = t.industries;
  const industriesLeft = industries.slice(0, 7);
  const industriesRight = industries.slice(7);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const pillShadow = "nav-pill-glow";

  const navLink =
    "shrink-0 whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-medium tracking-normal text-slate-700 transition hover:bg-slate-100/90 hover:text-slate-900 lg:px-3 lg:text-[14px] xl:px-3.5 xl:text-[15px] dark:text-white/90 dark:hover:bg-white/10 dark:hover:text-white";

  const megaLinkClass =
    "block py-1.5 text-[14px] font-normal leading-snug text-slate-600 transition hover:text-[#0066cc] dark:text-slate-300 dark:hover:text-sky-400";

  const headerRef = useRef<HTMLElement>(null);
  /** Bottom edge of sticky header (px from viewport top) — eliminates gap above mega menus */
  const [megaAnchorPx, setMegaAnchorPx] = useState<number | null>(null);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const sync = () => {
      const r = el.getBoundingClientRect();
      setMegaAnchorPx(Math.max(0, Math.round(r.bottom) - 1));
    };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  const megaTopStyle = megaAnchorPx != null ? { top: megaAnchorPx } : undefined;
  const megaTopFallback = megaAnchorPx == null ? "top-[calc(var(--mega-menu-top)-1rem)]" : "";

  function openMega(name: string) {
    if (closeTimerRef.current != null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenMenu(name);
  }

  function scheduleCloseMega() {
    if (closeTimerRef.current != null) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setOpenMenu(null);
      closeTimerRef.current = null;
    }, 160);
  }

  function baseHref(href: string | undefined) {
    if (!href) return "#";
    return href.split("#")[0];
  }

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-0 bg-transparent">
      <div className="mx-auto max-w-[1320px] px-3 pt-3 sm:px-5 lg:px-8 lg:pt-4">
        <div
          className={`grid min-h-[58px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-3 gap-y-2 rounded-2xl border border-slate-200/90 bg-white/88 px-2 py-2 backdrop-blur-2xl [direction:ltr] sm:min-h-[62px] sm:gap-x-4 sm:px-3 ${pillShadow} transition-shadow duration-300 dark:border-white/10 dark:bg-slate-950/82 ${scrolled ? "sm:min-h-[60px]" : ""}`}
        >
          <div className="min-w-0 justify-self-start ps-0.5 sm:ps-1">
            <Logo />
          </div>

          <nav
            dir={textDir}
            className="relative z-20 hidden min-w-0 justify-center justify-self-center xl:flex"
          >
            <div className="flex max-w-full items-center justify-center gap-x-0.5 xl:gap-x-1.5">
              <div
                className="relative"
                onMouseEnter={() => openMega("whatWeDo")}
                onMouseLeave={scheduleCloseMega}
              >
                <button
                  type="button"
                  className={`${navLink} inline-flex items-center gap-1`}
                  aria-expanded={openMenu === "whatWeDo"}
                >
                  {t.nav.whatWeDo}
                  <ChevronDown
                    className={`h-3.5 w-3.5 shrink-0 opacity-70 transition ${openMenu === "whatWeDo" ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openMenu === "whatWeDo" && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: motionTokens.dur.fast, ease: motionTokens.easeOutSoft }}
                      style={megaTopStyle}
                      onMouseEnter={() => openMega("whatWeDo")}
                      onMouseLeave={scheduleCloseMega}
                      className={`fixed left-1/2 z-[70] w-[min(94vw,980px)] max-h-[min(78vh,calc(100dvh-var(--mega-menu-top)-0.5rem))] -translate-x-1/2 overflow-y-auto overflow-x-hidden rounded-2xl border border-white/70 bg-white/95 px-4 pb-6 pt-3 shadow-2xl shadow-slate-900/15 backdrop-blur-2xl sm:px-6 sm:pb-6 sm:pt-4 [direction:ltr] dark:border-slate-600/70 dark:bg-slate-900/95 ${megaTopFallback}`}
                    >
                      <motion.div
                        className="grid gap-x-10 gap-y-8 sm:grid-cols-3"
                        initial="hidden"
                        animate="show"
                        variants={{
                          hidden: {},
                          show: { transition: { staggerChildren: motionTokens.stagger.sm } },
                        }}
                      >
                        {t.mega.columns.map((col, ci) => (
                          <motion.div
                            key={ci}
                            className="min-w-0 space-y-8"
                            variants={{
                              hidden: { opacity: 0, y: 10 },
                              show: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: motionTokens.dur.base, ease: motionTokens.easeOutQuint },
                              },
                            }}
                          >
                            {col.groups.map((group) => (
                              <div key={group.heading}>
                                <p className="mb-3 text-[13px] font-semibold text-slate-900 dark:text-white">
                                  <Link href={baseHref(group.items?.[0]?.href)} className="hover:underline">
                                    {group.heading}
                                  </Link>
                                </p>
                                <motion.ul
                                  className="space-y-0 border-s border-slate-200 ps-3 dark:border-slate-600"
                                  initial="hidden"
                                  animate="show"
                                  variants={{
                                    hidden: {},
                                    show: { transition: { staggerChildren: 0.03, delayChildren: 0.04 } },
                                  }}
                                >
                                  {group.items.map((item) => (
                                    <motion.li
                                      key={`${group.heading}-${item.label}`}
                                      className="relative"
                                      variants={{
                                        hidden: { opacity: 0, x: -6 },
                                        show: { opacity: 1, x: 0, transition: { duration: 0.22, ease: motionTokens.easeOutSoft } },
                                      }}
                                    >
                                      <span
                                        className="absolute -start-3 top-[0.65em] h-px w-2 bg-slate-200 dark:bg-slate-600"
                                        aria-hidden
                                      />
                                      <Link href={item.href} className={megaLinkClass}>
                                        {item.label}
                                      </Link>
                                    </motion.li>
                                  ))}
                                </motion.ul>
                              </div>
                            ))}
                          </motion.div>
                        ))}
                      </motion.div>
                      <div className="mt-6 flex justify-end border-t border-slate-100 pt-4 dark:border-slate-700">
                        <Link
                          href="/#contact"
                          className="text-[14px] font-semibold text-[#0066cc] hover:underline dark:text-sky-400"
                        >
                          {t.nav.talkArchitect}
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div
                className="relative"
                onMouseEnter={() => openMega("industries")}
                onMouseLeave={scheduleCloseMega}
              >
                <button
                  type="button"
                  className={`${navLink} inline-flex items-center gap-1`}
                  aria-expanded={openMenu === "industries"}
                >
                  {t.nav.industries}
                  <ChevronDown
                    className={`h-3.5 w-3.5 shrink-0 opacity-70 transition ${openMenu === "industries" ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openMenu === "industries" && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: motionTokens.dur.fast, ease: motionTokens.easeOutSoft }}
                      style={megaTopStyle}
                      onMouseEnter={() => openMega("industries")}
                      onMouseLeave={scheduleCloseMega}
                      className={`fixed left-1/2 z-[70] w-[min(94vw,640px)] max-h-[min(78vh,calc(100dvh-var(--mega-menu-top)-0.5rem))] -translate-x-1/2 overflow-y-auto overflow-x-hidden rounded-2xl border border-white/70 bg-white/95 px-4 pb-6 pt-4 shadow-2xl shadow-slate-900/15 backdrop-blur-2xl [direction:ltr] dark:border-slate-600/70 dark:bg-slate-900/95 ${megaTopFallback}`}
                    >
                      <div className="grid gap-x-10 sm:grid-cols-2">
                        {[industriesLeft, industriesRight].map((col, ci) => (
                          <ul
                            key={ci}
                            className="space-y-0 border-s border-slate-200 ps-3 dark:border-slate-600"
                          >
                            {col.map((item) => (
                              <li key={item.slug}>
                                <Link
                                  href={`/industries/${item.slug}`}
                                  className="block rounded-lg py-2 ps-1 text-[14px] font-normal text-slate-600 transition hover:bg-slate-50 hover:text-[#0066cc] dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-sky-400"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ))}
                      </div>
                      <div className="mt-6 flex justify-end border-t border-slate-100 pt-4 dark:border-slate-700">
                        <Link
                          href="/#industries"
                          className="text-[14px] font-semibold text-[#0066cc] hover:underline dark:text-sky-400"
                        >
                          {t.services.learn}
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div
                className="relative"
                onMouseEnter={() => openMega("whoWeAre")}
                onMouseLeave={scheduleCloseMega}
              >
                <button
                  type="button"
                  className={`${navLink} inline-flex items-center gap-1`}
                  aria-expanded={openMenu === "whoWeAre"}
                >
                  {t.nav.whoWeAre}
                  <ChevronDown
                    className={`h-3.5 w-3.5 shrink-0 opacity-70 transition ${openMenu === "whoWeAre" ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openMenu === "whoWeAre" && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: motionTokens.dur.fast, ease: motionTokens.easeOutSoft }}
                      dir={textDir}
                      style={megaTopStyle}
                      onMouseEnter={() => openMega("whoWeAre")}
                      onMouseLeave={scheduleCloseMega}
                      className={`fixed left-1/2 z-[70] w-[min(94vw,520px)] max-h-[min(78vh,calc(100dvh-var(--mega-menu-top)-0.5rem))] -translate-x-1/2 overflow-y-auto overflow-x-hidden rounded-2xl border border-white/70 bg-white/95 px-4 pb-6 pt-4 shadow-2xl shadow-slate-900/15 backdrop-blur-2xl dark:border-slate-600/70 dark:bg-slate-900/95 ${megaTopFallback}`}
                    >
                      <ul className="space-y-1">
                        {t.whoWeAreMega.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="block rounded-xl px-3 py-3 transition hover:bg-slate-50 dark:hover:bg-slate-800/80"
                            >
                              <span className="block text-[14px] font-semibold text-slate-900 dark:text-white">
                                {item.label}
                              </span>
                              <span className="mt-1 block text-[13px] leading-snug text-slate-500 dark:text-slate-400">
                                {item.description}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex justify-between border-t border-slate-100 pt-4 dark:border-slate-700">
                        <Link
                          href="/#company"
                          className="text-[13px] font-semibold text-slate-600 hover:text-[#0066cc] dark:text-slate-400 dark:hover:text-sky-400"
                        >
                          {t.company.label}
                        </Link>
                        <Link
                          href="/#stories"
                          className="text-[13px] font-semibold text-[#0066cc] hover:underline dark:text-sky-400"
                        >
                          {t.stories.label}
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div
                className="relative"
                onMouseEnter={() => openMega("insights")}
                onMouseLeave={scheduleCloseMega}
              >
                <button
                  type="button"
                  className={`${navLink} inline-flex items-center gap-1`}
                  aria-expanded={openMenu === "insights"}
                >
                  {t.nav.insights}
                  <ChevronDown
                    className={`h-3.5 w-3.5 shrink-0 opacity-70 transition ${openMenu === "insights" ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openMenu === "insights" && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: motionTokens.dur.fast, ease: motionTokens.easeOutSoft }}
                      dir={textDir}
                      style={megaTopStyle}
                      onMouseEnter={() => openMega("insights")}
                      onMouseLeave={scheduleCloseMega}
                      className={`fixed left-1/2 z-[70] w-[min(94vw,520px)] max-h-[min(78vh,calc(100dvh-var(--mega-menu-top)-0.5rem))] -translate-x-1/2 overflow-y-auto overflow-x-hidden rounded-2xl border border-white/70 bg-white/95 px-4 pb-6 pt-4 shadow-2xl shadow-slate-900/15 backdrop-blur-2xl dark:border-slate-600/70 dark:bg-slate-900/95 ${megaTopFallback}`}
                    >
                      <ul className="space-y-1">
                        {t.insightsMega.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="block rounded-xl px-3 py-3 transition hover:bg-slate-50 dark:hover:bg-slate-800/80"
                            >
                              <span className="block text-[14px] font-semibold text-slate-900 dark:text-white">
                                {item.label}
                              </span>
                              <span className="mt-1 block text-[13px] leading-snug text-slate-500 dark:text-slate-400">
                                {item.description}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex justify-end border-t border-slate-100 pt-4 dark:border-slate-700">
                        <Link
                          href="/#contact"
                          className="text-[13px] font-semibold text-[#0066cc] hover:underline dark:text-sky-400"
                        >
                          {t.nav.talkArchitect}
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link href="/#contact" className={navLink}>
                {t.contact.label}
              </Link>
            </div>
          </nav>

          <div className="flex shrink-0 items-center justify-end gap-1 sm:gap-1.5 lg:gap-2">
            <div className="flex items-center gap-0.5 md:hidden">
              <ThemeToggle />
            </div>
            <div className="hidden items-center gap-1 md:flex xl:gap-1.5">
              <Tooltip label="AI assistant" align="end">
                <button
                  type="button"
                  className="rounded-full p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
                  aria-label="Search"
                  onClick={() => router.push("/search?autoplay=1")}
                >
                  <Search className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.75} />
                </button>
              </Tooltip>
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            <Link
              href="/#contact"
              className="rounded-full bg-[#0066cc] px-3.5 py-2 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#0058b3] sm:px-5 sm:py-2.5 sm:text-[14px] dark:bg-sky-500 dark:hover:bg-sky-400"
            >
              {t.nav.getStarted}
            </Link>
            <button
              type="button"
              className="hidden"
              aria-hidden
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile bottom action bar (HCL-style) */}
      <div className="fixed inset-x-0 bottom-0 z-[95] border-t border-slate-200/70 bg-white/85 pb-[env(safe-area-inset-bottom)] backdrop-blur-md xl:hidden dark:border-slate-800 dark:bg-slate-950/75">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-4 py-2 sm:px-6" dir={textDir}>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex flex-1 flex-col items-center gap-0.5 rounded-xl py-1.5 text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
            <span className="text-[11px] font-medium">Menu</span>
          </button>
          <button
            type="button"
            onClick={() => router.push("/search?autoplay=1")}
            className="flex flex-1 flex-col items-center gap-0.5 rounded-xl py-1.5 text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
            aria-label="Ask"
          >
            <SearchOrb size={20} />
            <span className="text-[11px] font-medium">Ask</span>
          </button>
          <button
            type="button"
            onClick={() => router.push("/#newsletter")}
            className="flex flex-1 flex-col items-center gap-0.5 rounded-xl py-1.5 text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
            aria-label="Subscribe"
          >
            <Mail className="h-5 w-5" />
            <span className="text-[11px] font-medium">Subscribe</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/40 backdrop-blur-sm xl:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.aside
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute inset-x-0 bottom-0 flex h-[min(82vh,720px)] flex-col rounded-t-3xl bg-white shadow-2xl dark:bg-slate-950"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 dark:border-slate-800">
                <div className="min-w-0">
                  <span className="relative block h-9 w-9">
                    <Image
                      src="/brand/mark.png"
                      alt="Saketh Tech"
                      fill
                      sizes="36px"
                      className="object-contain"
                      priority
                    />
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <LanguageSwitcher />
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                    className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="flex flex-1 flex-col overflow-y-auto px-4 pb-24 pt-2" dir={textDir}>
                <details className="mobile-nav-what-we-do border-b border-slate-100 py-1 dark:border-slate-800">
                  <summary className="cursor-pointer list-none py-3 text-[15px] font-medium text-slate-800 [&::-webkit-details-marker]:hidden dark:text-slate-100">
                    <span className="flex items-center justify-between gap-2">
                      {t.nav.whatWeDo}
                      <ChevronDown
                        className="mobile-nav-what-we-do-chevron h-4 w-4 shrink-0 opacity-60 transition-transform duration-200"
                        aria-hidden
                      />
                    </span>
                  </summary>
                  <div className="pb-4">
                    {t.mega.columns.map((col, ci) => (
                      <div key={ci} className={ci > 0 ? "mt-5 border-t border-slate-50 pt-5 dark:border-slate-800/80" : "mt-1"}>
                        {col.groups.map((group) => (
                          <div key={group.heading} className="mt-4 first:mt-0">
                            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                              <Link
                                href={baseHref(group.items?.[0]?.href)}
                                className="hover:underline"
                              >
                                {group.heading}
                              </Link>
                            </p>
                            <ul className="mt-2 space-y-1">
                              {group.items.map((item) => (
                                <li key={`${group.heading}-${item.label}`}>
                                  <Link
                                    href={item.href}
                                    className="block rounded-lg py-2 text-[14px] text-slate-700 hover:bg-slate-50 hover:text-[#0066cc] dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-sky-400"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </details>
                <details className="mobile-nav-industries border-b border-slate-100 py-1 dark:border-slate-800">
                  <summary className="cursor-pointer list-none py-3 text-[15px] font-medium text-slate-800 [&::-webkit-details-marker]:hidden dark:text-slate-100">
                    <span className="flex items-center justify-between gap-2">
                      {t.nav.industries}
                      <ChevronDown
                        className="mobile-nav-industries-chevron h-4 w-4 shrink-0 opacity-60 transition-transform duration-200"
                        aria-hidden
                      />
                    </span>
                  </summary>
                  <div className="pb-4" dir={textDir}>
                    <ul className="mt-2 max-h-[50vh] space-y-0.5 overflow-y-auto">
                      {industries.map((item) => (
                        <li key={item.slug}>
                          <Link
                            href={`/industries/${item.slug}`}
                            className="block rounded-lg py-2 text-[14px] text-slate-700 hover:bg-slate-50 hover:text-[#0066cc] dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-sky-400"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/#industries"
                      className="mt-3 block text-[13px] font-semibold text-[#0066cc] dark:text-sky-400"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t.services.learn}
                    </Link>
                  </div>
                </details>
                <details className="mobile-nav-who-we-are border-b border-slate-100 py-1 dark:border-slate-800">
                  <summary className="cursor-pointer list-none py-3 text-[15px] font-medium text-slate-800 [&::-webkit-details-marker]:hidden dark:text-slate-100">
                    <span className="flex items-center justify-between gap-2">
                      {t.nav.whoWeAre}
                      <ChevronDown
                        className="mobile-nav-who-we-are-chevron h-4 w-4 shrink-0 opacity-60 transition-transform duration-200"
                        aria-hidden
                      />
                    </span>
                  </summary>
                  <div className="pb-4">
                    <ul className="mt-2 space-y-0.5">
                      {t.whoWeAreMega.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block rounded-lg py-2.5 text-[14px] text-slate-700 hover:bg-slate-50 hover:text-[#0066cc] dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-sky-400"
                            onClick={() => setMobileOpen(false)}
                          >
                            <span className="font-medium">{item.label}</span>
                            <span className="mt-0.5 block text-[12px] text-slate-500 dark:text-slate-400">
                              {item.description}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-50 pt-3 dark:border-slate-800/80">
                      <Link
                        href="/#company"
                        className="text-[13px] font-semibold text-slate-600 dark:text-slate-400"
                        onClick={() => setMobileOpen(false)}
                      >
                        {t.company.label}
                      </Link>
                      <Link
                        href="/#stories"
                        className="text-[13px] font-semibold text-[#0066cc] dark:text-sky-400"
                        onClick={() => setMobileOpen(false)}
                      >
                        {t.stories.label}
                      </Link>
                    </div>
                  </div>
                </details>
                <details className="mobile-nav-insights border-b border-slate-100 py-1 dark:border-slate-800">
                  <summary className="cursor-pointer list-none py-3 text-[15px] font-medium text-slate-800 [&::-webkit-details-marker]:hidden dark:text-slate-100">
                    <span className="flex items-center justify-between gap-2">
                      {t.nav.insights}
                      <ChevronDown
                        className="mobile-nav-insights-chevron h-4 w-4 shrink-0 opacity-60 transition-transform duration-200"
                        aria-hidden
                      />
                    </span>
                  </summary>
                  <div className="pb-4">
                    <ul className="mt-2 space-y-0.5">
                      {t.insightsMega.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block rounded-lg py-2.5 text-[14px] text-slate-700 hover:bg-slate-50 hover:text-[#0066cc] dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-sky-400"
                            onClick={() => setMobileOpen(false)}
                          >
                            <span className="font-medium">{item.label}</span>
                            <span className="mt-0.5 block text-[12px] text-slate-500 dark:text-slate-400">
                              {item.description}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
