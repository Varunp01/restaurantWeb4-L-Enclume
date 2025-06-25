"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Menu, X, Star, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTheme } from "./ThemeProvider"

export default function AnimatedNavbar() {
  const { theme, currentTheme, setCurrentTheme, themes } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { name: "Home", section: "1" },
    { name: "About", section: "2" },
    { name: "Experience", section: "4" },
    { name: "Visit", section: "6" },
    { name: "Reviews", section: "7" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? `${theme.card} shadow-lg backdrop-blur-md` : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className={`w-10 h-10 ${theme.primary} rounded-full flex items-center justify-center`}>
              {/* <Star className="h-6 w-6 text-white" /> */}
              <img src="/Logo.png" alt="Logo" className="h-9 w-9"/>
            </div>
            <h1
              className={`text-2xl font-bold ${isScrolled ? theme.text : "text-white"} transition-colors duration-300`}
            >
              L'Enclume
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className={`${
                  isScrolled ? theme.text : "text-white"
                } hover:${theme.accent.replace("bg-", "text-")} transition-all duration-300 font-medium transform hover:scale-105`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Theme Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className={`${
                    isScrolled ? `${theme.text} border-current` : "text-white border-white"
                  } ${theme.hover} transition-all duration-300`}
                >
                  Theme <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className={theme.card}>
                {Object.entries(themes).map(([key, themeOption]) => (
                  <DropdownMenuItem
                    key={key}
                    onClick={() => setCurrentTheme(key)}
                    className={`${currentTheme === key ? theme.secondary : ""} ${theme.text} cursor-pointer hover:bg-slate-100`}
                  >
                    {themeOption.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden ${isScrolled ? theme.text : "text-white"} transition-colors duration-300`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className={`${theme.card} rounded-lg mt-2 p-4 shadow-lg`}>
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className={`block w-full text-left py-3 px-4 ${theme.text} hover:${theme.secondary} rounded-lg transition-all duration-300 transform hover:scale-105`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </button>
            ))}
            <div className="border-t pt-4 mt-4">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <MapPin className={`h-4 w-4 ${theme.accent.replace("bg-", "text-")} ${theme.textLight}`} />
                  <span className={theme.textLight}>Cartmel, Cumbria</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone className={`h-4 w-4 ${theme.accent.replace("bg-", "text-")} ${theme.textLight}`} />
                  <span className={theme.textLight}>Book Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
