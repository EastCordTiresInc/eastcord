import Link from "next/link";

export const metadata = {
  title: "Used Tires Milton | Eastcord Tires",
  description: "Quality inspected used tires in Milton, ON at honest prices.",
};

export default function UsedTiresPage() {
  return (
    <main className="min-h-screen bg-brand-dark flex flex-col items-center justify-center text-center px-4 py-24">
      <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
        Used Tires
      </h1>
      <p className="text-gray-400 text-lg mb-8">
        Coming Soon — Check back shortly.
      </p>
      {/* TODO: add used tire inventory listings, sizing filters, and pricing */}
      <Link
        href="/"
        className="bg-brand-red hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
        aria-label="Back to home page"
      >
        ← Back to Home
      </Link>
    </main>
  );
}
