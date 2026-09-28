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
        isScrolled ? 'bg-ivory/95 backdrop-blur-md border-b border-sand-200 py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto section-padding">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/clarity-clinic-logo.png"
                alt="Clarity Clinic - Skin, Laser & Intimate Health"
                width={1000}
                height={160}
                className="h-7 sm:h-8 w-auto"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-8 text-[15px]">
              {navItems.slice(0, 2).map((item) => (
                <a
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="transition-colors text-harmony-700 hover:text-ink"
                >
                  {item}
                </a>
              ))}

              {/* Treatments Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
                  className="transition-colors text-harmony-700 hover:text-ink flex items-center gap-1"
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
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-md border border-sand-200 py-2 z-50">
                    <div className="px-4 py-2 border-b border-neutral-100">
                      <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Our Treatments</p>
                    </div>
                    {treatments.map((treatment) => (
                      <Link
                        key={treatment.slug}
                        href={`/treatments/${treatment.slug}`}
                        onClick={() => setIsTreatmentsOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-sand-50 transition-colors"
                      >
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
                  className="transition-colors text-harmony-700 hover:text-ink"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={handleBookingClick}
                className="btn-primary !min-h-0 !py-2.5 !px-5 !text-sm"
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
                    className="text-harmony-700 hover:text-ink py-2"
                  >
                    {item}
                  </a>
                ))}

                {/* Mobile Treatments Accordion */}
                <div>
                  <button
                    onClick={() => setIsMobileTreatmentsOpen(!isMobileTreatmentsOpen)}
                    className="w-full flex items-center justify-between text-harmony-700 hover:text-ink py-2"
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
                          className="flex items-center gap-2 py-2 text-harmony-600 hover:text-ink"
                        >
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
                    className="text-harmony-700 hover:text-ink py-2"
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
                    className="btn-primary w-full"
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
