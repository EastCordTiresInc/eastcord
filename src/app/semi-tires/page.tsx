import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Used Semi Truck Tires Ontario | Eastcord Tires",
  description:
    "Used semi truck tires for fleets and owner-operators across Ontario. Eastcord Tires in Milton, ON — one of the few shops stocking commercial truck tires.",
};

export default function SemiTiresPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center px-4 text-center">
      <span className="text-6xl mb-6" aria-hidden="true">🚛</span>
      <h1 className="text-4xl sm:text-5xl font-[family-name:var(--font-archivo-black)] text-white mb-4">
        Used Semi Truck Tires
      </h1>
      <p className="text-gray-400 text-lg mb-2">Coming Soon</p>
      <p className="text-gray-500 text-sm max-w-md mb-8">
        {/* TODO: Add semi tire inventory, sizes (e.g. 11R22.5, 295/75R22.5), brands, and pricing */}
        Our commercial tire inventory page is coming soon. Reach out directly
        for current stock serving fleets across Ontario.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#E11D2E] hover:bg-red-700 text-white font-bold rounded text-sm transition-colors duration-200"
      >
        ← Back to Home
      </Link>
    </main>
  );
}
