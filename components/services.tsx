import { Target, BarChart3, Layers, TrendingUp, Lightbulb, RefreshCw } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "Campaign Strategy",
    description: "Full-funnel campaign architecture designed to acquire customers profitably and scale with confidence."
  },
  {
    icon: Lightbulb,
    title: "Creative Strategy",
    description: "Data-backed creative direction that resonates with your audience and drives conversions."
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Deep-dive analysis and reporting to understand what&apos;s working and optimize for better results."
  },
  {
    icon: Layers,
    title: "Audience Building",
    description: "Strategic audience segmentation using first-party data, lookalikes, and interest targeting."
  },
  {
    icon: TrendingUp,
    title: "Scaling & Growth",
    description: "Proven frameworks to scale winning campaigns while maintaining profitable ROAS."
  },
  {
    icon: RefreshCw,
    title: "Account Audits",
    description: "Comprehensive audits to identify opportunities, fix issues, and unlock hidden potential."
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-primary font-medium mb-4 tracking-wide">SERVICES</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            What I Do
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            End-to-end Meta advertising services designed to drive real business growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
