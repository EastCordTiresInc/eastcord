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
    <section className="bg-brand-dark py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="sr-only">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.href}
              className="bg-brand-card border-t-4 rounded-lg p-8 flex flex-col group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-950/40"
              style={{ borderTopColor: "#E11D2E" }}
            >
              <span className="text-5xl mb-4" aria-hidden="true">
                {card.icon}
              </span>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-gray-400 text-sm flex-1 mb-6">
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
                className="text-brand-red font-bold text-sm hover:underline group-hover:text-red-400 transition-colors"
                aria-label={`Explore ${card.title}`}
              >
                Explore →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
