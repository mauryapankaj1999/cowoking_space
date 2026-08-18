"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

interface Props {
  open: boolean;
  onClose: () => void;
  space: any;
}

const PRIMARY = "#003F2D";

export default function EnquiryModal({ open, onClose, space }: Props) {
  const [form, setForm] = useState({
    name: "",
    designation: "",
    companyName: "",
    workEmail: "",
    phone: "",
    seats: "",
    budget: "",
    preferredLocation: "",
    message: space
      ? `I'm interested in ${space?.title || ""} by ${space?.operator || ""} (${space?.location || ""}).`
      : "",
  });

  if (!open) return null;

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    // TODO: replace with actual lead-submission API call
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-5">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-10">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 text-3xl text-slate-500 hover:text-slate-800"
        >
          <IoClose />
        </button>

        <h2 className="mb-1 text-lg font-semibold text-gray-900">
          Get a quote{space?.title ? ` for ${space.title}` : ""}
        </h2>

        <p className="mb-6 text-[13px] text-slate-500">
          Share your details and our team will reach out within one business
          day.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field
              label="Name"
              required
              placeholder="Aanya Sharma"
              value={form.name}
              onChange={(v) => handleChange("name", v)}
            />
            <Field
              label="Designation"
              required
              placeholder="Head of Operations"
              value={form.designation}
              onChange={(v) => handleChange("designation", v)}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field
              label="Company Name"
              required
              placeholder="Acme Labs"
              value={form.companyName}
              onChange={(v) => handleChange("companyName", v)}
            />
            <Field
              label="Work Email"
              required
              type="email"
              placeholder="you@company.com"
              value={form.workEmail}
              onChange={(v) => handleChange("workEmail", v)}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field
              label="Phone"
              required
              type="tel"
              placeholder="+91 98xxxxxxxx"
              value={form.phone}
              onChange={(v) => handleChange("phone", v)}
            />

            <div>
              <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-primary">
                Seats Needed <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={form.seats}
                onChange={(e) => handleChange("seats", e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              >
                <option value="">How many seats?</option>
                <option>1 to 10</option>
              <option>11 to 50</option>
              <option>51 to 100</option>
              <option>ABOVE 100</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field
              label="Budget (₹)"
              required
              placeholder="e.g. 1,50,000 per month"
              value={form.budget}
              onChange={(v) => handleChange("budget", v)}
            />

            <div>
              <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-primary">
                Preferred Location <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={form.preferredLocation}
                onChange={(e) =>
                  handleChange("preferredLocation", e.target.value)
                }
                className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              >
                <option value="">Select location</option>
                <option>Delhi</option>
                <option>Gurugram</option>
                <option>Noida</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-primary">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={3}
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-200 px-6 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{ backgroundColor: PRIMARY }}
              className="rounded-lg px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Get Quote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-primary">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary"
      />
    </div>
  );
}