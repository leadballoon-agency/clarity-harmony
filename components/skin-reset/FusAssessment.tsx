/**
 * Claire's AI assessment, served by Follow Up Systems. The widget script in
 * app/layout.tsx (data-mode="assessment") finds the [data-fus-assessment] slot
 * and mounts the assessment inline: quiz, a short conversation grounded in
 * Claire's own knowledge base, then a recommendation card. Anyone who leaves
 * their details becomes a lead in FUS and starts Claire's follow-up.
 * Its colours and type are the --fus-* variables on body in globals.css.
 */
export default function FusAssessment() {
  return (
    <section id="skin-reset-assessment" className="py-20 sm:py-24 lg:py-28 bg-white border-t border-sand-200">
      <div className="max-w-3xl mx-auto section-padding">
        <div className="text-center mb-10 sm:mb-12">
          <p className="eyebrow">Personalised assessment</p>
          <h2 className="h2-display mt-4">
            Is the Skin Reset <em className="italic">right for&nbsp;you?</em>
          </h2>
          <p className="mt-4 max-w-[44ch] mx-auto text-harmony-600 text-pretty">
            A few quick questions, then a short chat, and you&rsquo;ll see where Claire would suggest you&nbsp;start.
          </p>
        </div>
        <div data-fus-assessment="true" />
      </div>
    </section>
  )
}
