import React from "react";

interface Feature {
  icon: string;
  title: string;
  description: React.ReactNode;
}

const features: Feature[] = [
  {
    icon: "✅",
    title: "Inspected Used Tires",
    description: (
      <>
        Every used tire is inspected before sale.{" "}
        {/* TODO: add specifics about inspection process — tread depth, sidewall check, etc. */}
      </>
    ),
  },
  {
    icon: "⚡",
    title: "Fast Changeovers",
    description: (
      <>
        In and out quickly.{" "}
        {/* TODO: add turnaround time e.g. "Most changeovers completed in under 45 minutes" */}
      </>
    ),
  },
  {
    icon: "🚛",
    title: "Semi-Truck Specialists",
    description:
      "One of the few shops in Ontario stocking semi truck tires & rims.",
  },
  {
    icon: "💰",
    title: "Fair, Transparent Pricing",
    description: (
      <>
        {/* TODO: add pricing details — e.g. price ranges, no hidden fees promise */}
        No hidden fees. Honest quotes every time.
      </>
    ),
  },
];

export default function WhyEastcord() {
  return (
    <section className="bg-white py-20 px-4 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0D0D0D] text-center mb-3 tracking-tight">
          Why Eastcord Tires?
        </h2>
        <p className="text-[#374151] text-center text-sm mb-14 max-w-lg mx-auto leading-relaxed">
          Milton locals choose us for quality, speed, and honest service — every time.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="text-center p-6 rounded-2xl hover:bg-[#F7F7F8] transition-colors duration-200">
              <span className="text-4xl" aria-hidden="true">
                {feature.icon}
              </span>
              <h3 className="text-base font-semibold text-[#0D0D0D] mt-4 mb-2 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-[#374151] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
