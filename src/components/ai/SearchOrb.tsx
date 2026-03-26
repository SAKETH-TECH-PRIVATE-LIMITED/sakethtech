"use client";

export function SearchOrb({ size = 34 }: { size?: number }) {
  return (
    <div
      className="relative shrink-0 rounded-full"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <div className="orb-shell absolute inset-0 rounded-full" />
      <div className="orb-core absolute inset-[10%] rounded-full" />
      <div className="orb-spec absolute inset-0 rounded-full" />
      <div className="orb-facets absolute inset-0 rounded-full" />
      <div className="orb-prism absolute inset-[-14%] rounded-full" />

      <style jsx>{`
        .orb-shell {
          background: radial-gradient(
              120% 120% at 50% 35%,
              rgba(255, 255, 255, 0.52),
              rgba(255, 255, 255, 0.08) 48%,
              rgba(255, 255, 255, 0) 72%
            ),
            radial-gradient(
              110% 110% at 50% 70%,
              rgba(12, 10, 29, 0.35),
              rgba(12, 10, 29, 0) 62%
            );
          box-shadow:
            0 28px 60px -36px rgba(88, 28, 135, 0.95),
            0 18px 44px -28px rgba(59, 130, 246, 0.65),
            inset 0 0 0 1px rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(10px);
        }

        .orb-core {
          background: radial-gradient(
              58% 58% at 34% 28%,
              rgba(255, 255, 255, 0.98),
              rgba(255, 255, 255, 0) 55%
            ),
            radial-gradient(
              80% 80% at 72% 78%,
              rgba(168, 85, 247, 1),
              rgba(168, 85, 247, 0) 62%
            ),
            radial-gradient(
              92% 92% at 35% 82%,
              rgba(59, 130, 246, 0.92),
              rgba(59, 130, 246, 0) 66%
            ),
            radial-gradient(
              85% 85% at 52% 58%,
              rgba(88, 28, 135, 0.78),
              rgba(88, 28, 135, 0) 72%
            ),
            radial-gradient(
              70% 70% at 56% 42%,
              rgba(15, 23, 42, 0.55),
              rgba(15, 23, 42, 0) 70%
            );
          filter: saturate(1.35) contrast(1.35);
          animation: orbPulse 2.35s ease-in-out infinite;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.32);
        }

        .orb-spec {
          background:
            radial-gradient(42% 32% at 36% 24%, rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0) 62%),
            radial-gradient(26% 20% at 64% 38%, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0) 64%),
            radial-gradient(55% 40% at 50% 92%, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0) 70%);
          mix-blend-mode: screen;
          animation: orbSpec 3.1s ease-in-out infinite;
        }

        .orb-facets {
          background: conic-gradient(
            from 30deg,
            rgba(255, 255, 255, 0) 0deg,
            rgba(255, 255, 255, 0.26) 52deg,
            rgba(255, 255, 255, 0) 118deg,
            rgba(255, 255, 255, 0.18) 196deg,
            rgba(255, 255, 255, 0) 268deg,
            rgba(255, 255, 255, 0.22) 320deg,
            rgba(255, 255, 255, 0) 360deg
          );
          filter: blur(0.15px);
          animation: orbSpin 2.15s linear infinite;
          opacity: 0.85;
          mix-blend-mode: overlay;
        }

        .orb-prism {
          background: conic-gradient(
            from 0deg,
            rgba(59, 130, 246, 0) 0deg,
            rgba(59, 130, 246, 0.12) 60deg,
            rgba(168, 85, 247, 0.18) 120deg,
            rgba(59, 130, 246, 0.1) 180deg,
            rgba(168, 85, 247, 0.22) 260deg,
            rgba(59, 130, 246, 0) 360deg
          );
          filter: blur(10px);
          opacity: 0.55;
          animation: orbSpin 3.8s linear infinite reverse;
        }

        @keyframes orbPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.78;
          }
          50% {
            transform: scale(1.06);
            opacity: 1;
          }
        }

        @keyframes orbSpin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orbSpec {
          0%,
          100% {
            transform: translate(-2%, -2%);
            opacity: 0.75;
          }
          50% {
            transform: translate(2%, 2%);
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .orb-core,
          .orb-spec,
          .orb-facets,
          .orb-prism {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

