
"use client";

import { useState, useEffect } from "react";
import {
  FiX,
  FiCheckCircle,
  FiShield,
  FiArrowRight,
} from "react-icons/fi";
import { useCreateEnquiry } from "@/hooks/useEnquiry";

const POPUP_STORAGE_KEY = "workspacePopupShown";

export default function AutoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    mutate: createEnquiry,
    isPending,
  } = useCreateEnquiry();

  useEffect(() => {
    try {
      const popupShown = sessionStorage.getItem(POPUP_STORAGE_KEY);

      if (!popupShown) {
        // Mark as shown before opening to prevent duplicate popups.
        sessionStorage.setItem(POPUP_STORAGE_KEY, "true");
        setIsOpen(true);
      }
    } catch (error) {
      console.error("Unable to access sessionStorage:", error);
    } finally {
      setIsChecked(true);
    }
  }, []);

  const inputClass =
    "w-full rounded-lg border border-[#E3DFD3] bg-[#FAF9F5] px-3.5 py-3 text-sm text-[#1C231C] outline-none transition focus:border-[#C9A46A] focus:ring-2 focus:ring-[#C9A46A]/20 placeholder:text-[#A9A28C]";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isPending) return;

    setErrorMessage("");

    createEnquiry(
      {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        designation: "",
        companyName: "",
        seats: "",
        budget: "",
        message: "",
        workspace: null,
        workspaceName: "",
        operatorName: "",
        location: "",
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          setName("");
          setEmail("");
          setPhone("");
        },
        onError: (error: any) => {
          setErrorMessage(
            error?.response?.data?.message ||
              "Unable to submit your enquiry. Please try again."
          );
        },
      }
    );
  }

  // Prevent rendering until the session check is complete.
  if (!isChecked || !isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#101812]/65 px-4 py-6 backdrop-blur-[3px]"
      onClick={() => setIsOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="auto-popup-title"
        className="relative my-auto grid w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* LEFT: Image and benefits */}
        <div className="relative hidden min-h-[570px] overflow-hidden bg-[#17251B] md:block">
          <img
            src="/img/popupimage.avif"
            alt="Modern coworking office interior"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#101B13]/95 via-[#101B13]/35 to-[#101B13]/10" />

          <div className="absolute left-6 top-6">
            <span className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white backdrop-blur-md">
              FYND MY SPACE
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D7E5C9]/40 bg-[#213B29]/80 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
              <FiCheckCircle className="text-[#D7E5C9]" />
              0 Brokerage
            </span>

            <h2 className="mb-4 text-3xl font-semibold leading-tight text-white lg:text-4xl">
              Your next workspace,
              <br />
              without the extra cost.
            </h2>

            <p className="mb-7 max-w-sm text-sm leading-6 text-white/80">
              Find the right coworking space for your team with transparent
              pricing and personalised assistance.
            </p>

            <div className="space-y-3 border-t border-white/20 pt-5">
              {[
                "No brokerage charges",
                "Verified workspace options",
                "Personalised assistance",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/90"
                >
                  <FiCheckCircle className="shrink-0 text-[#D7E5C9]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Enquiry form */}
        <div className="relative flex items-center px-6 py-9 sm:px-9 md:px-8 lg:px-10">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close popup"
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#F3EFE7] text-[#1C231C] transition hover:bg-[#E5DFD2]"
          >
            <FiX size={21} />
          </button>

          <div className="w-full">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B18A50]">
              Let&apos;s connect
            </p>

            <h2
              id="auto-popup-title"
              className="mb-3 pr-6 text-2xl font-semibold leading-tight text-[#1C231C] lg:text-3xl"
            >
              Let&apos;s find your perfect workspace
            </h2>

            <p className="mb-7 text-sm leading-6 text-[#73766C]">
              Share your details. Our workspace expert will help you find
              the right space.
            </p>

            {submitted ? (
              <div
                role="status"
                className="rounded-xl border border-[#CFE0C4] bg-[#F0F5EC] p-5 text-sm leading-6 text-[#33502A]"
              >
                <FiCheckCircle className="mb-3 h-7 w-7" />

                <h3 className="mb-1 font-semibold">
                  Thank you for reaching out!
                </h3>

                Your enquiry has been submitted successfully. Our team will
                get in touch with you.

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 block font-semibold underline underline-offset-4"
                >
                  Close window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="popup-name"
                    className="mb-1.5 block text-xs font-medium text-[#555A50]"
                  >
                    Full Name
                  </label>

                  <input
                    id="popup-name"
                    type="text"
                    required
                    minLength={2}
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="popup-email"
                    className="mb-1.5 block text-xs font-medium text-[#555A50]"
                  >
                    Email Address
                  </label>

                  <input
                    id="popup-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="popup-phone"
                    className="mb-1.5 block text-xs font-medium text-[#555A50]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="popup-phone"
                    type="tel"
                    required
                    pattern="[0-9+() -]{10,20}"
                    title="Enter a valid phone number"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className={inputClass}
                  />
                </div>

                {errorMessage && (
                  <p role="alert" className="text-sm text-red-600">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3.5 text-sm font-semibold text-white transition hover:bg-[#2A342A] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isPending
                    ? "Submitting..."
                    : "Get Workspace Assistance"}

                  {!isPending && <FiArrowRight />}
                </button>

                <div className="flex items-start justify-center gap-2 pt-1 text-center text-xs leading-5 text-[#77796F]">
                  <FiShield className="mt-0.5 shrink-0" />
                  Your details are used to respond to your enquiry.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
