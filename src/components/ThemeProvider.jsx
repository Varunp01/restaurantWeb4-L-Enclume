"use client"

import { createContext, useContext, useState } from "react"

const themes = {
  classic: {
    name: "Classic",
    primary: "bg-amber-900",
    secondary: "bg-amber-100",
    accent: "bg-amber-600",
    text: "text-amber-900",
    textLight: "text-amber-700",
    background: "bg-amber-50",
    card: "bg-white",
    hover: "hover:bg-amber-700",
  },
  modern: {
    name: "Modern",
    primary: "bg-slate-900",
    secondary: "bg-slate-100",
    accent: "bg-slate-700",
    text: "text-slate-900",
    textLight: "text-slate-700",
    background: "bg-slate-50",
    card: "bg-white",
    hover: "hover:bg-slate-800",
  },
  dark: {
    name: "Dark",
    primary: "bg-gray-900",
    secondary: "bg-gray-800",
    accent: "bg-gray-600",
    text: "text-white",
    textLight: "text-gray-300",
    background: "bg-gray-900",
    card: "bg-gray-800",
    hover: "hover:bg-gray-700",
  },
}

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState("classic")

  const theme = themes[currentTheme]

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, setCurrentTheme, themes }}>
      <div className={`${theme.background} transition-all duration-500`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
