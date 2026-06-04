import { BookOpen, Sparkles, Calendar, Heart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Smart Organization",
      description: "Tag, categorize, and sort your recipes instantly. Search by ingredients you already have in your fridge."
    },
    {
      icon: Sparkles,
      title: "AI Recipe Cloner",
      description: "Paste any chaotic food blog URL and extract a clean, ad-free version of just the ingredients and steps."
    },
    {
      icon: Calendar,
      title: "Meal Planning",
      description: "Drag and drop your recipes into a weekly schedule and auto-generate organized grocery lists."
    },
    {
      icon: Heart,
      title: "Dynamic Scaling",
      description: "Cooking for 2? Or hosting a party of 12? Instantly scale component portions with a single tap."
    }
  ]

  return (
    <section id="features" className="py-20 bg-muted/30 border-b">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need to master your kitchen</h2>
          <p className="text-muted-foreground">
            Built specifically for passionate home cooks who want control over their culinary workflow.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="bg-background">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-primary/10 text-primary mb-2">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}