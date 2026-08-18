"use client";
import {
  FiPercent,
  FiActivity,
  FiMap,
  FiUsers,
  FiShield,
  FiLayout,
} from "react-icons/fi";

const PRIMARY = "#003F2D";

const features = [
  {
    icon: FiPercent,
    title: "Zero brokerage fee",
    description:
      "Direct access to the best office spaces and property owners with transparent pricing and zero brokerage fee.",
  },
  {
    icon: FiActivity,
    title: "Quick Turnaround Time",
    description: "Experience swift and effective solutions with us.",
  },
  {
    icon: FiMap,
    title: "Largest network of Coworking Spaces",
    description:
      "India's largest network of verified office spaces, spanning 30+ cities, 5,000+ properties and 5M+ square feet in area.",
  },
  {
    icon: FiUsers,
    title: "Your own office consultant",
    description:
      "One-on-one support for finding your new office seamlessly — from shortlisting the right properties to finalizing terms and ensuring smooth onboarding.",
  },
  {
    icon: FiShield,
    title: "Ethical practices",
    description:
      "Honest office space feedback and transparent communication, backed by a trusted real estate network.",
  },
  {
    icon: FiLayout,
    title: "Design & layout support",
    description:
      "Expert consultation to optimize workspace layouts, ensuring functionality, productivity and employee satisfaction.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="px-6 py-16 sm:py-20 mt-12"
      style={{ backgroundColor: PRIMARY }}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold font-financierDisplay text-white sm:text-4xl">
          Why choose FyndMySpace?
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40">
                  <Icon className="h-5 w-5 text-white" />
                </div>

                <div>
                  <h3 className="text-[17px] font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-white/70">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}