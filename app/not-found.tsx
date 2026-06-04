"use client";

import { Footer } from "@/components/core/footer";
import { BackgroundSketches } from "@/components/layout/background";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Ghost, ArrowLeft, Home } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div className="relative flex min-h-svh w-full items-center justify-center bg-background overflow-hidden p-6 md:p-10">
      <BackgroundSketches />

      <div className="relative z-10 w-full max-w-sm flex flex-col gap-6">
        <Card className="mx-auto w-full max-w-2xl">
          <CardHeader className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full border bg-muted p-3">
                <Ghost className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>

            <CardTitle>Page not found</CardTitle>

            <CardDescription>
              The page you’re looking for doesn’t exist or has been moved.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="flex flex-row gap-2">
              <Button className="w-full" onClick={handleBack} variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>

              <Button variant={"secondary"} className="w-full" onClick={() => router.push("/")}>
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </div>
          </CardContent>
        </Card>

        <Footer variant="minimal" />
      </div>
    </div>
  );
}
