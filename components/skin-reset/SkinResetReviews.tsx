'use client'

import { useState } from 'react'
import { ChevronDown, Star } from 'lucide-react'
import { tidy } from '@/lib/typography'

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

function Stars({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`${className} text-amber-500`} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  )
}

export default function SkinResetReviews() {
  const [showAll, setShowAll] = useState(false)
  const displayedReviews = showAll ? reviews : reviews.slice(0, 4)

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white border-t border-sand-200">
      <div className="max-w-6xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-3 text-sm">
            <Stars />
            <span className="font-medium text-ink">4.9</span>
            <span className="text-harmony-500">from 64+ reviews on Google</span>
          </div>
          <h2 className="h2-display mt-5">
            What our <em className="italic">patients say</em>
          </h2>
          <p className="text-harmony-600 mt-4 leading-relaxed">
            Real reviews from real patients who have experienced Claire&apos;s care at Clarity&nbsp;Clinic&nbsp;Bedford
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {displayedReviews.map((review, index) => (
            <figure
              key={index}
              className="bg-ivory border border-sand-200 rounded-xl p-6 sm:p-7 flex flex-col"
            >
              <Stars />
              <blockquote className="mt-4 text-[15px] sm:text-base text-harmony-700 leading-relaxed">
                &ldquo;{tidy(review.text)}&rdquo;
              </blockquote>

              <figcaption className="mt-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-sand-100 border border-sand-200 flex items-center justify-center font-display text-ink">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">
                    {review.name}
                    {review.badge && (
                      <span className="ml-2 text-xs font-normal text-harmony-500">· {review.badge}</span>
                    )}
                  </p>
                  <p className="text-xs text-harmony-500">{review.date}</p>
                </div>
              </figcaption>

              {review.response && (
                <div className="mt-5 pt-4 border-t border-sand-200">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-harmony-500 mb-1.5">Response from Claire</p>
                  <p className="text-sm text-harmony-600 leading-relaxed">
                    {tidy(review.response)}
                  </p>
                </div>
              )}
            </figure>
          ))}
        </div>

        {/* Show More Button */}
        {reviews.length > 4 && (
          <div className="text-center mt-10">
            <button onClick={() => setShowAll(!showAll)} className="btn-outline">
              {showAll ? 'Show Less' : `Show All ${reviews.length} Reviews`}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`}
                strokeWidth={1.5}
              />
            </button>
          </div>
        )}

        {/* Google Review CTA */}
        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/search?q=clarity+clinic+bedford+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-harmony-500 hover:text-ink underline-offset-4 hover:underline transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
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
