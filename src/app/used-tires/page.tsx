import Link from "next/link";

export const metadata = {
  title: "Used Tires Milton | Eastcord Tires",
  description: "Quality inspected used tires in Milton, ON at honest prices.",
};

export default function UsedTiresPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F8] flex flex-col items-center justify-center text-center px-4 py-24">
      <span className="text-6xl mb-6" aria-hidden="true">🛞</span>
      <h1 className="text-4xl md:text-5xl font-semibold text-[#0D0D0D] mb-3 tracking-tight">
        Used Tires
      </h1>
      <p className="text-[#374151] text-lg mb-2">Coming Soon</p>
      <p className="text-[#6B7280] text-sm max-w-md mb-8 leading-relaxed">
        {/* TODO: add used tire inventory listings, sizing filters, and pricing */}
        Our used tire inventory page is on its way. In the meantime, give us a call or visit us in Milton, ON.
      </p>
      <Link
        href="/"
        className="bg-[#E11D2E] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors duration-200"
        aria-label="Back to home page"
      >
        ← Back to Home
      </Link>
    </main>
  );
}
