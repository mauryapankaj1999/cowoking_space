"use client";
import { useEffect, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

const PRIMARY = "#003F2D";

interface ThankYouPopupProps {
  open: boolean;
  onClose: () => void;
  message?: string;
  subMessage?: string;
  autoCloseMs?: number;
}

export default function ThankYouPopup({
  open,
  onClose,
  message = "Thank You!",
  subMessage = "Your request has been submitted successfully.",
  autoCloseMs = 5000,
}: ThankYouPopupProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!open) return;

    requestAnimationFrame(() => setVisible(true));

    const closeTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 200); // fade-out ke baad actually close karo
    }, autoCloseMs);

    return () => clearTimeout(closeTimer);
  }, [open, autoCloseMs, onClose]);

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-[100000] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-live="polite"
        className={`relative w-[90%] max-w-sm rounded-3xl border border-white/60 bg-white p-8 text-center shadow-2xl transition-all duration-300 ease-out ${
          visible ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
          <FiCheckCircle className="h-9 w-9 text-primary" style={{ color: PRIMARY }} />
        </div>

        <h3 className="mb-2 text-xl font-bold text-slate-900">{message}</h3>
        <p className="text-sm text-slate-500">{subMessage}</p>

        {/* Progress bar — 5 sec countdown visually dikhata hai */}
        <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-primary"
            style={{
              backgroundColor: PRIMARY,
              animation: `thankyou-progress ${autoCloseMs}ms linear forwards`,
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes thankyou-progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>
    </div>
  );
}