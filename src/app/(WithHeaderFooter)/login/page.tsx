"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { Main } from "next/document";
import MainHeading from "@/app/components/CommenHeading/MainHeading";

const PRIMARY = "#003F2D";

interface LoginForm {
  email: string;
  password: string;
}

const emptyForm: LoginForm = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState<LoginForm>(emptyForm);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof LoginForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Email aur Password dono zaroori hain");
      return;
    }

    setSubmitting(true);
    try {
      // TODO: backend ready hone par yaha login API call lagayenge
      console.log(form, "remember:", rememberMe);
      await new Promise((resolve) => setTimeout(resolve, 600));

      router.push("/admin"); // admin panel ka route apna check kar lena
    } catch (err) {
      console.error("Login failed", err);
      setError("Email ya Password galat hai");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50/40 to-blue-50 px-6 py-14">
      <div className="w-full max-w-md rounded-3xl border border-white/60 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
        {/* <p
          className="mb-1 text-3xl font-semibold font-financierDisplay tracking-wide text-primary"
        >
          Welcome back
        </p> */}


        <MainHeading title="Login" />
        <p className="mb-6 text-[13px] text-slate-500">
           after Login please access your workspace admin panel to manage your listings and bookings.
          {/* Login karke apna workspace admin panel access karein. */}
        </p>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 px-4 py-2 text-[13px] text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-[#003F2D]">
            <FiMail className="h-4 w-4 shrink-0 text-slate-400" />
            <input
              type="email"
              aria-label="Email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
          </div>

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

          <div className="flex items-center justify-between text-[13px]">
            <label className="flex items-center gap-2 text-slate-500">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300"
                style={{ accentColor: PRIMARY }}
              />
              Remember me
            </label>
            <Link
              href="/forgot-password"
              className="font-medium"
              style={{ color: PRIMARY }}
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={submitting}
            style={{ backgroundColor: PRIMARY }}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-[13px] text-slate-500">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold"
            style={{ color: PRIMARY }}
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}