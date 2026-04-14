"use client"

import { Mail, Calendar, ArrowUpRight, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-medium mb-4 tracking-wide">CONTACT</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
          Ready to Scale Your Ads?
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Let&apos;s discuss how strategic Meta advertising can drive growth for your business. 
          Book a free strategy call or send me a message.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Button size="lg" className="gap-2">
            <Calendar className="w-5 h-5" />
            Book a Strategy Call
            <ArrowUpRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <Mail className="w-5 h-5" />
            hello@example.com
          </Button>
        </div>
        
        <div className="flex justify-center gap-6">
          <a 
            href="#" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  )
}
