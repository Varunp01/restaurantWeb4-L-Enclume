"use client"

import { Button } from "@/components/ui/button"
import { useTheme } from "./ThemeProvider"

export default function CTASection({ visibleSections }) {
  const { theme } = useTheme()

  return (
    <section
      data-section="8"
      className={`py-24 ${theme.primary} text-white text-center transition-all duration-500 ${
        visibleSections.has(8) ? "animate-fade-in-up" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Transform a Cartmel visit into something unforgettable.
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
          <Button
            size="lg"
            className={`${theme.accent} ${theme.hover} text-white px-10 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl`}
          >
            Reserve Tasting Menu
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Join Aulis Chef's Table
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Explore Stay Options
          </Button>
        </div>
      </div>
    </section>
  )
}
