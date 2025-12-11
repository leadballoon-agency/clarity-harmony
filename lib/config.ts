// Site configuration - easily toggle features on/off
export const siteConfig = {
  // Feature toggles
  videoConsultationsEnabled: true, // Set to false to hide video consultation option

  // Skin analysis fee (fully redeemable against treatment)
  consultationFee: 25,
}

export type SiteConfig = typeof siteConfig
