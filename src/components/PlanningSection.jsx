"use client"

import { MapPin, Users, Clock, Award } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export default function PlanningSection({ visibleSections }) {
  const { theme } = useTheme()

  const planningInfo = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Location",
      desc: "Cavendish Street, Cartmel, Cumbria LA11 6PZ",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Reservations",
      desc: "Essential—available online or by email; limited seating. Many nights book months ahead.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Hours",
      desc: "Lunch & dinner daily (closed Mon lunchtime)",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Dress Code",
      desc: "Smart-casual, comfortable and unpressured",
    },
  ]

  return (
    <section
      data-section="6"
      className={`py-20 ${theme.background} transition-all duration-500 ${
        visibleSections.has(6) ? "animate-fade-in-up" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl md:text-5xl font-bold ${theme.text} mb-16 text-center`}>Planning Your Visit</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {planningInfo.map((item, index) => (
            <div
              key={index}
              className={`${theme.card} p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`${theme.accent} text-white p-4 rounded-full w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {item.icon}
              </div>
              <h3 className={`text-xl font-bold ${theme.text} mb-3`}>{item.title}</h3>
              <p className={`${theme.textLight} leading-relaxed`}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className={`${theme.card} p-8 rounded-xl shadow-lg mt-12 max-w-4xl mx-auto`}>
          <h3 className={`text-2xl font-bold ${theme.text} mb-4 text-center`}>Accessibility & Sustainability</h3>
          <p className={`${theme.textLight} text-center leading-relaxed`}>
            Celebrates seasonal produce from the farm, foraging efforts, and eco-conscious service.
          </p>
        </div>
      </div>
    </section>
  )
}
