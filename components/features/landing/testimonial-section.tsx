import React from 'react'
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "This completely replaced my chaotic folder of scattered cooking bookmarks. The UI feels incredibly snappy.",
      author: "Sarah Jenkins",
      role: "Sourdough Enthusiast"
    },
    {
      quote: "The ad-free blog scraping feature alone makes this worth every single second. Highly recommended.",
      author: "Marcus Chen",
      role: "Meal Prep Weekly Master"
    },
    {
      quote: "Being able to change portion scaling dynamically while cooking on my tablet has completely changed my dinner hosting game.",
      author: "Elena Rostova",
      role: "Dinner Party Host"
    }
  ]

  return (
    <section id="testimonials" className="py-20 border-b">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-bold tracking-tight">Loved by home chefs</h2>
          <p className="text-muted-foreground">See how passionate cooks are cleaning up their kitchen routines.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="bg-muted/30 flex flex-col justify-between">
              <CardContent className="pt-6 space-y-4">
                <p className="text-sm italic text-muted-foreground">"{testimonial.quote}"</p>
                <div>
                  <h4 className="text-sm font-semibold">{testimonial.author}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}