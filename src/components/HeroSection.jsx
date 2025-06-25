"use client"

import { Button } from "@/components/ui/button"
import { useTheme } from "./ThemeProvider"

export default function HeroSection({ visibleSections }) {
  const { theme } = useTheme()

  return (
    <section
      data-section="1"
      className={`py-32 ${theme.primary} text-white relative overflow-hidden transition-all duration-500 ${
        visibleSections.has(1) ? "animate-fade-in-up" : "opacity-0 translate-y-10"
      }`}
      style={{ minHeight: "100vh" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/60"></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/Logobg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="container mx-auto px-4 text-center relative z-10 flex flex-col justify-center min-h-screen">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in leading-tight">
          Cartmel's Three-Star Anvil
        </h1>
        <p className="text-xl md:text-3xl mb-6 animate-fade-in-delay font-light">
          Hyper-local tasting menu, farm‑to‑table brilliance
        </p>
        <p className="text-lg md:text-xl mb-12 opacity-90 animate-fade-in-delay-2 max-w-2xl mx-auto">
          Simon Rogan's heritage-driven cuisine, grown and crafted with passion
        </p>
        <div className="animate-fade-in-delay-3">
          <Button
            size="lg"
            className={`${theme.accent} ${theme.hover} text-white px-12 py-6 text-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl`}
          >
            Book Your Table
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
