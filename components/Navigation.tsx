'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { treatments } from '@/lib/treatments'
import BookingModal from './BookingModal'

interface NavigationProps {
  onBookingClick?: () => void
}

export default function Navigation({ onBookingClick }: NavigationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false)
  const [isMobileTreatmentsOpen, setIsMobileTreatmentsOpen] = useState(false)
  const [showBooking, setShowBooking] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY > 100)
      setIsScrolled(currentScrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsTreatmentsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navItems = ['Technology', 'About', 'Results', 'FAQ']

  const handleBookingClick = () => {
    if (onBookingClick) {
      onBookingClick()
    } else {
      setShowBooking(true)
    }
  }

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isVisible ? 'top-0' : '-top-24'
      } ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto section-padding">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/clarity-clinic-logo.png"
                alt="Clarity Clinic - Skin, Laser & Intimate Health"
                className="h-12 w-auto"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.slice(0, 2).map((item) => (
                <a
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="font-medium transition-colors text-neutral-700 hover:text-primary-600"
                >
                  {item}
                </a>
              ))}

              {/* Treatments Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
                  className="font-medium transition-colors text-neutral-700 hover:text-primary-600 flex items-center gap-1"
                >
                  Treatments
                  <svg
                    className={`w-4 h-4 transition-transform ${isTreatmentsOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isTreatmentsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-neutral-100 py-2 z-50">
                    <div className="px-4 py-2 border-b border-neutral-100">
                      <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Our Treatments</p>
                    </div>
                    {treatments.map((treatment) => (
                      <Link
                        key={treatment.slug}
                        href={`/treatments/${treatment.slug}`}
                        onClick={() => setIsTreatmentsOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-primary-50 transition-colors"
                      >
                        <span className="text-xl">{treatment.icon}</span>
                        <div>
                          <p className="font-medium text-neutral-800 text-sm">{treatment.shortName}</p>
                          <p className="text-xs text-neutral-500">{treatment.technology}</p>
                        </div>
                      </Link>
                    ))}
                    <div className="px-4 py-2 border-t border-neutral-100 mt-1">
                      <a
                        href="/#treatments"
                        onClick={() => setIsTreatmentsOpen(false)}
                        className="text-sm text-primary-600 font-medium hover:text-primary-700"
                      >
                        View all treatments →
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {navItems.slice(2).map((item) => (
                <a
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="font-medium transition-colors text-neutral-700 hover:text-primary-600"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={handleBookingClick}
                className="inline-flex bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Book Skin Analysis
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`block h-0.5 w-full transition-all bg-neutral-700 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-full transition-all bg-neutral-700 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-full transition-all bg-neutral-700 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-neutral-200">
              <div className="flex flex-col space-y-1">
                {navItems.slice(0, 2).map((item) => (
                  <a
                    key={item}
                    href={`/#${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-neutral-700 hover:text-primary-600 font-medium py-2"
                  >
                    {item}
                  </a>
                ))}

                {/* Mobile Treatments Accordion */}
                <div>
                  <button
                    onClick={() => setIsMobileTreatmentsOpen(!isMobileTreatmentsOpen)}
                    className="w-full flex items-center justify-between text-neutral-700 hover:text-primary-600 font-medium py-2"
                  >
                    Treatments
                    <svg
                      className={`w-4 h-4 transition-transform ${isMobileTreatmentsOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isMobileTreatmentsOpen && (
                    <div className="pl-4 space-y-1 mt-1 mb-2">
                      {treatments.map((treatment) => (
                        <Link
                          key={treatment.slug}
                          href={`/treatments/${treatment.slug}`}
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            setIsMobileTreatmentsOpen(false)
                          }}
                          className="flex items-center gap-2 py-2 text-neutral-600 hover:text-primary-600"
                        >
                          <span>{treatment.icon}</span>
                          <span className="text-sm">{treatment.shortName}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {navItems.slice(2).map((item) => (
                  <a
                    key={item}
                    href={`/#${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-neutral-700 hover:text-primary-600 font-medium py-2"
                  >
                    {item}
                  </a>
                ))}

                <div className="border-t border-neutral-200 pt-3 mt-2 space-y-3">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      handleBookingClick()
                    }}
                    className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-medium text-center w-full"
                  >
                    Book Skin Analysis
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Internal Booking Modal - only used when no onBookingClick prop */}
      {!onBookingClick && (
        <BookingModal isOpen={showBooking} onClose={() => setShowBooking(false)} />
      )}
    </>
  )
}
