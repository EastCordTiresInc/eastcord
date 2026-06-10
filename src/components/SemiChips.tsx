import Link from "next/link";

export default function SemiChips() {
  return (
    <section className="bg-[#F7F7F8] pb-20 px-4 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto text-center pt-12">
        <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-3 tracking-tight">
          Also Serving Commercial Fleets
        </h2>
        <p className="text-[#374151] text-sm mb-8 max-w-md mx-auto leading-relaxed">
          We stock used semi truck tires and rims for fleet and owner-operator needs across Ontario.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/semi-rims"
            className="border-2 border-[#E11D2E] text-[#E11D2E] bg-transparent hover:bg-[#E11D2E] hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm"
            aria-label="Browse used semi truck rims"
          >
            Used Semi Truck Rims
          </Link>
          <Link
            href="/semi-tires"
            className="border-2 border-[#E11D2E] text-[#E11D2E] bg-transparent hover:bg-[#E11D2E] hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm"
            aria-label="Browse used semi truck tires"
          >
            Used Semi Truck Tires
          </Link>
        </div>
      </div>
    </section>
  );
}
