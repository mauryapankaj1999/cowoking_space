"use client";

export default function BookDemoButton({ setIsModalOpen }: { setIsModalOpen: (v: boolean) => void }) {
  const PRIMARY = "#003F2D";

  return (
    <>
      <div className="fixed right-0 top-1/2 z-[9999] -translate-y-1/2">
        <button
          onClick={() => setIsModalOpen(true)}
          className="book-demo-btn group relative overflow-hidden rounded-l-xl px-3 py-5 font-semibold text-white shadow-lg transition-all duration-300 hover:pr-4"
          style={{ backgroundColor: PRIMARY }}
        >
          {/* shine sweep */}
          <span className="shine-sweep absolute inset-0" />

          {/* pulsing glow ring */}
          <span
            className="absolute inset-0 rounded-l-xl opacity-0 group-hover:opacity-100"
            style={{
              boxShadow: `0 0 0 4px ${PRIMARY}22`,
              transition: "opacity 0.3s ease",
            }}
          />

          <span className="relative z-10 flex items-center gap-1.5 [writing-mode:vertical-rl] whitespace-nowrap text-[13px] tracking-wide">
            <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-white" />
            Get Quote
          </span>
        </button>
      </div>

      <style jsx global>{`
        .book-demo-btn {
          animation: book-demo-float 2.6s ease-in-out infinite;
        }

        @keyframes book-demo-float {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-4px);
          }
        }

        .shine-sweep {
          background: linear-gradient(
            120deg,
            transparent 20%,
            rgba(255, 255, 255, 0.35) 50%,
            transparent 80%
          );
          background-size: 200% 100%;
          animation: shine-move 2.6s ease-in-out infinite;
        }

        @keyframes shine-move {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </>
  );
}