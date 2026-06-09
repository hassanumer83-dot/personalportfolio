"use client"

import { ArrowDown, Linkedin, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-20 py-20">
      <div className="max-w-4xl">
        <p className="text-primary font-medium mb-4 tracking-wide">META ADS SPECIALIST</p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
          Scaling businesses through{" "}
          <span className="text-primary">data-driven</span>{" "}
          paid social campaigns
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          I help e-commerce and lead generation businesses achieve 
          profitable growth through strategic Meta advertising. 
          From creative strategy to full-funnel optimization, 
          I turn ad spend into predictable revenue.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-16">
          <Button size="lg" className="gap-2" asChild>
            <a href="https://calendly.com/hassanumer83/15min" target="_blank" rel="noopener noreferrer">
              <Calendar className="w-4 h-4" />
              Book a Call
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="mailto:hassanumer83@gmail.com">
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </Button>
        </div>
        
        <div className="flex items-center gap-6 text-muted-foreground">
          <a 
            href="https://www.linkedin.com/in/umer-hassan-9a129b209/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a 
            href="mailto:hassanumer83@gmail.com" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">hassanumer83@gmail.com</span>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
