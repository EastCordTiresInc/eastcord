import Link from 'next/link'
import Logo from './Logo'

const quickLinks = [
  { label: 'Used Tires', href: '/used-tires' },
  { label: 'New Tires', href: '/new-tires' },
  { label: 'Book Appointment', href: '/appointment' },
  { label: 'Semi Rims', href: '/semi-rims' },
  { label: 'Semi Tires', href: '/semi-tires' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Logo size="md" />
          <p className="mt-4 text-gray-400 text-sm max-w-xs leading-relaxed">
            Milton&apos;s trusted tire shop for used tires, new tires, and seasonal changeovers.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Contact</h3>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li className="flex items-center gap-1.5">
              {/* TODO: replace with real phone number */}
              <span aria-hidden="true">📞</span> TODO-PHONE
            </li>
            <li className="flex items-center gap-1.5">
              {/* TODO: replace with real email address */}
              <span aria-hidden="true">✉️</span> TODO-EMAIL
            </li>
            <li className="flex items-center gap-1.5">
              {/* TODO: replace with real business hours */}
              <span aria-hidden="true">🕐</span> TODO-HOURS
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
        © 2026 Eastcord Tires. All rights reserved.
      </div>
    </footer>
  )
}
