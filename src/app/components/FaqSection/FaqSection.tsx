"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title?: string;
   faqs?: FaqItem[]; 
}

const defaultFaqs: FaqItem[] = [
  {
    question: "What are the different seating options available in WeWork?",
    answer:
      "WeWork offers dedicated desks, private cabins, hot desks and meeting rooms tailored to individuals, startups and enterprise teams.",
  },
  {
    question: "How much does a seat in WeWork cost?",
    answer:
      "Pricing varies by location and plan type. Check the plans section above for exact starting prices at this workspace.",
  },
  {
    question: "What amenities and facilities are provided at WeWork?",
    answer:
      "WeWork provides all amenities and facilities like Cafeteria, Lift, Lounge Area, Metro Connectivity, Pet Friendly, Breakout & Recreational Area, Separate Washroom, Wellness Centre, Pantry Area, Chairs & Desks, Air Conditioners, Meeting Rooms, 2 wheeler parking, 4 wheeler parking, Phone Booth, Tea, Coffee, Charging, Power Backup, Printer, Storage Space, Wifi and Water. Any other specific requirement you may have can be made available on request.",
  },
  {
    question: "Can the office space be customised based on our requirements?",
    answer:
      "Yes, spaces can be customised to match your team's branding and layout needs — reach out to our team to discuss requirements.",
  },
  {
    question: "Are there any lock-ins, security deposit or any other charges?",
    answer:
      "Terms vary by plan. Standard plans include a refundable security deposit; our team will share exact details for your chosen plan.",
  },
  {
    question: "Do WeWork workspace provide 24/7 access?",
    answer:
      "Select locations and plans offer 24/7 access. Availability depends on the specific workspace — confirm with our team before booking.",
  },
];

export default function FaqSection({
  title = "Frequently Asked Questions",
  faqs = defaultFaqs,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section>
      <h2 className="mb-10 text-lg font-semibold text-gray-900">{title}</h2>

      <div className="divide-y divide-slate-200 border-t border-slate-200">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index}>
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span
                  className={`text-base font-medium transition-colors duration-200 sm:text-[15px] ${
                    isOpen ? "text-slate-900" : "text-slate-800"
                  }`}
                >
                  {faq.question}
                </span>

                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-slate-700">
                  {isOpen ? (
                    <FiMinus className="h-5 w-5" />
                  ) : (
                    <FiPlus className="h-5 w-5" />
                  )}
                </span>
              </button>

              <div
                className="grid overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                }}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 pr-8 text-sm leading-relaxed text-slate-500 sm:text-[13px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}