import { FiSearch, FiCalendar, FiKey } from "react-icons/fi";

const steps = [
  {
    number: "01",
    icon: FiSearch,
    title: "Tell us what you need",
    description:
      "Share your city, team size and budget. Takes less than a minute.",
  },
  {
    number: "02",
    icon: FiCalendar,
    title: "Tour shortlisted spaces",
    description:
      "Your advisor curates 3-5 verified options and books the visits for you.",
  },
  {
    number: "03",
    icon: FiKey,
    title: "Move in the same week",
    description:
      "We negotiate terms, handle paperwork and hand over the keys.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#FAF6ED] px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[3px] text-slate-400">
          HOW IT WORKS
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
          From search to seat in three steps
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition hover:shadow-md"
              >
                <span className="text-5xl font-extrabold text-slate-100 sm:text-6xl">
                  {step.number}
                </span>

                <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50">
                  <Icon className="h-5 w-5 text-emerald-700" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}