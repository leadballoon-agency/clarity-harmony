import { MessageCircle, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-ivory border-t border-sand-200 text-harmony-600 pt-14 sm:pt-16 pb-24 sm:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <img
              src="/clarity-clinic-logo.png"
              alt="Clarity Clinic - Skin, Laser & Intimate Health"
              width={1000}
              height={160}
              className="h-8 w-auto mb-5"
            />
            <p className="text-sm leading-relaxed max-w-xs">
              CQC registered, midwife &amp; nurse-led aesthetic clinic in Bedford. Specialising in Alma&nbsp;Harmony skin resurfacing and advanced aesthetic treatments.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-sans font-medium uppercase tracking-[0.18em] text-harmony-500 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+447414154007" className="hover:text-ink transition-colors inline-flex items-center gap-2 py-1">
                  <Phone className="w-4 h-4" strokeWidth={1.5} />
                  07414&nbsp;154007
                </a>
              </li>
              <li>
                <a href="https://wa.me/447414154007" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors inline-flex items-center gap-2 py-1">
                  <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                  WhatsApp
                </a>
              </li>
              <li className="pt-2 leading-relaxed">
                Conway Crescent<br />
                Bedford<br />
                MK41&nbsp;7BW
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-sans font-medium uppercase tracking-[0.18em] text-harmony-500 mb-4">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#about" className="hover:text-ink transition-colors inline-block py-1">About Claire Emmerson</a></li>
              <li><a href="#technology" className="hover:text-ink transition-colors inline-block py-1">Alma Harmony Technology</a></li>
              <li><a href="#treatments" className="hover:text-ink transition-colors inline-block py-1">Treatments</a></li>
              <li><a href="#results" className="hover:text-ink transition-colors inline-block py-1">Results</a></li>
              <li><a href="#faq" className="hover:text-ink transition-colors inline-block py-1">FAQ</a></li>
              <li><a href="https://claritycosmetics.co.uk" className="hover:text-ink transition-colors inline-block py-1" target="_blank" rel="noopener noreferrer">Main Website</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sand-200 mt-12 pt-8 text-center text-xs text-harmony-500">
          <p>&copy; {new Date().getFullYear()} Clarity Clinic. All rights reserved. | CQC Registered</p>
        </div>
      </div>
    </footer>
  )
}
