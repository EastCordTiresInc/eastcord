import type { Metadata } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
});

export const metadata: Metadata = {
  title: "Eastcord Tires | Used & New Tires in Milton, ON",
  description:
    "Eastcord Tires in Milton, ON — your local source for used tires Milton, new tires Milton ON, semi truck tires Ontario, and tire changeover Milton. Quality tires at honest prices.",
  keywords: [
    "used tires Milton",
    "new tires Milton ON",
    "semi truck tires Ontario",
    "tire changeover Milton",
    "tire shop Milton",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${archivoBlack.variable} bg-brand-dark text-white antialiased`}>
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
