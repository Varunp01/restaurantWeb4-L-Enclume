"use client"

import { MapPin, Phone, Mail, Star, Instagram, Facebook, Twitter } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer className={`${theme.card} py-16 transition-all duration-500`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className={`w-10 h-10 ${theme.primary} rounded-full flex items-center justify-center`}>
                {/* <Star className="h-6 w-6 text-white" /> */}
                <img src="/Logo.png" alt="Logo" className="h-9 w-9"/>
              </div>
              <h3 className={`text-2xl font-bold ${theme.text}`}>L'Enclume</h3>
            </div>
            <p className={`${theme.textLight} mb-6 max-w-md leading-relaxed`}>
              Three Michelin-starred restaurant in the heart of Cartmel, celebrating local ingredients and innovative
              cuisine since 2002.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className={`${theme.accent} text-white p-2 rounded-full hover:scale-110 transition-transform duration-300`}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className={`${theme.accent} text-white p-2 rounded-full hover:scale-110 transition-transform duration-300`}
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className={`${theme.accent} text-white p-2 rounded-full hover:scale-110 transition-transform duration-300`}
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-lg font-semibold ${theme.text} mb-4`}>Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className={`h-4 w-4 ${theme.accent.replace("bg-", "text-")}`} />
                <span className={`${theme.textLight} text-sm`}>Cavendish Street, Cartmel, Cumbria LA11 6PZ</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className={`h-4 w-4 ${theme.accent.replace("bg-", "text-")}`} />
                <span className={`${theme.textLight} text-sm`}>+44 15395 36362</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className={`h-4 w-4 ${theme.accent.replace("bg-", "text-")}`} />
                <span className={`${theme.textLight} text-sm`}>info@lenclume.co.uk</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold ${theme.text} mb-4`}>Quick Links</h4>
            <div className="space-y-2">
              {["Reservations", "Menu", "Private Dining", "Gift Vouchers", "Careers"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className={`block ${theme.textLight} hover:${theme.accent.replace("bg-", "text-")} transition-colors duration-300 text-sm`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={`border-t ${theme.secondary} pt-8`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`${theme.textLight} text-sm mb-4 md:mb-0`}>© 2024 L'Enclume. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className={`${theme.textLight} hover:${theme.accent.replace("bg-", "text-")} transition-colors duration-300`}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className={`${theme.textLight} hover:${theme.accent.replace("bg-", "text-")} transition-colors duration-300`}
              >
                Terms of Service
              </a>
              <a
                href="#"
                className={`${theme.textLight} hover:${theme.accent.replace("bg-", "text-")} transition-colors duration-300`}
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
