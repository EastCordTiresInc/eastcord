import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

export default function Logo({ size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
  };

  return (
    <span className={`${archivoBlack.className} ${sizeClasses[size]} tracking-tight`}>
      <span style={{ color: "#E11D2E" }}>EAST</span>
      <span className="text-white">CORD</span>
      <span className="text-gray-300"> TIRES</span>
    </span>
  );
}
