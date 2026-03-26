import Link from "next/link";
import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex min-w-0 items-center gap-2.5 sm:gap-3 ${className}`}
    >
      <span aria-hidden className="relative flex h-9 w-9 shrink-0 sm:h-10 sm:w-10">
        <Image
          src="/brand/mark.png"
          alt=""
          fill
          sizes="40px"
          className="object-contain"
          priority
        />
      </span>
      <span className="flex min-w-0 items-center gap-2 sm:gap-3">
        <span
          className="hidden h-8 w-px shrink-0 bg-slate-200 sm:block dark:bg-white/25"
          aria-hidden
        />
        <span className="min-w-0 leading-snug">
          <span className="block font-sans text-[0.96875rem] font-bold tracking-tight text-[#0033a1] sm:text-[1.0625rem] dark:text-white">
            Saketh Tech
          </span>
          <span className="mt-0.5 block font-sans text-[0.71875rem] font-medium uppercase tracking-[0.14em] text-slate-500 sm:text-[0.75rem] dark:text-white/70">
            Private Limited
          </span>
        </span>
      </span>
    </Link>
  );
}
