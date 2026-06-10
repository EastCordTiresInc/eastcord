import Link from "next/link";

export default function SemiChips() {
  return (
    <section className="bg-brand-dark pb-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-white mb-6">
          Also Serving Commercial Fleets
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/semi-rims"
            className="border-2 border-brand-red text-white bg-transparent hover:bg-brand-red font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm"
            aria-label="Browse used semi truck rims"
          >
            Used Semi Truck Rims
          </Link>
          <Link
            href="/semi-tires"
            className="border-2 border-brand-red text-white bg-transparent hover:bg-brand-red font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm"
            aria-label="Browse used semi truck tires"
          >
            Used Semi Truck Tires
          </Link>
        </div>
      </div>
    </section>
  );
}
