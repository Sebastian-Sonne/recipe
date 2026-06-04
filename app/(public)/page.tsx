import { Footer } from "@/components/core/footer";
import { Navbar } from "@/components/core/nav/navbar";
import { CTASection } from "@/components/features/landing/cta-section";
import { FeaturesSection } from "@/components/features/landing/feature-section";
import { HeroSection } from "@/components/features/landing/hero-section";
import { TestimonialsSection } from "@/components/features/landing/testimonial-section";
import { TrendingSection } from "@/components/features/landing/trending-section";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TrendingSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}