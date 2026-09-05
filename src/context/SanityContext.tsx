import React, { createContext, useContext, ReactNode } from 'react'
import { useQuery } from '@tanstack/react-query'
import {
  fetchSiteSettings,
  fetchServices,
  fetchTestimonials,
  fetchGalleryImages,
  fetchSupplements,
  SiteSettings,
  Service,
  Testimonial,
  GalleryImage,
  Supplement,
} from '../lib/sanity'

interface SanityContextType {
  settings: SiteSettings | undefined
  services: Service[]
  testimonials: Testimonial[]
  galleryImages: GalleryImage[]
  supplements: Supplement[]
  isLoading: boolean
  isError: boolean
}

const SanityContext = createContext<SanityContextType | undefined>(undefined)

export const SanityProvider = ({ children }: { children: ReactNode }) => {
  const settingsQuery = useQuery({
    queryKey: ['siteSettings'],
    queryFn: fetchSiteSettings,
  })

  const servicesQuery = useQuery({
    queryKey: ['services'],
    queryFn: fetchServices,
  })

  const testimonialsQuery = useQuery({
    queryKey: ['testimonials'],
    queryFn: fetchTestimonials,
  })

  const galleryQuery = useQuery({
    queryKey: ['galleryImages'],
    queryFn: fetchGalleryImages,
  })

  const supplementsQuery = useQuery({
    queryKey: ['supplements'],
    queryFn: fetchSupplements,
  })

  const isLoading =
    settingsQuery.isLoading ||
    servicesQuery.isLoading ||
    testimonialsQuery.isLoading ||
    galleryQuery.isLoading ||
    supplementsQuery.isLoading

  const isError =
    settingsQuery.isError ||
    servicesQuery.isError ||
    testimonialsQuery.isError ||
    galleryQuery.isError ||
    supplementsQuery.isError

  return (
    <SanityContext.Provider
      value={{
        settings: settingsQuery.data,
        services: servicesQuery.data ?? [],
        testimonials: testimonialsQuery.data ?? [],
        galleryImages: galleryQuery.data ?? [],
        supplements: supplementsQuery.data ?? [],
        isLoading,
        isError,
      }}
    >
      {children}
    </SanityContext.Provider>
  )
}

export const useSanity = (): SanityContextType => {
  const context = useContext(SanityContext)
  if (context === undefined) {
    throw new Error('useSanity must be used within a SanityProvider')
  }
  return context
}
