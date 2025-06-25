"use client"

import { Star } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export default function AccoladesSection({ visibleSections }) {
  const { theme } = useTheme()

  const accolades = [
    "Awarded third Michelin star in 2022—first ever in northern England",
    "Retained three-star status in 2025 Guide",
    "Fifth consecutive perfect 10/10 from the Good Food Guide",
    "Michelin Green Star for sustainability and locally driven sourcing",
  ]

  return (
    <section
      data-section="5"
      className={`py-20 ${theme.primary} text-gray-700 transition-all duration-500 ${
        visibleSections.has(5) ? "animate-fade-in-up" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-16 ${theme.textLight}`}>Accolades & Recognition</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {accolades.map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300 hover:bg-opacity-20 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Star className="h-12 w-12 mx-auto mb-6 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
