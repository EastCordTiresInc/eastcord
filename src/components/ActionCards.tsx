import Link from "next/link";

const cards = [
  {
    icon: "🛞",
    title: "Buy Used Tires",
    description: "Inspected, quality-checked used tires at honest prices.",
    href: "/used-tires",
  },
  {
    icon: "✨",
    title: "Buy New Tires",
    description: "Brand-new tires for all makes and models.",
    href: "/new-tires",
  },
  {
    icon: "🔄",
    title: "Changeover / Swap",
    description: "Fast seasonal tire swaps. Book your spot online.",
    href: "/appointment",
  },
];

export default function ActionCards() {
  return (
    <section className="bg-[#F7F7F8] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="sr-only">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.href}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-8 flex flex-col group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#E11D2E]/20"
            >
              <span className="text-5xl mb-5" aria-hidden="true">
                {card.icon}
              </span>
              <h3 className="text-xl font-semibold text-[#0D0D0D] mb-3 tracking-tight">{card.title}</h3>
              <p className="text-[#374151] text-sm leading-relaxed flex-1 mb-6">
                {card.title === "Buy New Tires" ? (
                  <>
                    Brand-new tires for all makes and models.{" "}
                    {/* TODO: add tire brands carried e.g. Michelin, Goodyear, Continental */}
                  </>
                ) : (
                  card.description
                )}
              </p>
              <Link
                href={card.href}
                className="text-[#E11D2E] font-semibold text-sm hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                aria-label={`Explore ${card.title}`}
              >
                Explore <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
