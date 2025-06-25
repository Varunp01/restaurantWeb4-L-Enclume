"use client"

import { Star } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export default function TestimonialsSection({ visibleSections }) {
  const { theme } = useTheme()

  const testimonials = [
    {
      text: "L'Enclume is now the only three‑star restaurant in the UK that I am eager to return to... some of the best service I can remember.",
      author: "Jhonatan Cano",
      source: "foodle review",
    },
    {
      text: "Few restaurants represent their region more than L'Enclume… flavours linger long in the memory.",
      author: "Michelin Guide",
      source: "on 3-star status",
    },
  ]

  return (
    <section
      data-section="7"
      className={`py-20 ${theme.secondary} transition-all duration-500 ${
        visibleSections.has(7) ? "animate-fade-in-up" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl md:text-5xl font-bold ${theme.text} mb-16 text-center`}>What People Loved Most</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${theme.card} p-10 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300"
                  />
                ))}
              </div>
              <blockquote className={`${theme.textLight} mb-6 italic text-lg leading-relaxed`}>
                "{testimonial.text}"
              </blockquote>
              <cite className={`${theme.text} font-semibold not-italic`}>
                — {testimonial.author}, {testimonial.source}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
