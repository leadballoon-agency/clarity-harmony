'use client'

import { useState } from 'react'

interface SkinResetAssessmentProps {
  onBookingClick: () => void
}

const treatmentAreas = [
  {
    id: 'texture',
    name: 'Skin Texture',
    icon: '✨',
    concerns: ['Rough skin', 'Uneven texture', 'Large pores']
  },
  {
    id: 'pigmentation',
    name: 'Pigmentation',
    icon: '☀️',
    concerns: ['Age spots', 'Sun damage', 'Uneven tone']
  },
  {
    id: 'lines',
    name: 'Fine Lines',
    icon: '🌿',
    concerns: ['Crow\'s feet', 'Forehead lines', 'Around mouth']
  },
  {
    id: 'scarring',
    name: 'Scarring',
    icon: '🔬',
    concerns: ['Acne scars', 'Surgical scars', 'Textural scars']
  },
  {
    id: 'tone',
    name: 'Skin Tone',
    icon: '💫',
    concerns: ['Dullness', 'Tired appearance', 'Lack of radiance']
  },
  {
    id: 'rejuvenation',
    name: 'Rejuvenation',
    icon: '🌸',
    concerns: ['Overall refresh', 'Collagen boost', 'Skin health']
  }
]

export default function SkinResetAssessment({ onBookingClick }: SkinResetAssessmentProps) {
  const [step, setStep] = useState(0) // 0 = concern selection, 1-2 = questions, 3 = results
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([])
  const [answers, setAnswers] = useState<Record<number, string>>({})

  const questions = [
    {
      id: 1,
      question: "Can you take 5-7 days for your skin to heal?",
      options: [
        { value: 'yes', label: 'Yes, I can plan around it' },
        { value: 'weekend', label: 'Only over a long weekend' },
        { value: 'minimal', label: 'I need minimal downtime' }
      ]
    },
    {
      id: 2,
      question: "What result matters most to you?",
      options: [
        { value: 'natural', label: 'Natural - just look well-rested' },
        { value: 'noticeable', label: 'Noticeable improvement' },
        { value: 'dramatic', label: 'Significant transformation' }
      ]
    }
  ]

  const toggleConcern = (id: string) => {
    setSelectedConcerns(prev =>
      prev.includes(id)
        ? prev.filter(c => c !== id)
        : [...prev, id]
    )
  }

  const handleContinue = () => {
    if (selectedConcerns.length > 0) {
      setStep(1)
    }
  }

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [step]: value }
    setAnswers(newAnswers)
    setStep(step + 1)
  }

  const currentQuestion = step >= 1 && step <= questions.length ? questions[step - 1] : null
  const isComplete = step > questions.length

  const getRecommendation = () => {
    const downtime = answers[1]
    const result = answers[2]
    const multipleConcerns = selectedConcerns.length >= 3

    if (downtime === 'minimal') {
      return {
        plan: 'Gentle Reset',
        sessions: '3 sessions',
        description: 'Lower intensity treatments spaced further apart for gradual improvement with minimal social downtime.',
        price: '£995 for 3 sessions',
        ideal: 'Ideal if you have commitments and prefer subtle, progressive results.'
      }
    }

    if (result === 'dramatic' || multipleConcerns) {
      return {
        plan: 'Complete Reset',
        sessions: '2-3 sessions',
        description: 'Higher intensity CO2 treatment for comprehensive skin renewal. Claire may recommend the ablative option for maximum results.',
        price: '£395/session or £995 for 3',
        ideal: 'Ideal if you want the most significant improvement and can take proper recovery time.'
      }
    }

    return {
      plan: 'Signature Reset',
      sessions: '1-2 sessions',
      description: 'Our most popular approach. One powerful session often delivers remarkable results. A second session available if desired.',
      price: '£395/session',
      ideal: 'Ideal for most women wanting natural-looking rejuvenation.'
    }
  }

  const handleStartOver = () => {
    setStep(0)
    setSelectedConcerns([])
    setAnswers({})
  }

  const totalSteps = questions.length + 1 // concerns + 2 questions

  return (
    <section id="assessment" className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-sm">CO2 Fractional Laser</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Find Your Perfect
            <span className="block gradient-text">Skin Reset Plan</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mt-3 max-w-2xl mx-auto">
            {step === 0
              ? "Select your skin concerns below. CO2 fractional laser addresses multiple issues in one powerful treatment."
              : !isComplete
                ? "Just a couple more questions to personalise your recommendation"
                : "Based on your answers, here's our recommendation"
            }
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-premium-lg p-6 sm:p-8 lg:p-10">
          {/* Progress Bar */}
          {!isComplete && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-neutral-600">
                  {step === 0 ? 'Step 1: Select Concerns' : `Step ${step + 1}: Quick Questions`}
                </span>
                <span className="text-sm text-neutral-500">{step + 1} of {totalSteps}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-500"
                  style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Step 0: Concern Selection */}
          {step === 0 && (
            <>
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold">What bothers you most about your skin?</h3>
                <p className="text-neutral-500 text-sm mt-2">Select all that apply</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                {treatmentAreas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => toggleConcern(area.id)}
                    className={`relative text-left rounded-xl p-4 border-2 transition-all duration-200 ${
                      selectedConcerns.includes(area.id)
                        ? 'border-primary-500 bg-primary-50 shadow-md ring-2 ring-primary-500/20'
                        : 'border-neutral-200 bg-white hover:border-primary-300 hover:bg-primary-50/50'
                    }`}
                  >
                    {/* Checkmark */}
                    {selectedConcerns.includes(area.id) && (
                      <div className="absolute top-3 right-3 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}

                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{area.icon}</span>
                      <h4 className="font-semibold text-neutral-800 text-sm">{area.name}</h4>
                    </div>
                    <ul className="space-y-1">
                      {area.concerns.map((concern, cidx) => (
                        <li key={cidx} className="flex items-center text-xs text-neutral-600">
                          <svg className="w-3 h-3 text-primary-500 mr-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {concern}
                        </li>
                      ))}
                    </ul>
                  </button>
                ))}
              </div>

              {/* Continue Button */}
              <div className="text-center">
                <button
                  onClick={handleContinue}
                  disabled={selectedConcerns.length === 0}
                  className={`inline-flex items-center px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                    selectedConcerns.length > 0
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-xl hover:scale-105'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Continue
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                {selectedConcerns.length > 0 && (
                  <p className="text-sm text-primary-600 mt-3 font-medium">
                    {selectedConcerns.length} concern{selectedConcerns.length > 1 ? 's' : ''} selected
                  </p>
                )}
              </div>

              {/* Info Box */}
              <div className="mt-8 bg-gradient-to-br from-primary-50 to-white rounded-xl p-5 border border-primary-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-800">Start With a Professional Skin Analysis</p>
                    <p className="text-sm text-neutral-600 mt-1">
                      CO2 fractional laser addresses all these concerns in one treatment. Your journey begins with a £25 skin analysis with Claire (fully redeemable against treatment) to create your personalised plan.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Steps 1-2: Questions */}
          {currentQuestion && (
            <>
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-8">
                {currentQuestion.question}
              </h3>

              <div className="space-y-3 sm:space-y-4 max-w-xl mx-auto">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-left hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 active:scale-[0.98] group"
                  >
                    <span className="font-medium text-neutral-700 group-hover:text-primary-700 text-base sm:text-lg">
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Back button */}
              <button
                onClick={() => setStep(step - 1)}
                className="mt-6 text-sm text-neutral-500 hover:text-primary-600 transition-colors flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            </>
          )}

          {/* Results */}
          {isComplete && (
            <div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-neutral-500 uppercase tracking-wide font-medium">Your Recommended Plan</p>
                <h3 className="text-2xl sm:text-3xl font-bold gradient-text mt-1">{getRecommendation().plan}</h3>
              </div>

              {/* Selected Concerns Summary */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {selectedConcerns.map(id => {
                  const area = treatmentAreas.find(a => a.id === id)
                  return area ? (
                    <span key={id} className="inline-flex items-center bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                      <span className="mr-1">{area.icon}</span>
                      {area.name}
                    </span>
                  ) : null
                })}
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl sm:rounded-2xl p-5 sm:p-6 mb-6 max-w-xl mx-auto">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-neutral-500">Treatment Plan</span>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {getRecommendation().sessions}
                  </span>
                </div>

                <p className="text-neutral-700 mb-3 leading-relaxed">
                  {getRecommendation().description}
                </p>

                <p className="text-sm text-neutral-500 italic">
                  {getRecommendation().ideal}
                </p>

                <div className="mt-4 pt-4 border-t border-primary-100">
                  <p className="font-bold text-xl text-neutral-800">
                    {getRecommendation().price}
                  </p>
                  <p className="text-sm text-neutral-500 mt-1">
                    Consultation: £25 (fully redeemable against treatment)
                  </p>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={onBookingClick}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  Book Skin Analysis - £25
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <p className="text-sm text-primary-600 mt-2 font-medium">FREE when you proceed with treatment</p>

                <button
                  onClick={handleStartOver}
                  className="block mx-auto mt-4 text-sm text-neutral-500 hover:text-primary-600 transition-colors py-2"
                >
                  ← Retake Assessment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
