"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "./components/ThemeProvider"
import LoadingScreen from "./components/LoadingScreen"
import AnimatedNavbar from "./components/AnimatedNavbar"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import WhyVisitSection from "./components/WhyVisitSection"
import ExperienceSection from "./components/ExperienceSection"
import AccoladesSection from "./components/AccoladesSection"
import PlanningSection from "./components/PlanningSection"
import TestimonialsSection from "./components/TestimonialsSection"
import CTASection from "./components/CTASection"
import Footer from "./components/Footer"

export default function RestaurantLanding() {
  const [loading, setLoading] = useState(true)
  const [visibleSections, setVisibleSections] = useState(new Set())

  // fake loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  // section observer (runs after loading ends)
  useEffect(() => {
    if (loading) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number.parseInt(entry.target.getAttribute("data-section") || "0")
            setVisibleSections((prev) => new Set([...prev, idx]))
          }
        })
      },
      { threshold: 0.1 },
    )
    document.querySelectorAll("[data-section]").forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [loading])

  return (
    <ThemeProvider>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="min-h-screen">
          <AnimatedNavbar />
          <HeroSection visibleSections={visibleSections} />
          <AboutSection visibleSections={visibleSections} />
          <WhyVisitSection visibleSections={visibleSections} />
          <ExperienceSection visibleSections={visibleSections} />
          <AccoladesSection visibleSections={visibleSections} />
          <PlanningSection visibleSections={visibleSections} />
          <TestimonialsSection visibleSections={visibleSections} />
          <CTASection visibleSections={visibleSections} />
          <Footer />
        </div>
      )}
    </ThemeProvider>
  )
}
