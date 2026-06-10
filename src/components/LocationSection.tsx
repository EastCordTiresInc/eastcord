export default function LocationSection() {
  return (
    <section id="contact" className="bg-[#0A0A0A] py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-archivo-black)] text-white mb-4">
            Find Us — Milton, Ontario
          </h2>
          <p className="text-gray-400 text-sm">
            Serving Milton, Oakville, Burlington, Brampton, and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-[#1A1A1A] rounded-lg p-6 border border-white/5">
              <h3 className="text-white font-bold text-lg mb-4">Contact &amp; Hours</h3>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0" aria-hidden="true">📍</span>
                  <div>
                    <span className="font-semibold text-white block">Address</span>
                    {/* TODO: Replace with the actual street address once confirmed */}
                    <span className="text-gray-400">TODO-ADDRESS, Milton, ON, Canada</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0" aria-hidden="true">📞</span>
                  <div>
                    <span className="font-semibold text-white block">Phone</span>
                    {/* TODO: Replace with the actual business phone number */}
                    <a href="tel:TODO-PHONE" className="text-[#E11D2E] hover:underline">
                      TODO-PHONE
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0" aria-hidden="true">🕐</span>
                  <div>
                    <span className="font-semibold text-white block">Hours</span>
                    {/* TODO: Replace with actual operating hours */}
                    <span className="text-gray-400 block">Mon – Fri: TODO-HOURS</span>
                    <span className="text-gray-400 block">Sat: TODO-HOURS</span>
                    <span className="text-gray-400 block">Sun: TODO-HOURS</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="rounded-lg overflow-hidden border border-white/10">
            {/*
              TODO: Replace this placeholder with a real Google Maps embed iframe.
              Example:
              <iframe
                src="https://www.google.com/maps/embed?pb=YOUR_EMBED_KEY"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            */}
            <div
              className="w-full h-80 lg:h-96 bg-[#1A1A1A] flex flex-col items-center justify-center gap-3 text-center px-6"
              aria-label="Map placeholder"
            >
              <span className="text-5xl" aria-hidden="true">🗺️</span>
              <p className="text-gray-400 text-sm">
                Map coming soon — we&apos;re in Milton, Ontario.
              </p>
              {/* TODO: Add Google Maps embed iframe here */}
              <a
                href="https://maps.google.com/?q=Milton,ON"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-2 bg-[#E11D2E] text-white text-xs font-bold rounded hover:bg-red-700 transition-colors duration-200"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
