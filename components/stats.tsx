"use client"

import { useEffect, useState, useRef } from "react"

const stats = [
  { value: 3, suffix: "M+", label: "Ad Spend Managed" },
  { value: 7, suffix: "+", label: "ROAS Achieved" },
  { value: 5, suffix: "+", label: "Clients Served" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, isVisible])

  return (
    <span ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}>
      {Number.isInteger(value) ? Math.round(count) : count.toFixed(1)}{suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="py-20 px-6 lg:px-20 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-2 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
