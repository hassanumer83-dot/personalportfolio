import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { CaseStudies } from "@/components/case-studies"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <CaseStudies />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
