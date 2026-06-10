import Link from "next/link";

export const metadata = {
  title: "New Tires Milton ON | Eastcord Tires",
  description: "Brand-new tires for all makes and models in Milton, ON.",
};

export default function NewTiresPage() {
  return (
    <main className="min-h-screen bg-brand-dark flex flex-col items-center justify-center text-center px-4 py-24">
      <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
        New Tires
      </h1>
      <p className="text-gray-400 text-lg mb-8">
        Coming Soon — Check back shortly.
      </p>
      {/* TODO: add new tire brands, sizing selector, and pricing catalog */}
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
