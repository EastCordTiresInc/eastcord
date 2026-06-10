"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #1A1A1A 0%, #0A0A0A 70%)",
        backgroundImage:
          "radial-gradient(ellipse at center, #1A1A1A 0%, #0A0A0A 70%), repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 10px, rgba(255,255,255,0.015) 10px, rgba(255,255,255,0.015) 11px)",
      }}
    >
      {/* Tire tread pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(255,255,255,0.03) 28px, rgba(255,255,255,0.03) 30px), repeating-linear-gradient(90deg, transparent, transparent 28px, rgba(255,255,255,0.03) 28px, rgba(255,255,255,0.03) 30px)",
        }}
      />

      {/* Red glow accent */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: "#E11D2E" }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Quality Tires.{" "}
            <span style={{ color: "#E11D2E" }}>Honest Prices.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Milton&apos;s trusted tire shop for used tires, new tires, and seasonal changeovers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/used-tires"
              className="bg-brand-red hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-900/50 w-full sm:w-auto text-center"
              aria-label="Shop used tires"
            >
              Shop Used Tires
            </Link>
            <Link
              href="/appointment"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 w-full sm:w-auto text-center"
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
