import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Check, Clock, Utensils } from 'lucide-react'
import { CtaSignup } from "./cta-signup"

export function CTASection() {

  return (
    <section className="py-20 lg:py-24 border-b bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="space-y-6 lg:col-span-7">
            <div className="space-y-3">
              <Badge variant="secondary" className="w-fit font-medium">
                Instant Import
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-none">
                Clip the recipe. <br />
                <span className="text-primary">Skip the life story.</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-xl">
                Paste any food blog link to instantly extract clean ingredients and steps. No clutter, no popups, no tracking.
              </p>
            </div>

            <CtaSignup />
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground pt-2">
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-primary" /> Free forever tier
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-primary" /> 1-click URL importing
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <Card className="shadow-lg border-primary/20 bg-background relative">
              <div className="absolute -top-3 -left-3 bg-primary text-primary-foreground text-[11px] font-medium px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1">
                <Sparkles className="h-3 w-3 fill-primary-foreground" /> Clean Import Preview
              </div>
              
              <CardHeader className="pt-8 pb-4">
                <CardTitle className="text-lg">One-Pot Creamy Lemon Pasta</CardTitle>
                <CardDescription>Ad-free, parsed format</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 text-sm">
                <div className="flex gap-4 text-xs font-medium text-muted-foreground border-y py-2">
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> 20 mins</span>
                  <span className="flex items-center gap-1"><Utensils className="h-3.5 w-3.5" /> 4 servings</span>
                </div>

                <div className="space-y-2">
                  <span className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">Ingredients</span>
                  <ul className="space-y-1.5 text-muted-foreground text-xs">
                    <li className="flex items-center gap-2">✔ 12 oz Spaghetti</li>
                    <li className="flex items-center gap-2">✔ 2 tbsp Olive Oil</li>
                    <li className="flex items-center gap-2">✔ 3 cloves Garlic, minced</li>
                    <li className="flex items-center gap-2">✔ ½ cup Fresh Parmesan</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  )
}