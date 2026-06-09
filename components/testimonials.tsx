"use client"

import { useState } from "react"
import { Quote, Play, X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    type: "quote",
    quote: "Working with them completely transformed our Meta ads performance. We went from barely breaking even to a 4.5x ROAS within 3 months.",
    name: "Sarah Chen",
    title: "Founder, Bloom Beauty Co.",
    company: "E-Commerce"
  },
  {
    type: "quote",
    quote: "Our cost per lead dropped by 65% while the quality actually improved. They understood our B2B audience in ways our previous agencies never did.",
    name: "Michael Rodriguez",
    title: "VP Marketing, TechFlow Solutions",
    company: "B2B SaaS"
  },
  {
    type: "quote",
    quote: "The level of strategic insight and hands-on execution is rare. They don&apos;t just run ads - they truly understand how to build a brand through paid media.",
    name: "Emma Thompson",
    title: "CEO, Wellness Direct",
    company: "Health & Wellness"
  }
]

const youtubeTestimonials = [
  {
    id: 0,
    embedId: "_8pZOZiHUe0",
    clientName: "Abdul Wahab",
    title: "Fatloss Coach"
  },
  {
    id: 1,
    embedId: "ejlc5nScbx0",
    clientName: "Saeeda Maryam",
    title: "PCOS/PMOS & Weight Loss Coach"
  },
  {
    id: 2,
    embedId: "SavG58y9gf8",
    clientName: "Abdul Qadeer",
    title: "Body & Mind Transformation Coach"
  }
]

const screenshots = [
  {
    id: 1,
    image: "/testimonials/screenshot-1.png",
    alt: "Analytics dashboard showing sessions, total sales, orders, and conversion rate",
    caption: "Store growth overview (sessions, sales, orders, conversion rate)"
  },
  {
    id: 2,
    image: "/testimonials/screenshot-2.png",
    alt: "Ads dashboard showing cost, conversions, and conv. value / cost",
    caption: "Ad performance snapshot (cost, conversions, ROAS)"
  },
  {
    id: 3,
    image: "/testimonials/screenshot-3.png",
    alt: "Campaign results table with spend, purchases, and ROAS",
    caption: "Campaign results breakdown (purchases, spend, ROAS)"
  },
  {
    id: 4,
    image: "/testimonials/screenshot-4.png",
    alt: "Campaign results table with purchases and ROAS",
    caption: "Additional campaign performance results"
  }
]

export function Testimonials() {
  const [lightboxImage, setLightboxImage] = useState<number | null>(null)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchEndX, setTouchEndX] = useState<number | null>(null)

  const showPreviousImage = () => {
    if (lightboxImage === null) return
    setLightboxImage(lightboxImage > 0 ? lightboxImage - 1 : screenshots.length - 1)
  }

  const showNextImage = () => {
    if (lightboxImage === null) return
    setLightboxImage(lightboxImage < screenshots.length - 1 ? lightboxImage + 1 : 0)
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(null)
    setTouchStartX(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return
    const swipeDistance = touchStartX - touchEndX
    const minSwipeDistance = 50

    if (swipeDistance > minSwipeDistance) showNextImage()
    if (swipeDistance < -minSwipeDistance) showPreviousImage()
  }

  return (
    <section id="testimonials" className="py-20 lg:py-32 px-6 lg:px-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 tracking-wide">PROOF OF RESULTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance" style={{ fontFamily: 'var(--font-display)' }}>
            Real Results, Real Clients
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Video testimonials, dashboard screenshots, and client feedback that speaks for itself.
          </p>
        </div>

        {/* Screenshots Gallery */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <ImageIcon className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
              Dashboard Screenshots
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {screenshots.map((screenshot, index) => (
              <div 
                key={screenshot.id}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-card border border-border cursor-pointer hover:border-primary/50 transition-colors"
                onClick={() => setLightboxImage(index)}
              >
                <img
                  src={screenshot.image}
                  alt={screenshot.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-xs text-foreground">{screenshot.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Testimonials Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Play className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
              Video Testimonials
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {youtubeTestimonials.map((video) => (
              <div 
                key={video.id}
                className="w-full max-w-[315px] rounded-xl overflow-hidden bg-card border border-border"
              >
                <div className="aspect-[9/16]">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4 border-t border-border">
                  <p className="font-semibold">{video.clientName}</p>
                  <p className="text-sm text-muted-foreground">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Written Testimonials */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Quote className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
              Client Testimonials
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl bg-card border border-border"
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed text-sm">
                  {testimonial.quote}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-xs text-primary mt-1">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      {lightboxImage !== null && (
        <div 
          className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2"
            onClick={(e) => {
              e.stopPropagation()
              showPreviousImage()
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2"
            onClick={(e) => {
              e.stopPropagation()
              showNextImage()
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
          <div 
            className="w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="bg-card rounded-xl overflow-hidden border border-border">
              <img
                src={screenshots[lightboxImage].image}
                alt={screenshots[lightboxImage].alt}
                className="w-full max-h-[80vh] object-contain"
              />
            </div>
            <p className="text-center mt-4 text-foreground">
              {screenshots[lightboxImage].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
