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
        <div className="bg-white/5 border-2 border-white p-8 rounded-lg md:w-[560px] mx-auto mb-10">
              <h3 className={`text-3xl font-semibold mb-6 ${theme.primary} uppercase rounded-full font-extrabold py-2`}>Contact Form</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-left font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-white/10 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-left font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-white/10 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-left font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-white/10 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:border-yellow-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`w-full ${theme.accent} hover:bg-yellow-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200`}
                >
                  Send Message
                </button>
              </form>
            </div>
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
