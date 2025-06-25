"use client"

import { useTheme } from "./ThemeProvider"

export default function WhyVisitSection({ visibleSections }) {
  const { theme } = useTheme()

  const reasons = [
    "First three‑Michelin-starred restaurant in Northern England",
    "Daily menu shaped by farm and wild harvest",
    "Intimate rooms & chef's table experience",
    "Hospitality that's warm and unpretentious",
    "Exceptional wine & non‑alcoholic pairings",
    "Green Star sustainability via farm‑to‑table ethos",
  ]

  return (
    <section
      data-section="3"
      className={`py-20 ${theme.secondary} transition-all duration-500 ${
        visibleSections.has(3) ? "animate-fade-in-up" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl md:text-5xl font-bold ${theme.text} mb-16 text-center`}>Why It's Worth a Visit</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((item, index) => (
            <div
              key={index}
              className={`${theme.card} p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`${theme.accent} text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6 font-bold text-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {index + 1}
              </div>
              <p className={`${theme.text} font-medium leading-relaxed`}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
