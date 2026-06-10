"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white"
      style={{
        backgroundImage:
          "radial-gradient(circle at 60% 40%, rgba(225,29,46,0.05) 0%, transparent 55%), radial-gradient(circle at 20% 80%, rgba(225,29,46,0.03) 0%, transparent 45%)",
      }}
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block mb-6 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#E11D2E] border border-[#E11D2E]/30 rounded-full bg-[#E11D2E]/5">
            Milton, Ontario
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-[#0D0D0D] mb-6 leading-tight tracking-tight">
            Quality Tires.{" "}
            <span style={{ color: "#E11D2E" }}>Honest Prices.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#374151] mb-10 max-w-2xl mx-auto leading-relaxed">
            Milton&apos;s trusted tire shop for used tires, new tires, and seasonal changeovers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/used-tires"
              className="bg-[#E11D2E] hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:shadow-lg hover:shadow-red-200 w-full sm:w-auto text-center"
              aria-label="Shop used tires"
            >
              Shop Used Tires
            </Link>
            <Link
              href="/appointment"
              className="border-2 border-[#0D0D0D] text-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 w-full sm:w-auto text-center"
              aria-label="Book a tire appointment"
            >
              Book Appointment
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
