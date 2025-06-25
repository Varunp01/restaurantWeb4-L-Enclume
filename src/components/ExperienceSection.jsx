"use client"

import { useTheme } from "./ThemeProvider"

export default function ExperienceSection({ visibleSections }) {
  const { theme } = useTheme()

  const experiences = [
    {
      title: "Daily Tasting Menu",
      desc: 'A seamless journey of 16–20 dishes inspired by local soils, seas, and seasons—examples include eel and ham-fat fritters, oyster pebbles, venison with charcoal oil, and edible "slate" desserts.',
      image: "/Daily Tasting Menu.jpg",
    },
    {
      title: "Wine & Drink Pairings",
      desc: "Choose from curated wine flights (£80–£275), teas, or bespoke non-alcoholic pairings crafted to complement the tasting journey.",
      image: "/Wine & Drink Pairings.jpg",
    },
    {
      title: "Chef's Table (Aulis)",
      desc: "A six‑seat, behind‑the‑scenes immersion into L'Enclume's kitchen storytelling, hosted in Rogan's experimental space Aulis.",
      image: "/Chef's Table.jpg",
    },
    {
      title: "Stay Nearby",
      desc: "Extend the visit with Rogan's charming rooms at L'Enclume House or Rogan & Co, perfect for a full gastro-break in Cartmel.",
      image: "/Stay Nearby.jpg",
    },
  ]

  return (
    <section
      data-section="4"
      className={`py-20 ${theme.background} transition-all duration-500 ${
        visibleSections.has(4) ? "animate-fade-in-up" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl md:text-5xl font-bold ${theme.text} mb-16 text-center`}>Explore the Experience</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {experiences.map((item, index) => (
            <div
              key={index}
              className={`${theme.card} rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className={`text-2xl font-bold ${theme.text} mb-4`}>{item.title}</h3>
                <p className={`${theme.textLight} leading-relaxed`}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
