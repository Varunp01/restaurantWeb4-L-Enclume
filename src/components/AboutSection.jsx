"use client"

import { Star, Leaf, Award } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export default function AboutSection({ visibleSections }) {
  const { theme } = useTheme()

  const features = [
    {
      icon: <Star className="h-8 w-8" />,
      title: "Fully seasonal tasting menus",
      desc: "16–20 courses built daily",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Our Farm sourcing",
      desc: "Plus local foraging",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Historic setting",
      desc: "Medieval smithy tearoom",
    },
  ]

  return (
    <section
      data-section="2"
      className={`py-20 ${theme.background} transition-all duration-500 ${
        visibleSections.has(2) ? "animate-fade-in-up" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold ${theme.text} mb-12 text-center`}>About the Restaurant</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className={`text-lg ${theme.textLight} mb-8 leading-relaxed`}>
                Nestled in an 800-year-old blacksmith's workshop in Cartmel, L'Enclume has been led by Chef Simon Rogan
                since 2002. Grown on his own nearby twelve‑acre farm and foraged locally each morning, the ingredients
                set the harmony for an evolving, 16–20 course Modern British menu.
              </p>
              <p className={`text-lg ${theme.textLight} leading-relaxed`}>
                A destination restaurant with three Michelin stars, a Michelin Green Star, and five AA Rosettes.
              </p>
            </div>
            <div className="relative">
              <img
                src="/Interior.png"
                alt="L'Enclume Restaurant Interior"
                className="rounded-lg shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className={`${theme.card} p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`${theme.accent} text-white p-4 rounded-full w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <h3 className={`text-xl font-semibold ${theme.text} mb-3`}>{item.title}</h3>
                <p className={theme.textLight}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
