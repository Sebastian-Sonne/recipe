'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChefHat } from 'lucide-react';

interface FooterProps {
  variant?: 'default' | 'minimal';
}

export function Footer({ variant = 'default' }: FooterProps) {
  const [year, setYear] = useState('20XX');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  if (variant === 'minimal') {
    return (
      <footer className="flex items-center justify-center gap-4 text-center text-xs text-muted-foreground">
        <p>© {year || '2026'} RecipeHub</p>
        <span>·</span>
        <nav className="flex items-center gap-4">
          <Link href="/legal/privacy" className="transition-colors hover:text-foreground">
            Privacy
          </Link>
          <span>·</span>
          <Link href="/legal/terms" className="transition-colors hover:text-foreground">
            Terms
          </Link>
        </nav>
      </footer>
    );
  }

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center space-x-2">
            <ChefHat className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">RecipeHub</span>
            <span className="text-muted-foreground">© {year || '2026'}</span>
          </div>

          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/legal/privacy"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}