import { createClient } from '@sanity/client'
import imageUrlBuilder, { SanityImageSource } from '@sanity/image-url'

const projectId = 'uylgktyp'
const dataset = 'production'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export interface SiteSettings {
  title?: string
  tagline?: string

  heroEyebrow?: string
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: string
  heroButtonText?: string
  heroBackgroundImage?: string
  bookingButtonText?: string

  inchHeroEyebrow?: string
  inchHeroTitle?: string
  inchHeroSubtitle?: string
  inchHeroDescription?: string
  inchHeroButtonText?: string
  inchHeroBackgroundImage?: string

  aboutEyebrow?: string
  aboutTitle?: string
  aboutParagraph1?: string
  aboutParagraph2?: string
  aboutParagraph3?: string
  aboutImage1?: string
  aboutImage2?: string
  featuresEyebrow?: string
  featuresTitle?: string
  features?: { title: string; description: string; icon: string }[]

  inchAboutEyebrow?: string
  inchAboutTitle?: string
  inchAboutParagraph1?: string
  inchAboutParagraph2?: string
  inchAboutParagraph3?: string
  inchAboutImage1?: string
  inchAboutImage2?: string
  inchBenefitsEyebrow?: string
  inchBenefitsTitle?: string
  inchBenefits?: { title: string; items: string[] }[]

  contactEyebrow?: string
  contactTitle?: string
  contactDescription?: string
  phone?: string
  email?: string
  address?: string
  businessHours?: string[]
  mapEmbedUrl?: string

  footerDescription?: string
  copyrightText?: string
  socialLinks?: { platform: string; url: string }[]
}

export interface Service {
  _id: string
  title?: string
  description?: string
  image?: SanityImageSource
  imageUrl?: string
  price?: string
  duration?: string
  section?: 'wellness' | 'inch'
  order?: number
}

export interface Testimonial {
  _id: string
  name?: string
  role?: string
  image?: SanityImageSource
  imageUrl?: string
  quote?: string
  section?: 'wellness' | 'inch'
  order?: number
}

export interface GalleryImage {
  _id: string
  title?: string
  image?: SanityImageSource
  imageUrl?: string
  category?: string
  section?: 'wellness' | 'inch'
  order?: number
}

const settingsQuery = `*[_type == "siteSettings"][0]`

const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  title,
  description,
  image,
  imageUrl,
  price,
  duration,
  section,
  order
}`

const testimonialsQuery = `*[_type == "testimonial"] | order(order asc) {
  _id,
  name,
  role,
  image,
  imageUrl,
  quote,
  section,
  order
}`

const galleryQuery = `*[_type == "galleryImage"] | order(order asc) {
  _id,
  title,
  image,
  imageUrl,
  category,
  section,
  order
}`

export async function fetchSiteSettings(): Promise<SiteSettings> {
  return sanityClient.fetch<SiteSettings>(settingsQuery)
}

export async function fetchServices(): Promise<Service[]> {
  return sanityClient.fetch<Service[]>(servicesQuery)
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  return sanityClient.fetch<Testimonial[]>(testimonialsQuery)
}

export async function fetchGalleryImages(): Promise<GalleryImage[]> {
  return sanityClient.fetch<GalleryImage[]>(galleryQuery)
}

export function resolveImageUrl(item: {
  image?: SanityImageSource
  imageUrl?: string
}): string {
  if (item.imageUrl) return item.imageUrl
  if (item.image) return urlFor(item.image).url()
  return ''
}
