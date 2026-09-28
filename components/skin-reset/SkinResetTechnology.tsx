'use client'

import Image from 'next/image'
import {
  Check,
  Clock,
  CalendarDays,
  Layers,
  ScanFace,
  Users,
  Info,
  Zap,
  SlidersHorizontal,
  ShieldCheck,
  Minus,
  FlaskConical,
} from 'lucide-react'
import { tidy } from '@/lib/typography'

const glance = [
  { icon: Clock, value: '30-60 mins', label: 'Treatment Time' },
  { icon: CalendarDays, value: '2-7 days', label: 'Downtime' },
  { icon: Layers, value: '1-3 typical', label: 'Sessions' },
  { icon: ScanFace, value: 'Face, Eyes, Neck', label: 'Treatment Areas' },
  { icon: Users, value: 'Fitzpatrick 1-5', label: 'Skin Types' },
  { icon: Info, value: 'Mild & Temporary', label: 'Side Effects' },
]

const steps = [
  {
    title: 'Controlled Micro-Injuries',
    text: 'Pixel-sized perforations remove damaged skin while preserving surrounding tissue for faster recovery',
  },
  {
    title: 'Collagen Stimulation',
    text: 'Your body responds by producing fresh collagen and new, healthy skin cells',
  },
  {
    title: 'Visible Transformation',
    text: 'Skin emerges smoother, firmer, and more evenly toned over the following weeks',
  },
]

const reasons = [
  {
    icon: Zap,
    title: '40x More Powerful',
    text: 'The latest Alma Harmony SupErb delivers 40x more energy than the previous generation for dramatic results in fewer sessions',
  },
  {
    icon: SlidersHorizontal,
    title: 'Choose Your Downtime',
    text: 'Fully adjustable settings mean Claire can tailor treatment intensity to your lifestyle - from mild redness to deeper resurfacing',
  },
  {
    icon: ShieldCheck,
    title: 'Fractional & Ablative Options',
    text: 'Both fractional and full ablative settings available - a combination few clinics can offer',
  },
]

export default function SkinResetTechnology() {
  return (
    <section id="technology" className="py-20 sm:py-24 lg:py-28 bg-ivory">
      <div className="max-w-6xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="eyebrow">The Technology</p>
          <h2 className="h2-display mt-4">
            Alma&nbsp;Harmony SupErb <em className="italic">fractional laser resurfacing</em>
          </h2>
          <p className="text-[16px] sm:text-[17px] text-harmony-600 mt-5 leading-relaxed">
            The latest generation Alma&nbsp;Harmony platform with SupErb&nbsp;Erbium&nbsp;YAG laser - the gold standard in fractional skin resurfacing. 40x more powerful than the previous&nbsp;generation.
          </p>
        </div>

        {/* At a Glance */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-center text-[11px] sm:text-xs font-sans font-medium uppercase tracking-[0.18em] text-harmony-500 mb-6">
            Treatment at a glance
          </h3>
          <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-t border-l border-sand-200 bg-white rounded-xl overflow-hidden">
            {glance.map(({ icon: Icon, value, label }) => (
              <div key={label} className="border-b border-r border-sand-200 px-4 py-6 text-center">
                <Icon className="w-5 h-5 mx-auto text-primary-700" strokeWidth={1.25} />
                <dt className="mt-3 text-[15px] font-medium text-ink">{tidy(value, { noWidow: false })}</dt>
                <dd className="mt-1 text-xs text-harmony-500">{tidy(label, { noWidow: false })}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* How it works */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-sand-100">
            <Image
              src="/images/shoot/DSC09743.jpg"
              alt="Laser treatment in progress at Clarity Clinic Bedford"
              fill
              sizes="(min-width: 1152px) 620px, (min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="eyebrow">How SupErb Works</p>
            <h3 className="mt-4 font-display text-[26px] sm:text-[30px] leading-[1.15] text-ink">
              Precision skin&nbsp;renewal
            </h3>
            <p className="mt-4 text-harmony-600 leading-relaxed">
              The Erbium YAG laser creates thousands of microscopic treatment zones in your skin - pixel-sized columns of precisely controlled energy that trigger your body&apos;s natural healing&nbsp;response.
            </p>

            <ol className="mt-8 space-y-6">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-5">
                  <span className="font-display italic text-2xl text-primary-700 leading-none w-6 shrink-0 pt-0.5">
                    {i + 1}
                  </span>
                  <div className="border-l border-sand-200 pl-5">
                    <p className="font-medium text-ink">{step.title}</p>
                    <p className="mt-1 text-[15px] text-harmony-600 leading-relaxed">{tidy(step.text)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Why SupErb */}
        <div className="mt-20 sm:mt-24">
          <div className="text-center mb-10">
            <p className="eyebrow">Why SupErb</p>
            <h3 className="mt-4 font-display text-[26px] sm:text-[30px] leading-[1.15] text-ink">
              Proven results, <em className="italic">faster recovery</em>
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {reasons.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white border border-sand-200 rounded-xl p-6 sm:p-7">
                <Icon className="w-6 h-6 text-primary-700" strokeWidth={1.25} />
                <p className="mt-5 font-medium text-ink">{title}</p>
                <p className="mt-2 text-[15px] text-harmony-600 leading-relaxed">{tidy(text)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SupErb vs CO2 */}
        <div className="mt-20 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-display text-[26px] sm:text-[30px] leading-[1.15] text-ink">
              Why SupErb Erbium&nbsp;YAG <em className="italic">over&nbsp;CO2?</em>
            </h3>
            <p className="mt-4 text-harmony-600 leading-relaxed">
              Not all laser resurfacing is created equal. Here&apos;s why Claire chose SupErb&nbsp;Erbium&nbsp;YAG&nbsp;technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 bg-white border border-sand-200 rounded-2xl overflow-hidden">
            <div className="p-6 sm:p-8 md:border-r border-sand-200">
              <p className="font-display text-xl text-ink">SupErb Erbium&nbsp;YAG</p>
              <ul className="mt-5 space-y-3.5">
                {[
                  <>Creates microscopic channels <strong className="font-medium text-ink">without vaporizing</strong> the top skin&nbsp;layer</>,
                  <><strong className="font-medium text-ink">5&#8209;7&nbsp;days</strong> typical healing&nbsp;time</>,
                  <><strong className="font-medium text-ink">Less discomfort</strong> during and after&nbsp;treatment</>,
                  <><strong className="font-medium text-ink">Lower risk</strong> of complications and&nbsp;scarring</>,
                  <>Suitable for <strong className="font-medium text-ink">more skin types</strong> (Fitzpatrick&nbsp;1&#8209;5)</>,
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-harmony-700 leading-relaxed">
                    <Check className="w-4 h-4 text-primary-700 shrink-0 mt-1" strokeWidth={1.75} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 sm:p-8 bg-sand-50 border-t md:border-t-0 border-sand-200">
              <p className="font-display text-xl text-harmony-500">Traditional CO2 Laser</p>
              <ul className="mt-5 space-y-3.5">
                {[
                  <>Vaporizes the top layer of skin&nbsp;completely</>,
                  <><strong className="font-medium">2+&nbsp;weeks</strong> recovery time&nbsp;typical</>,
                  <>More painful during and after&nbsp;treatment</>,
                  <>Higher risk of hyperpigmentation and&nbsp;scarring</>,
                  <>Not suitable for darker skin&nbsp;tones</>,
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-harmony-500 leading-relaxed">
                    <Minus className="w-4 h-4 text-harmony-400 shrink-0 mt-1" strokeWidth={1.75} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Harmony Multi-Laser Platform */}
        <div className="mt-12 sm:mt-16 border-t border-sand-200 pt-10 sm:pt-12">
          <div className="flex flex-col sm:flex-row items-start gap-5 max-w-3xl mx-auto">
            <FlaskConical className="w-7 h-7 text-primary-700 shrink-0" strokeWidth={1.25} />
            <div>
              <h3 className="font-display text-xl sm:text-2xl leading-snug text-ink">Alma&nbsp;Harmony Multi&#8209;Laser Platform</h3>
              <p className="mt-3 text-harmony-600 leading-relaxed">
                Claire&apos;s Alma&nbsp;Harmony isn&apos;t just the SupErb laser - it&apos;s a complete multi-laser platform with multiple handpieces. This means treatments can be combined and layered for enhanced&nbsp;results.
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-harmony-500">
                {['SupErb for resurfacing', 'Multiple handpiece options', 'Layered treatment protocols'].map((t) => (
                  <li key={t} className="flex items-center gap-2 whitespace-nowrap">
                    <span className="w-1 h-1 rounded-full bg-primary-700/50" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-primary-700 font-medium">
                Ask Claire about combination treatments during your&nbsp;consultation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
