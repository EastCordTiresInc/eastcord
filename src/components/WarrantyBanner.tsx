export default function WarrantyBanner() {
  return (
    <section className="bg-brand-red py-14 px-4 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
          1-Month Exchange Warranty on Used Tires
        </h2>
        <p className="text-lg md:text-xl mb-8 text-red-100">
          Every used tire we sell comes with our exchange guarantee.{" "}
          {/* TODO: add full warranty details — e.g. conditions, process, exclusions */}
        </p>
        <a
          href="/warranty-policy.pdf"
          className="inline-block bg-white text-brand-red font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Download warranty policy PDF"
        >
          Download Warranty Policy (PDF)
        </a>
      </div>
    </section>
  );
}
