'use client'

import { useState } from 'react'

interface AssessmentData {
  answers: Record<number, string>
  recommendation: Recommendation
  completedAt: string
}

interface Recommendation {
  treatment: string
  technology: string
  description: string
  benefits: string[]
}

interface AssessmentToolProps {
  onBookingClick?: () => void
  onAssessmentComplete?: (data: AssessmentData) => void
}

export default function AssessmentTool({ onBookingClick, onAssessmentComplete }: AssessmentToolProps) {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState<Record<number, string>>({})

  const questions = [
    {
      id: 1,
      question: "What is your primary skin concern?",
      options: [
        { value: 'tightening', label: 'Skin tightening & laxity', icon: '💪' },
        { value: 'texture', label: 'Skin texture & tone', icon: '✨' },
        { value: 'pigmentation', label: 'Pigmentation & sun damage', icon: '☀️' },
        { value: 'acne', label: 'Acne & acne scars', icon: '🌟' },
        { value: 'vascular', label: 'Redness & vascular issues', icon: '💫' }
      ]
    },
    {
      id: 2,
      question: "What is your skin tone? (All types treatable)",
      options: [
        { value: 'light', label: 'Light (Type I-II)', icon: '🌸' },
        { value: 'medium', label: 'Medium (Type III-IV)', icon: '🌻' },
        { value: 'dark', label: 'Dark (Type V-VI)', icon: '🌺' },
        { value: 'unsure', label: 'Not sure', icon: '❓' }
      ]
    },
    {
      id: 3,
      question: "What level of downtime works for you?",
      options: [
        { value: 'none', label: 'No downtime (back to work same day)', icon: '⚡' },
        { value: 'minimal', label: 'Minimal (1-2 days redness)', icon: '🌿' },
        { value: 'moderate', label: 'Moderate (3-5 days recovery)', icon: '🌳' },
        { value: 'any', label: 'Whatever gives best results', icon: '🏆' }
      ]
    }
  ]

  const currentQuestion = step <= questions.length ? questions[step - 1] : null

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [step]: value }
    setAnswers(newAnswers)
    if (step < questions.length) {
      setStep(step + 1)
    } else {
      setStep(step + 1)
      const recommendation = getRecommendation(newAnswers)
      onAssessmentComplete?.({
        answers: newAnswers,
        recommendation,
        completedAt: new Date().toISOString()
      })
    }
  }

  const getRecommendation = (assessmentAnswers: Record<number, string> = answers): Recommendation => {
    const concern = assessmentAnswers[1]
    const skinType = assessmentAnswers[2]
    const downtime = assessmentAnswers[3]

    // Recommendations based on concern and preferences
    if (concern === 'tightening') {
      return {
        treatment: 'Skin Tightening & Rejuvenation',
        technology: 'ClearLift Pro + Non-Ablative Laser',
        description: 'Non-invasive skin tightening using Q-Switch and Er:Glass 1540nm laser to stimulate deep collagen production for firmer, more youthful skin with no downtime.',
        benefits: ['Non-invasive', 'Collagen stimulation', 'All skin types I-VI']
      }
    }

    if (concern === 'acne') {
      return {
        treatment: 'Acne & Acne Scar Treatment',
        technology: 'ClearSkin Pro',
        description: 'Award-winning Er:Glass 1540nm non-ablative laser targets acne-causing bacteria and stimulates collagen production to improve scarring and skin texture.',
        benefits: ['Treats active acne', 'Reduces scarring', 'All skin types I-VI']
      }
    }

    if (concern === 'pigmentation') {
      if (skinType === 'dark') {
        return {
          treatment: 'Pigmentation Treatment',
          technology: 'Iris Dye-SR IPL',
          description: 'Specially designed narrow band IPL optimized for darker skin tones. Effectively targets melanin to reduce age spots, sun damage, and uneven skin tone with enhanced safety.',
          benefits: ['Optimized for darker skin', 'Even skin tone', 'All skin types I-VI']
        }
      }
      return {
        treatment: 'Pigmentation & Sun Damage Treatment',
        technology: 'IPL + Q-Switch',
        description: 'Combined IPL and Q-Switch laser technology effectively reduces age spots, sun damage, freckles and melasma for a more even complexion.',
        benefits: ['Reduces age spots', 'Evens skin tone', 'All skin types I-VI']
      }
    }

    if (concern === 'vascular') {
      return {
        treatment: 'Vascular Lesion Treatment',
        technology: 'VascuPen + ClearVas',
        description: 'Green diode and Nd:YAG lasers precisely target blood vessels to reduce spider veins, rosacea, broken capillaries and facial redness.',
        benefits: ['Reduces redness', 'Treats spider veins', 'All skin types I-VI']
      }
    }

    // Default: texture/rejuvenation
    if (downtime === 'none' || downtime === 'minimal') {
      return {
        treatment: 'Bio-Boost Skin Rejuvenation',
        technology: 'ClearLift Pro + ClearSkin Pro',
        description: 'ELLE Award-winning Bio-Boost treatment combines Q-Switch and non-ablative laser for visible improvement in fine lines, texture and skin quality with no downtime.',
        benefits: ['No downtime', 'Award-winning', 'All skin types I-VI']
      }
    }

    return {
      treatment: 'Advanced Skin Resurfacing',
      technology: 'SupErb Ablative + ClearSkin Pro',
      description: 'Comprehensive skin resurfacing combining ablative Er:YAG and non-ablative laser for maximum improvement in texture, tone, fine lines and overall skin quality.',
      benefits: ['Maximum results', 'Deep resurfacing', 'All skin types I-VI']
    }
  }

  return (
    <section id="assessment" className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full mb-3">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-primary-700 font-medium text-sm">Personalized Assessment</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            Find Your Perfect
            <span className="gradient-text"> Alma Harmony Treatment</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto px-4 leading-relaxed">
            Answer 3 quick questions for personalized treatment recommendations
          </p>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-premium p-5 sm:p-8 md:p-10 lg:p-12">
          {step <= questions.length && currentQuestion ? (
            <>
              {/* Progress Bar */}
              <div className="mb-6 sm:mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs sm:text-sm text-neutral-600 font-medium">Step {step} of {questions.length}</span>
                  <span className="text-xs sm:text-sm text-primary-600 font-semibold">{Math.round((step / questions.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
                  <div
                    className="bg-gradient-to-r from-primary-400 to-primary-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${(step / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{currentQuestion?.question}</h3>
              </div>

              {/* Options */}
              <div className={`grid gap-3 sm:gap-4 ${currentQuestion.options.length > 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'}`}>
                {currentQuestion?.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="group relative bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:border-primary-500 hover:shadow-lg transition-all duration-300 sm:hover:scale-105 active:scale-[0.98] flex items-center text-left min-h-[60px] sm:min-h-[72px]"
                  >
                    <div className="text-2xl sm:text-3xl mr-3 sm:mr-4 flex-shrink-0">{option.icon}</div>
                    <p className="font-medium text-sm sm:text-base text-neutral-700 group-hover:text-primary-600 leading-tight">
                      {option.label}
                    </p>
                  </button>
                ))}
              </div>
            </>
          ) : (
            /* Results */
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl">✨</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Your Personalized Recommendation</h3>

              <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-4 sm:mb-6 text-left">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-primary-600 mb-1">
                      {getRecommendation().treatment}
                    </h4>
                    <p className="text-sm text-primary-500 font-medium">
                      Technology: {getRecommendation().technology}
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-neutral-600 mb-4">
                  {getRecommendation().description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {getRecommendation().benefits.map((benefit, index) => (
                    <span key={index} className="inline-flex items-center bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                      <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-sm text-neutral-500 mb-6">
                Book a skin analysis with Claire Emmerson, RN to discuss your personalized treatment plan
              </p>

              <div className="flex flex-col gap-3 sm:gap-4">
                <button
                  onClick={onBookingClick}
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3.5 sm:py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[48px]"
                >
                  Book Skin Analysis - £25
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <p className="text-xs text-neutral-500">FREE when you proceed with treatment</p>
                <button
                  onClick={() => {setStep(1); setAnswers({})}}
                  className="w-full inline-flex items-center justify-center text-primary-600 text-sm font-medium hover:text-primary-700 transition-all duration-300"
                >
                  ← Start Over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
