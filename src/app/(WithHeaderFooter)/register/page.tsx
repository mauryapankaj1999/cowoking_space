"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import MainHeading from "@/app/components/CommenHeading/MainHeading";

const PRIMARY = "#003F2D";

interface RegisterForm {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const emptyForm: RegisterForm = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState<RegisterForm>(emptyForm);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof RegisterForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("password is not matching");
      return;
    }
    if (form.password.length < 6) {
      setError("Password will be 6 characterso only");
      return;
    }

    setSubmitting(true);
    try {
     
      console.log(form);
      await new Promise((resolve) => setTimeout(resolve, 600));

      router.push("/login");
    } catch (err) {
      console.error("Registration failed", err);
      setError("Kuch galat ho gaya, dobara try karein");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50/40 mt-10 to-blue-50 px-6 py-14">
      <div className="w-full max-w-md rounded-3xl border border-white/60 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
      
        <MainHeading title=" Create your account" />
     

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 px-4 py-2 text-[13px] text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 mt-5">
          <IconField
            icon={<FiUser className="h-4 w-4 shrink-0 text-slate-400" />}
            type="text"
            ariaLabel="Full name"
            placeholder="Full name"
            value={form.name}
            onChange={(v) => handleChange("name", v)}
            required
            minLength={2}
          />

          <IconField
            icon={<FiMail className="h-4 w-4 shrink-0 text-slate-400" />}
            type="email"
            ariaLabel="Email"
            placeholder="Email"
            value={form.email}
            onChange={(v) => handleChange("email", v)}
            required
          />

          <IconField
            icon={<FiPhone className="h-4 w-4 shrink-0 text-slate-400" />}
            type="tel"
            ariaLabel="Phone number"
            placeholder="Phone number"
            value={form.phone}
            onChange={(v) => handleChange("phone", v)}
            required
            pattern="[0-9+\-\s]{10,15}"
            title="Enter a valid phone number"
          />

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-[#003F2D]">
            <FiLock className="h-4 w-4 shrink-0 text-slate-400" />
            <input
              type={showPassword ? "text" : "password"}
              aria-label="Password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
              required
              minLength={6}
              className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="text-slate-400 hover:text-slate-600"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <FiEyeOff className="h-4 w-4" />
              ) : (
                <FiEye className="h-4 w-4" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-[#003F2D]">
            <FiLock className="h-4 w-4 shrink-0 text-slate-400" />
            <input
              type={showConfirm ? "text" : "password"}
              aria-label="Confirm password"
              placeholder="Confirm password"
              value={form.confirmPassword}
              onChange={(e) =>
                handleChange("confirmPassword", e.target.value)
              }
              required
              minLength={6}
              className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowConfirm((s) => !s)}
              className="text-slate-400 hover:text-slate-600"
              aria-label={showConfirm ? "Hide password" : "Show password"}
            >
              {showConfirm ? (
                <FiEyeOff className="h-4 w-4" />
              ) : (
                <FiEye className="h-4 w-4" />
              )}
            </button>
          </div>

          <button
            type="submit"
            disabled={submitting}
            
            // style={{ backgroundColor: PRIMARY }}
            className="bg-primary mt-2 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="mt-6 text-center text-[13px] text-slate-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-primary"
            // style={{ color: PRIMARY }}
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

function IconField({
  icon,
  value,
  onChange,
  placeholder,
  ariaLabel,
  type = "text",
  required,
  minLength,
  pattern,
  title,
}: {
  icon: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  ariaLabel: string;
  type?: string;
  required?: boolean;
  minLength?: number;
  pattern?: string;
  title?: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 px-4 py-3 transition focus-within:border-[#003F2D]">
      {icon}
      <input
        type={type}
        aria-label={ariaLabel}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        minLength={minLength}
        pattern={pattern}
        title={title}
        className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
      />
    </div>
  );
}