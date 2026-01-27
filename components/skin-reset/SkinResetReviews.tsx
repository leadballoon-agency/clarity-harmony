const reviews = [
  {
    name: 'Sarah, 54',
    location: 'Bedford',
    text: "I finally feel like myself again. The results are natural - my friends just think I look well-rested.",
    rating: 5,
  },
  {
    name: 'Michelle, 48',
    location: 'Milton Keynes',
    text: "Claire made me feel so comfortable. She understood exactly what I wanted - improvement without looking overdone.",
    rating: 5,
  },
  {
    name: 'Jane, 61',
    location: 'Northampton',
    text: "I was nervous about laser at my age but Claire reassured me. My pigmentation has faded dramatically.",
    rating: 5,
  },
]

export default function SkinResetReviews() {
  return (
    <section className="py-10 sm:py-14 md:py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-5xl mx-auto section-padding">
        <div className="text-center mb-8">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-md"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-4">
                &quot;{review.text}&quot;
              </p>

              {/* Author */}
              <div className="text-sm">
                <p className="font-semibold text-neutral-800">{review.name}</p>
                <p className="text-neutral-500">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google rating badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-sm font-medium text-neutral-700">5.0 rating</span>
            <span className="text-neutral-400">|</span>
            <span className="text-sm text-neutral-500">12 reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
