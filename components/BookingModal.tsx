'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import { siteConfig } from '@/lib/config'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

type ConsultationType = 'in-person' | 'video'

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [consultationType, setConsultationType] = useState<ConsultationType>('in-person')
  const iframeKey = useRef(0)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Force iframe reload when modal opens
      iframeKey.current += 1
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl w-full max-h-[95vh] overflow-y-auto animate-modal-slide-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition-colors z-10 shadow-lg"
        >
          <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-6 sm:p-8 text-white rounded-t-2xl sm:rounded-t-3xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">
            Book Your Skin Analysis
          </h2>
          <p className="text-white/90 text-sm sm:text-base">
            Professional skin assessment with Claire Emmerson, RN
          </p>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {/* Consultation Type Selector - Only show if video consultations enabled */}
          {siteConfig.videoConsultationsEnabled && (
            <div className="mb-4">
              <p className="text-sm font-medium text-neutral-700 mb-2">Choose consultation type:</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setConsultationType('in-person')}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 transition-all ${
                    consultationType === 'in-person'
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="font-medium">In-Person</span>
                </button>
                <button
                  onClick={() => setConsultationType('video')}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 transition-all ${
                    consultationType === 'video'
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">Video Call</span>
                </button>
              </div>
            </div>
          )}

          {/* Consultation Info */}
          <div className="bg-primary-50 rounded-xl p-4 mb-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 mb-1">
                  {consultationType === 'video' ? 'Video Skin Analysis' : 'In-Person Skin Analysis'}: £{siteConfig.consultationFee}
                </h3>
                <p className="text-sm text-neutral-600">
                  {consultationType === 'video'
                    ? 'Connect from the comfort of your home. Discuss your concerns and receive expert advice via video call.'
                    : 'Visit our Bedford clinic for a professional skin assessment and personalized treatment plan.'
                  }
                  {' '}<span className="font-medium text-primary-700">FREE when you proceed with treatment</span> - fully redeemable.
                </p>
              </div>
            </div>
          </div>

          {/* Embedded Booking Calendar */}
          <div className="rounded-xl overflow-hidden bg-neutral-50 min-h-[500px] relative">
            {!scriptLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-3"></div>
                  <p className="text-sm text-neutral-500">Loading booking calendar...</p>
                </div>
              </div>
            )}
            <iframe
              key={iframeKey.current}
              src="https://link.morpheus8bedford.co.uk/widget/booking/DLS6oCk7EeKPL2r1g6Mw"
              style={{ width: '100%', height: '600px', border: 'none', overflow: 'hidden' }}
              scrolling="no"
              id="DLS6oCk7EeKPL2r1g6Mw_1765136262424"
              title="Book Consultation"
              allow="payment"
              onLoad={() => setScriptLoaded(true)}
            />
          </div>
          <Script
            src="https://link.morpheus8bedford.co.uk/js/form_embed.js"
            strategy="lazyOnload"
          />

          {/* Alternative Contact */}
          <div className="mt-4 pt-4 border-t border-neutral-200">
            <p className="text-sm text-neutral-500 text-center mb-3">Or contact us directly:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="tel:+447414154007"
                className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full text-sm hover:bg-neutral-200 transition-colors"
              >
                <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                07414 154007
              </a>
              <a
                href="https://wa.me/447414154007?text=Hi%20Claire%2C%20I%27m%20interested%20in%20booking%20an%20Alma%20Harmony%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-sm hover:bg-green-200 transition-colors text-green-700"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-4 pt-4 border-t border-neutral-200">
            <div className="flex justify-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>CQC Registered</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Award-Winning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
