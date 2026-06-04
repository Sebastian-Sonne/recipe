
import Link from 'next/link'
import { ChefHat } from 'lucide-react'
import { NavButton } from './navButton'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
          <ChefHat className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl tracking-tight">RecipeHub</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-muted-foreground">
          <Link href="/#trending" className="transition-colors hover:text-foreground">Trending</Link>
          <Link href="/#features" className="transition-colors hover:text-foreground">Features</Link>
          <Link href="/#testimonials" className="transition-colors hover:text-foreground">Testimonials</Link>
        </nav>

        <NavButton />

      </div>
    </header>
  )
}