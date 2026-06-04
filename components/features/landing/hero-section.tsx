import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden border-b">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <Badge
          variant="secondary"
          className="px-3 py-1 text-sm font-medium rounded-full"
        >
          ✨ The ultimate kitchen companion
        </Badge>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl max-w-3xl mx-auto leading-tight">
          Your digital cookbook, <br />
          <span className="text-primary bg-clip-text">
            perfectly organized.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-muted-foreground sm:text-xl">
          Stop losing recipes in chaotic bookmarks and messy notes. Save,
          organize, scale ingredients, and plan your weekly meals all in one
          beautiful dashboard.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            size="lg"
            asChild
            className="h-12 px-6 text-base font-medium w-full sm:w-auto"
          >
            <Link href={"/auth/signup"}>
              Start Your Library Free <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="h-12 px-6 text-base font-medium w-full sm:w-auto"
          >
            <Link href={"/demo"}>
            View Live Demo
            </Link>
          </Button>
        </div>

        <div className="mt-16 border rounded-xl shadow-2xl bg-muted/30 p-4 max-w-5xl mx-auto backdrop-blur-sm">
          <div className="aspect-video w-full rounded-lg bg-muted border flex items-center justify-center text-muted-foreground">
            {/* TODO replace */}
            <img
              src={"/hero.jpg"}
              alt={"Dashboard Image Preview"}
              className="w-full h-full rounded-lg object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
