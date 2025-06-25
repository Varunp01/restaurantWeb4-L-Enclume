"use client"

import { useTheme } from "./ThemeProvider"

export default function LoadingScreen() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen flex items-center justify-center ${theme.background} transition-all duration-500`}>
      <div className="text-center">
        <div className="relative mb-8">
          {/* <div className={`w-24 h-24 ${theme.primary} rounded-full animate-pulse mx-auto mb-4`}></div> */}
          <img src="/Logo.png" alt="Logo" className={`w-24 h-24 ${theme.primary} rounded-full animate-pulse mx-auto mb-4`}/>          
          <div
            className={`w-16 h-16 ${theme.accent} rounded-full animate-ping absolute top-4 left-1/2 transform -translate-x-1/2`}
          ></div>
        </div>
        <h1 className={`text-4xl font-bold ${theme.text} mb-4 animate-fade-in`}>L'Enclume</h1>
        <p className={`${theme.textLight} animate-fade-in-delay`}>Preparing your culinary journey...</p>
        <div className="flex justify-center mt-6">
          <div className={`w-8 h-8 ${theme.primary} rounded-full animate-bounce mr-2`}></div>
          <div
            className={`w-8 h-8 ${theme.primary} rounded-full animate-bounce mr-2`}
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className={`w-8 h-8 ${theme.primary} rounded-full animate-bounce`}
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  )
}
