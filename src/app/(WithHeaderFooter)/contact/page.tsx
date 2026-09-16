"use client";

import { useState } from "react";
import { Fraunces, Space_Grotesk } from "next/font/google";
import {
  FiPhone,
  FiMail,
  FiMessageCircle,
  FiMapPin,
  FiChevronDown,
  FiArrowUpRight,
} from "react-icons/fi";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
});

const body = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

const CITIES = [
  "Bengaluru",
  "Gurugram",
  "Mumbai",
  "Hyderabad",
  "Pune",
  "Delhi",
  "Noida",
  "Chennai",
  "Ahmedabad",
  "Kochi",
  "Chandigarh",
  "Jaipur",
  "Kolkata",
  "Coimbatore",
];

const LOOKING_FOR = [
  "Managed Office",
  "Coworking Desk",
  "Meeting Room",
  "Virtual Office",
  "Enterprise Solution",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    lookingFor: "",
    city: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire this up to the Express/Mongo backend, e.g.
    // await axios.post("/api/leads", form);
    setSubmitted(true);
  }

  return (
    <main
      className={`${display.variable} ${body.variable} bg-[#F3EFE7] text-[#1C1F1B]`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* ---- Hero band ---- */}
      <section className="bg-primary text-[#F3EFE7] mt-[3pc]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-sm tracking-wide text-[#C9A46A] mb-3">
              14 cities across India
            </p>
            <h1
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl md:text-5xl leading-[1.1] font-medium"
            >
              Tell us what your team needs, we&apos;ll find the room for it.
            </h1>
            <p className="mt-4 text-[#C7CEC5] text-base">
              Managed offices, coworking desks or a meeting room for the
              afternoon — share a few details and a workspace expert calls
              you back the same day.
            </p>
          </div>

          <div className="flex gap-6 md:gap-10 shrink-0">
            <a href="tel:++91 9911900230" className="group flex flex-col gap-2">
              <FiPhone className="w-5 h-5 text-[#C9A46A]" />
              <span className="text-sm text-[#C7CEC5] group-hover:text-[#F3EFE7]">
                Call us
              </span>
            </a>
            <a href="mailto:office@fyndmyspace" className="group flex flex-col gap-2">
              <FiMail className="w-5 h-5 text-[#C9A46A]" />
              <span className="text-sm text-[#C7CEC5] group-hover:text-[#F3EFE7]">
                Email us
              </span>
            </a>
            <button className="group flex flex-col gap-2 text-left">
              <FiMessageCircle className="w-5 h-5 text-[#C9A46A]" />
              <span className="text-sm text-[#C7CEC5] group-hover:text-[#F3EFE7]">
                Chat now
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ---- Body: info + form ---- */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20 grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16">
        {/* Left: contact details */}
        <div className="space-y-10">
          <div>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-2xl font-medium mb-2"
            >
              Reach us directly
            </h2>
            <p className="text-[#5B5F56] text-sm">
              Mon – Sat, 10 am to 8 pm
            </p>
          </div>

          <div className="space-y-6">
            <InfoRow
              icon={<FiPhone className="w-4 h-4" />}
              label="Phone"
              value="+91 0000 0000 00"
              href="tel:+910000 0000 00"
            />
            <InfoRow
              icon={<FiMail className="w-4 h-4" />}
              label="Email"
              value="office@fyndmyspace"
              href="mailto:office@fyndmyspace.in"
            />
            <InfoRow
              icon={<FiMapPin className="w-4 h-4" />}
              label="Head office"
              value="Delhi ncr"
            />
          </div>

          <div className="pt-6 border-t border-[#D9D2C2]">
            <p className="text-sm text-[#5B5F56] mb-2">Cities we operate in</p>
            <p className="text-sm leading-7">
              {CITIES.join(" · ")}
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm text-[#1C231C] underline decoration-[#C9A46A] decoration-2 underline-offset-4"
          >
            Check our FAQ section
            <FiArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Right: form card */}
        <div className="bg-white rounded-2xl border border-[#E4DECB] p-7 md:p-9">
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-2xl font-medium mb-1"
          >
            Share your requirement
          </h2>
          <p className="text-[#5B5F56] text-sm mb-7">
            We&apos;ll get back to you within one business day.
          </p>

          {submitted ? (
            <div className="rounded-xl bg-[#F0F5EC] border border-[#CFE0C4] p-5 text-sm text-[#33502A]">
              Thanks — your requirement has been sent. Our team will call you
              shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <Field label="Name">
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Your full name"
                  className={inputClass}
                />
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Email">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </Field>
                <Field label="Phone">
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+91 98765 43210"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Looking for">
                  <Select
                    value={form.lookingFor}
                    onChange={(v) => update("lookingFor", v)}
                    options={LOOKING_FOR}
                    placeholder="Select an option"
                  />
                </Field>
                <Field label="City">
                  <Select
                    value={form.city}
                    onChange={(v) => update("city", v)}
                    options={CITIES}
                    placeholder="Select a city"
                  />
                </Field>
              </div>

              <Field label="Requirements (optional)">
                <textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Team size, budget, preferred locality…"
                  rows={3}
                  className={`${inputClass} resize-none`}
                />
              </Field>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#1C231C] text-[#F3EFE7] py-3 text-sm font-medium hover:bg-[#2A342A] transition-colors"
              >
                Submit requirement
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

const inputClass =
  "w-full rounded-lg border border-[#DCD5C3] bg-[#FAF8F2] px-3.5 py-2.5 text-sm outline-none focus:border-[#C9A46A] focus:ring-1 focus:ring-[#C9A46A] placeholder:text-[#A9A28C]";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs text-[#5B5F56] mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function Select({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <div className="relative">
      <select
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputClass} appearance-none pr-8`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A9A28C]" />
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex gap-3">
      <span className="mt-0.5 text-[#C9A46A]">{icon}</span>
      <span>
        <span className="block text-xs text-[#5B5F56]">{label}</span>
        <span className="text-sm">{value}</span>
      </span>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-80">
      {content}
    </a>
  ) : (
    content
  );
}