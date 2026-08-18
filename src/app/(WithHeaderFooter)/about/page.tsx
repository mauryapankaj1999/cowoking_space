"use client";
import Image from "next/image";
import {
  FiTarget,
  FiEye,
  FiUsers,
  FiCheckCircle,
  FiTrendingUp,
  FiShield,
  FiMapPin,
  FiSearch,
  FiClipboard,
  FiKey,
} from "react-icons/fi";
import MainHeading from "@/app/components/CommenHeading/MainHeading";
// import ExpertConsultationBanner from "@/app/components/ExpertConsultationBanner/ExpertConsultationBanner";

const PRIMARY = "#003F2D";

const STATS = [
  { label: "Verified workspaces", value: "5,000+" },
  { label: "Cities covered", value: "30+" },
  { label: "Happy teams", value: "10,000+" },
  { label: "Sq. ft. listed", value: "5M+" },
];

const VALUES = [
  {
    icon: FiCheckCircle,
    title: "Transparency",
    description: "Real photos, honest pricing, no hidden charges — what you see is what you get.",
  },
  {
    icon: FiTrendingUp,
    title: "Zero brokerage",
    description: "We never charge you a brokerage fee. Our service is completely free for users.",
  },
  {
    icon: FiShield,
    title: "Verified spaces",
    description: "Every listing is personally audited for quality, safety and accuracy.",
  },
];

const STEPS = [
  {
    icon: FiSearch,
    title: "Search",
    description: "Browse verified workspaces by city, category or operator.",
  },
  {
    icon: FiClipboard,
    title: "Shortlist",
    description: "Compare pricing, amenities and photos side by side.",
  },
  {
    icon: FiMapPin,
    title: "Tour",
    description: "Book a same-day visit with zero obligation.",
  },
  {
    icon: FiKey,
    title: "Move in",
    description: "Finalize terms with our team and get the keys.",
  },
];

const TEAM = [
  { name: "Aanya Sharma", role: "Co-founder & CEO", image: "/img/team1.jpg" },
  { name: "Rohan Verma", role: "Co-founder & COO", image: "/img/team2.jpg" },
  { name: "Priya Nair", role: "Head of Partnerships", image: "/img/team3.jpg" },
  { name: "Karan Malhotra", role: "Head of Operations", image: "/img/team4.jpg" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div
          className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-[0.05]"
          style={{ backgroundColor: PRIMARY }}
        />
        <div className="mx-auto max-w-4xl text-center">
          <span
            className="mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
            style={{ backgroundColor: `${PRIMARY}14`, color: PRIMARY }}
          >
            About us
          </span>
          <h1 className="text-3xl font-bold leading-snug text-slate-900 sm:text-4xl lg:text-5xl">
            Helping teams find their perfect workspace
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-500 sm:text-base">
            We're India's marketplace for flexible workspaces — connecting
            businesses of every size with verified coworking spaces, managed
            offices and virtual offices across the country.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-[#F9FBFC] px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <MainHeading title="Our Story" />
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              We started with a simple frustration — finding the right office
              space took weeks of calls, site visits and confusing pricing.
              So we built a platform that puts everything in one place:
              verified listings, transparent pricing, and real photos, so
              teams can make a decision in days, not weeks.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              Today, we work with hundreds of operators across 30+ cities,
              helping startups, enterprises and freelancers find a workspace
              that actually fits how they work.
            </p>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl shadow-lg shadow-slate-300/40 sm:h-96">
            <Image
              src="/img/about-story.jpg"
              alt="Team working in a modern coworking space"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 p-8 shadow-sm shadow-slate-200/50">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl"
              style={{ backgroundColor: `${PRIMARY}14` }}
            >
              <FiTarget className="h-5 w-5" style={{ color: PRIMARY }} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">Our mission</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-500">
              To make finding and booking a workspace as simple as booking a
              hotel room — transparent, fast and completely free for users.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 p-8 shadow-sm shadow-slate-200/50">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl"
              style={{ backgroundColor: `${PRIMARY}14` }}
            >
              <FiEye className="h-5 w-5" style={{ color: PRIMARY }} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">Our vision</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-500">
              To become the most trusted workspace marketplace in India,
              where every business — from solo founders to enterprises —
              finds a space that helps them grow.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-16 sm:py-20" style={{ backgroundColor: PRIMARY }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-white sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[13px] text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us / Values */}
      <section className="bg-[#F9FBFC] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <MainHeading title="Why choose us" />
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-slate-500">
              We're built around a few things we won't compromise on.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-2xl bg-white p-6 text-center shadow-sm shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className="mx-auto flex h-12 w-12 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${PRIMARY}14` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: PRIMARY }} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-500">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <MainHeading title="How it works" />

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: PRIMARY }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-2xl font-bold text-slate-100">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#F9FBFC] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <MainHeading title="Meet the team" />
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-slate-500">
              The people behind the platform.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {TEAM.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full shadow-sm sm:h-28 sm:w-28">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-3 text-[14px] font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-[12px] text-slate-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <ExpertConsultationBanner /> */}
    </>
  );
}