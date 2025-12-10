// Site configuration - easily toggle features on/off
export const siteConfig = {
  // Feature toggles
  videoConsultationsEnabled: true, // Set to false to hide video consultation option

  // Pricing
  consultationFee: 25,

  // Treatment pricing (null = show "From £POC")
  pricing: {
    pigmentation: {
      session: 395,
      package: 995,
      packageSessions: 3,
    },
    acneScars: {
      session: 395,
      package: 995,
      packageSessions: 3,
    },
    skinTightening: {
      session: 395,
      package: 995,
      packageSessions: 3,
    },
    skinResurfacing: {
      session: 395,
      package: 995,
      packageSessions: 3,
    },
    vascularLesions: {
      session: 395,
      package: 995,
      packageSessions: 3,
    },
    hairRemoval: null,
    tattooRemoval: null,
  },
}

export type SiteConfig = typeof siteConfig
