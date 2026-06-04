"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CtaSignup() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleGetStarted = () => {
    router.push(`/auth/signup?email=${encodeURIComponent(email)}`);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 max-w-md">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-background h-11 focus-visible:ring-1 focus-visible:ring-primary"
      />
      <Button
        onClick={handleGetStarted}
        size="lg"
        className="h-11 font-medium px-5 shrink-0"
      >
        Get Started <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
