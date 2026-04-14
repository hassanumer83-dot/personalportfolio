"use client"

import { ArrowUpRight, TrendingUp, DollarSign, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const caseStudies = [
  {
    title: "Fashion E-Commerce Brand",
    industry: "Fashion & Apparel",
    description: "Scaled a DTC fashion brand from $50K to $300K monthly revenue through strategic campaign restructuring and creative testing.",
    metrics: [
      { icon: TrendingUp, value: "6x", label: "Revenue Growth" },
      { icon: DollarSign, value: "4.8x", label: "ROAS" },
      { icon: Users, value: "340%", label: "New Customer Acquisition" }
    ],
    tags: ["E-Commerce", "Scaling", "Creative Strategy"]
  },
  {
    title: "B2B SaaS Lead Generation",
    industry: "Software / SaaS",
    description: "Reduced cost per qualified lead by 60% while increasing lead volume 3x for a B2B software company.",
    metrics: [
      { icon: TrendingUp, value: "-60%", label: "Cost Per Lead" },
      { icon: Users, value: "3x", label: "Lead Volume" },
      { icon: DollarSign, value: "5.2x", label: "Pipeline ROI" }
    ],
    tags: ["Lead Generation", "B2B", "Optimization"]
  },
  {
    title: "Health & Wellness Brand",
    industry: "Health & Beauty",
    description: "Launched and scaled a supplement brand from zero to $150K/month in 4 months with profitable unit economics.",
    metrics: [
      { icon: DollarSign, value: "$150K", label: "Monthly Revenue" },
      { icon: TrendingUp, value: "3.6x", label: "ROAS" },
      { icon: Users, value: "4 mo", label: "Time to Scale" }
    ],
    tags: ["Launch Strategy", "Health & Wellness", "Growth"]
  }
]

export function CaseStudies() {
  return (
    <section id="work" className="py-20 lg:py-32 px-6 lg:px-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-primary font-medium mb-4 tracking-wide">CASE STUDIES</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Selected Work 
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Real results for real businesses. Here are some recent campaigns that drove significant growth.
          </p>
        </div>
        
        <div className="grid gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className="p-6 lg:p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-2">{study.industry}</p>
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 group-hover:text-primary transition-colors">
                    {study.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{study.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 lg:gap-8 lg:min-w-[300px]">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <metric.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                      <p className="text-xl lg:text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                        {metric.value}
                      </p>
                      <p className="text-xs text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
