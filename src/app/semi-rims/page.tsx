import Link from 'next/link'

export const metadata = {
  title: 'Used Semi Truck Rims | Eastcord Tires Ontario',
  description: 'Used semi truck rims in Ontario. Quality commercial rims for fleets and owner-operators.',
}

export default function SemiRimsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center py-24 px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-archivo-black)] text-white mb-4">
          Used Semi Truck Rims
        </h1>
        <p className="text-gray-400 text-xl mb-8">Coming Soon — Check back shortly.</p>
        {/* TODO: add semi truck rim inventory */}
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#E11D2E] text-white font-bold rounded hover:bg-red-700 transition-colors duration-200"
          aria-label="Back to home"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}
