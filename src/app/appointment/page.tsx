import Link from 'next/link'

export const metadata = {
  title: 'Book Appointment | Eastcord Tires Milton ON',
  description: 'Book a tire changeover or service appointment at Eastcord Tires in Milton, Ontario.',
}

export default function AppointmentPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center py-24 px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-archivo-black)] text-white mb-4">
          Book Appointment
        </h1>
        <p className="text-gray-400 text-xl mb-8">Coming Soon — Check back shortly.</p>
        {/* TODO: add appointment booking form or calendar integration */}
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
