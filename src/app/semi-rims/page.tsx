import Link from 'next/link'

export const metadata = {
  title: 'Used Semi Truck Rims | Eastcord Tires Ontario',
  description: 'Used semi truck rims in Ontario. Quality commercial rims for fleets and owner-operators.',
}

export default function SemiRimsPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F8] flex flex-col items-center justify-center py-24 px-4 text-center">
      <span className="text-6xl mb-6" aria-hidden="true">🚛</span>
      <h1 className="text-4xl md:text-5xl font-semibold text-[#0D0D0D] mb-3 tracking-tight">
        Used Semi Truck Rims
      </h1>
      <p className="text-[#374151] text-lg mb-2">Coming Soon</p>
      <p className="text-[#6B7280] text-sm max-w-md mb-8 leading-relaxed">
        {/* TODO: add semi truck rim inventory, sizes (e.g. 22.5", 24.5"), and pricing */}
        Our commercial rim inventory page is coming soon. Contact us for current stock and pricing.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-[#E11D2E] text-white font-semibold rounded-xl text-sm hover:bg-red-700 transition-colors duration-200"
        aria-label="Back to home"
      >
        ← Back to Home
      </Link>
    </main>
  )
}
