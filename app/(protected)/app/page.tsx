import {
  Plus,
  BookOpen,
  Heart,
  Utensils,
  TrendingUp,
  Clock,
  Search,
  ChevronRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function RecipeDashboard() {
  // Mock data for display
  const quickStats = [
    {
      title: "Total Recipes",
      value: "142",
      icon: BookOpen,
      description: "+12 this month",
    },
    {
      title: "Favorites",
      value: "36",
      icon: Heart,
      description: "Quick access items",
    },
    {
      title: "Meal Planned",
      value: "5",
      icon: Utensils,
      description: "Scheduled for this week",
    },
  ];

  const recentRecipes = [
    {
      id: 1,
      title: "Sourdough Artisan Bread",
      category: "Baking",
      time: "24h",
      rating: "4.9",
    },
    {
      id: 2,
      title: "Spicy Vodka Rigatoni",
      category: "Dinner",
      time: "25m",
      rating: "4.8",
    },
    {
      id: 3,
      title: "Matcha Latte Overnight Oats",
      category: "Breakfast",
      time: "10m",
      rating: "4.5",
    },
  ];

  return (
    <div className="flex flex-col gap-8 mt-4">
      {/* Header Section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Welcome back, Chef!
          </h2>
          <p className="text-muted-foreground">
            What are we cooking up today? Manage your recipes and meal plans
            here.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="shadow-sm">
            <Plus className="mr-2 h-4 w-4" /> Create Recipe
          </Button>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex items-center space-x-2 bg-background/95 backdrop-blur">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search recipes, ingredients, tags..."
            className="pl-8 w-full md:max-w-md bg-muted/50 focus-visible:bg-background"
          />
        </div>
      </div>

      <hr className="border-border" />

      {/* Quick Stats Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="hover:border-primary/50 transition-colors"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Left Column: Recent Recipes */}
        <Card className="col-span-full lg:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Recipes</CardTitle>
              <CardDescription>
                The last dishes you viewed or edited.
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="gap-1">
              View all <ChevronRight className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentRecipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="flex items-center justify-between p-3 rounded-lg border bg-muted/20 hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {recipe.title}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Badge variant="secondary" className="font-normal">
                        {recipe.category}
                      </Badge>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {recipe.time}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-amber-500">
                    ★ {recipe.rating}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Right Column: Quick Inspiration / Kitchen Analytics */}
        <Card className="col-span-full lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" /> Kitchen
              Inspiration
            </CardTitle>
            <CardDescription>
              Smart suggestions based on your cooking habits.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border border-dashed p-4 text-center space-y-3">
              <p className="text-sm text-muted-foreground">
                You haven't planned dinner for tonight yet. Want to try one of
                your high-rated favorites?
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Open Meal Planner
              </Button>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
              <h4 className="text-sm font-semibold mb-1">
                Seasonal Ingredient Alert
              </h4>
              <p className="text-xs text-muted-foreground">
                It's prime time for <strong>Asparagus & Strawberries</strong>.
                Check out your 12 saved recipes featuring these!
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
