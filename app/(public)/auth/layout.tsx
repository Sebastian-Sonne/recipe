"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { BackgroundSketches } from "@/components/layout/background";
import { Footer } from "@/components/core/footer";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  const handleBack = () => {
    if (
      typeof window !== "undefined" &&
      document.referrer.includes(window.location.host)
    ) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div className="relative flex min-h-svh w-full items-center justify-center bg-background overflow-hidden p-6 md:p-10">
      <BackgroundSketches />

      <button
        onClick={handleBack}
        className="absolute left-4 top-4 z-20 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>

      <div className="relative z-10 w-full max-w-sm flex flex-col gap-6">
        {children}
        <Footer variant="minimal" />
      </div>
    </div>
  );
}
