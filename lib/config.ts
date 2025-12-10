// Site configuration - easily toggle features on/off
export const siteConfig = {
  // Feature toggles
  videoConsultationsEnabled: true, // Set to false to hide video consultation option

  // Pricing
  consultationFee: 25,

  // Treatment pricing (null = show "From £POC")
  pricing: {
    pigmentation: {
      session: 300,
      package: 800,
      packageSessions: 3,
    },
    acneScars: {
      session: 300,
      package: 800,
      packageSessions: 3,
    },
    skinTightening: null,
    skinResurfacing: null,
    vascularLesions: null,
    hairRemoval: null,
    tattooRemoval: null,
  },
}

export type SiteConfig = typeof siteConfig
