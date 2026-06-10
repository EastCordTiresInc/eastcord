export default function LocationSection() {
  return (
    <section id="contact" className="bg-[#F7F7F8] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0D0D0D] mb-3 tracking-tight">
            Find Us — Milton, Ontario
          </h2>
          <p className="text-[#374151] text-sm max-w-md mx-auto leading-relaxed">
            Serving Milton, Oakville, Burlington, Brampton, and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact info */}
          <div>
            <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm">
              <h3 className="text-[#0D0D0D] font-semibold text-lg mb-6">Contact &amp; Hours</h3>
              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-4">
                  <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">📍</span>
                  <div>
                    <span className="font-semibold text-[#0D0D0D] block mb-0.5">Address</span>
                    {/* TODO: Replace with the actual street address once confirmed */}
                    <span className="text-[#374151]">TODO-ADDRESS, Milton, ON, Canada</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">📞</span>
                  <div>
                    <span className="font-semibold text-[#0D0D0D] block mb-0.5">Phone</span>
                    {/* TODO: Replace with the actual business phone number */}
                    <a href="tel:TODO-PHONE" className="text-[#E11D2E] hover:underline">
                      TODO-PHONE
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">🕐</span>
                  <div>
                    <span className="font-semibold text-[#0D0D0D] block mb-0.5">Hours</span>
                    {/* TODO: Replace with actual operating hours */}
                    <span className="text-[#374151] block">Mon – Fri: TODO-HOURS</span>
                    <span className="text-[#374151] block">Sat: TODO-HOURS</span>
                    <span className="text-[#374151] block">Sun: TODO-HOURS</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-sm">
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
              className="w-full h-80 lg:h-96 bg-white flex flex-col items-center justify-center gap-3 text-center px-6"
              aria-label="Map placeholder"
            >
              <span className="text-5xl" aria-hidden="true">🗺️</span>
              <p className="text-[#374151] text-sm">
                Map coming soon — we&apos;re in Milton, Ontario.
              </p>
              {/* TODO: Add Google Maps embed iframe here */}
              <a
                href="https://maps.google.com/?q=Milton,ON"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-2 bg-[#E11D2E] text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
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
