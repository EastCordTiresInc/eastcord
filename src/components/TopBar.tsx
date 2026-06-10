export default function TopBar() {
  return (
    <div className="bg-[#0A0A0A] border-b border-white/10 py-2 px-4 text-xs text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 md:justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <span>
            {/* TODO: Replace TODO-PHONE with actual phone number e.g. +1 (905) 555-0123 */}
            📞 TODO-PHONE
          </span>
          <span className="hidden md:inline text-gray-600">|</span>
          <span>
            {/* TODO: Replace TODO-HOURS with actual business hours e.g. Mon–Sat 8am–6pm */}
            🕐 TODO-HOURS
          </span>
        </div>
        <span>
          {/* TODO: Replace with actual address once confirmed */}
          📍 Head Office: Milton, ON
        </span>
      </div>
    </div>
  );
}
