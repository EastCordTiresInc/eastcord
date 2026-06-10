import Link from 'next/link'

export const metadata = {
  title: 'Book Appointment | Eastcord Tires Milton ON',
  description: 'Book a tire changeover or service appointment at Eastcord Tires in Milton, Ontario.',
}

export default function AppointmentPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F8] flex flex-col items-center justify-center py-24 px-4 text-center">
      <span className="text-6xl mb-6" aria-hidden="true">🔄</span>
      <h1 className="text-4xl md:text-5xl font-semibold text-[#0D0D0D] mb-3 tracking-tight">
        Book Appointment
      </h1>
      <p className="text-[#374151] text-lg mb-2">Coming Soon</p>
      <p className="text-[#6B7280] text-sm max-w-md mb-8 leading-relaxed">
        {/* TODO: add appointment booking form or calendar integration */}
        Our online booking system is being set up. For now, call us directly to schedule your changeover.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        {/* TODO: Replace href with actual phone number e.g. tel:+19055550123 */}
        <a
          href="tel:TODO-PHONE"
          className="inline-block px-6 py-3 bg-[#E11D2E] text-white font-semibold rounded-xl text-sm hover:bg-red-700 transition-colors duration-200"
        >
          📞 Call to Book
        </a>
        <Link
          href="/"
          className="inline-block px-6 py-3 border-2 border-[#0D0D0D] text-[#0D0D0D] font-semibold rounded-xl text-sm hover:bg-[#0D0D0D] hover:text-white transition-colors duration-200"
          aria-label="Back to home"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}
