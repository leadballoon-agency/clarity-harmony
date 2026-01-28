'use client'

import { useState } from 'react'

const reviews = [
  {
    name: 'Angela Mcgrath',
    date: 'a week ago',
    text: "Love Morpheus8! This treatment really works for skin tightening, I can visibly see better facial structure after the first session, I just had my second & looking forward to the results. I felt very comfortable throughout the treatment.",
    response: "Thank you so much for your wonderful review, Angela! We're thrilled Morpheus8 is already giving you visible tightening and that Claire made you comfortable with the numbing cream and her professional, knowledgeable care.",
  },
  {
    name: 'Anita Connolly',
    date: '2 weeks ago',
    text: "Claire is a fantastic aesthetic nurse. She makes you feel comfortable as soon as you arrive. Claire is professional and I trust her to provide the treatment she suggests.",
    response: "Thank you so much for your kind words — it truly means the world to me. I'm so pleased you felt comfortable and well cared for, as creating a calm, professional and safe environment is at the heart of what we do at Clarity Clinic.",
  },
  {
    name: 'Kelly Critcher',
    date: '3 weeks ago',
    text: "Claire is so lovely, and clearly an expert in what she does. Everything is explained well and questions answered. Altogether very professional! Looking forward to seeing her again in February.",
    response: "Thank you, Kelly — we're so glad Claire provided such a professional, clear experience. She'll be delighted to hear your kind words.",
  },
  {
    name: 'Sarah Harnan',
    date: '3 months ago',
    text: "Claire makes you feel at ease in this sweet little studio and my appointment was quick and painless. The results are great. I will definitely be coming back!",
    response: "Thank you, Sarah! We love to hear this. We have some really exciting treatments launching very soon!",
  },
  {
    name: 'Kirsty Jones',
    date: '7 months ago',
    text: "Supportive, knowledgeable and helpful staff. The treatment started working after the first session and improved each time. Felt very pleased with results. Claire supported me throughout, clear explanations given.",
    response: "Thank you, Kirsty!",
    badge: 'Local Guide',
  },
  {
    name: 'Kay Tap',
    date: '2 years ago',
    text: "Amazing experience from start to finish with almost instant results! Claire is extremely knowledgeable and passionate about her treatments and products which gave me confidence in what she selected for me. I noticed after day 1 my skin was glowing.",
    response: "This is so lovely to hear! I'm so delighted that your results are so quick and cannot wait to see you in person to admire that glowing skin.",
  },
  {
    name: 'Emma Adams',
    date: 'a year ago',
    text: "I recently had the pleasure of receiving a treatment from Claire at Clarity Cosmetics and I am absolutely delighted with the entire experience. From the moment I walked through the doors, I was greeted by Claire's warm and professional manner.",
    response: "Such a fantastically thorough review. Thank you so much for taking the time to write this lovely review.",
    badge: 'Local Guide',
  },
  {
    name: 'Lorraine',
    date: 'a year ago',
    text: "I was recommended to Claire from my daughter-in-law. I was looking for a little more natural lift around areas on my face so I booked a consultation. Claire was so understanding and recommended PRP treatment. I noticed some improvement after the first session.",
    response: "Thank you for the lovely review, Lorraine! I'm so glad you've been seeing good results. PRP is such a fantastic regenerative treatment.",
  },
]

export default function SkinResetReviews() {
  const [showAll, setShowAll] = useState(false)
  const displayedReviews = showAll ? reviews : reviews.slice(0, 4)

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-lg font-semibold text-neutral-800">4.9</span>
            <span className="text-neutral-500">from 64+ reviews on Google</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            What Our
            <span className="block gradient-text">Patients Say</span>
          </h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Real reviews from real patients who have experienced Claire&apos;s care at Clarity Clinic Bedford
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {displayedReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-premium hover:shadow-premium-lg transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-neutral-800">{review.name}</h3>
                      {review.badge && (
                        <span className="text-[10px] bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full font-medium">
                          {review.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-neutral-500">{review.date}</p>
                  </div>
                </div>
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Response */}
              {review.response && (
                <div className="bg-primary-50 rounded-xl p-4 border-l-4 border-primary-400">
                  <p className="text-xs font-medium text-primary-700 mb-1">Response from Claire</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {review.response}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {reviews.length > 4 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-primary-500 text-primary-600 rounded-full font-medium hover:bg-primary-50 transition-colors"
            >
              {showAll ? 'Show Less' : `Show All ${reviews.length} Reviews`}
              <svg
                className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {/* Google Review CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?q=clarity+clinic+bedford+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-primary-600 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Read all reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
