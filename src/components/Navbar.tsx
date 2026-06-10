"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/used-tires", label: "Used Tires" },
  { href: "/new-tires", label: "New Tires" },
  { href: "/appointment", label: "Book Appointment" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-brand-charcoal shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Eastcord Tires Home">
          <Logo size="md" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/appointment"
            className="bg-brand-red hover:bg-red-700 text-white text-sm font-bold px-4 py-2 rounded transition-colors duration-200"
            aria-label="Book a tire appointment"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-brand-charcoal border-t border-gray-700 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-gray-300 hover:text-white text-sm font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/appointment"
            className="block mt-3 bg-brand-red hover:bg-red-700 text-white text-sm font-bold px-4 py-2 rounded text-center transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
