// Small typographic helpers so key phrases never split awkwardly and
// short copy never ends on a single stranded word (in every browser,
// not only those supporting `text-wrap: pretty`).

const NBSP = ' '
const NBHY = '‑' // non-breaking hyphen

const phrases = [
  'Alma Harmony',
  'Claire Emmerson',
  'SupErb Erbium YAG',
  'Erbium YAG',
  'CQC registered',
  'CQC Registered',
  'Clarity Clinic',
]

export function tidy(text: string, { noWidow = true } = {}): string {
  let out = text
  for (const p of phrases) {
    out = out.split(p).join(p.replace(/ /g, NBSP))
  }
  // "5-7 days", "30-60 mins", "Fitzpatrick 1-5", "£25 consultation"
  out = out.replace(/(\d+)-(\d+)(\s)(days|weeks|months|years|sessions|mins|minutes|treatments)/g, `$1${NBHY}$2${NBSP}$4`)
  out = out.replace(/(\d+)-(\d+)/g, `$1${NBHY}$2`)
  out = out.replace(/Fitzpatrick /g, `Fitzpatrick${NBSP}`)
  out = out.replace(/SPF /g, `SPF${NBSP}`)
  out = out.replace(/£(\d[\d,]*) /g, `£$1${NBSP}`)
  if (noWidow) {
    // Bind the last two words together
    out = out.replace(/ (\S+)\s*$/, `${NBSP}$1`)
  }
  return out
}
