import { Clock, Heart, Star, Flame, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function TrendingSection() {
  const trending = [
    {
      title: "Crispy Garlic Chili Oil Noodles",
      author: "Chef Marco",
      time: "15 mins",
      likes: "2.4k",
      rating: "4.9",
      category: "Easy Dinner",
      imageUrl: "/noodles.jpg",
      fallbackColor: "bg-orange-500/10 text-orange-500",
    },
    {
      title: "Fluffy Japanese Soufflé Pancakes",
      author: "Yuki Tanaka",
      time: "25 mins",
      likes: "1.8k",
      rating: "4.8",
      category: "Breakfast",
      imageUrl: "/pancakes.jpg",
      fallbackColor: "bg-amber-500/10 text-amber-500",
    },
    {
      title: "Slow-Braised Birria Tacos",
      author: "Carlos Ruiz",
      time: "3.5 hours",
      likes: "4.2k",
      rating: "5.0",
      category: "Weekend Project",
      imageUrl: "/tacos.jpg",
      fallbackColor: "bg-red-500/10 text-red-500",
    },
  ];

  return (
    <section className="py-20 border-b" id="trending">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase">
              <Flame className="h-4 w-4 fill-primary" /> What's Cooking Now
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trending community recipes
            </h2>
            <p className="text-muted-foreground max-w-xl">
              See what fellow home cooks are adding to their digital recipe
              books this week.
            </p>
          </div>
          <Button asChild variant="ghost" className="w-fit gap-1 group">
            <Link href={"/explore"}>
              Explore community library{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trending.map((recipe, idx) => (
            <Card
              key={idx}
              className="overflow-hidden group hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-16/10 w-full relative overflow-hidden bg-muted border-b">
                  {recipe.imageUrl ? (
                    <img
                      src={recipe.imageUrl}
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className={`w-full h-full flex items-center justify-center font-medium ${recipe.fallbackColor}`}
                    >
                      <span className="text-xs opacity-75 group-hover:scale-105 transition-transform duration-300">
                        No image available
                      </span>
                    </div>
                  )}

                  <Badge className="absolute top-3 left-3 bg-background/90 text-foreground backdrop-blur hover:bg-background border-none font-normal shadow-sm">
                    {recipe.category}
                  </Badge>
                </div>

                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>By {recipe.author}</span>
                    <div className="flex items-center gap-1 text-amber-500 font-medium">
                      <Star className="h-3 w-3 fill-amber-500 stroke-amber-500" />{" "}
                      {recipe.rating}
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-snug group-hover:text-primary transition-colors cursor-pointer line-clamp-2">
                    {recipe.title}
                  </CardTitle>
                </CardHeader>
              </div>

              <CardContent className="pt-0">
                <hr className="border-border/60 mb-4" />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {recipe.time}
                  </span>
                  <span className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer">
                    <Heart className="h-4 w-4" /> {recipe.likes}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
