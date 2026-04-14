import { CheckCircle2 } from "lucide-react"

const expertise = [
  "Meta Business Suite & Ads Manager",
  "Conversion API Implementation",
  "Creative Testing Frameworks",
  "Full-Funnel Campaign Strategy",
  "E-Commerce & Lead Generation",
  "Data Analysis & Attribution"
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-primary font-medium mb-4 tracking-wide">ABOUT</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Turning Ad Spend Into Revenue
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 5 years of experience managing Meta ad accounts, I&apos;ve helped 
                businesses of all sizes achieve predictable, profitable growth through 
                strategic paid advertising.
              </p>
              <p>
                My approach combines data-driven decision making with creative excellence. 
                I believe in building sustainable growth engines, not just chasing short-term 
                wins.
              </p>
              <p>
                Whether you&apos;re looking to scale a winning product, launch a new brand, 
                or optimize an underperforming account, I bring the expertise and 
                attention to detail needed to hit your goals.
              </p>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6">Areas of Expertise</h3>
            <div className="grid gap-4">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
