"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Construction as ConstructionIcon, ArrowLeft, Home } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Footer } from "./footer";
import { BackgroundSketches } from "../layout/background";

export function Construction() {
  const pathname = usePathname();
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
                <ConstructionIcon className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>

            <CardTitle>Under Construction</CardTitle>

            <CardDescription>
              This section is currently being built.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="flex justify-center">
              <Badge variant="secondary">{pathname}</Badge>
            </div>

            <div className="flex flex-row gap-2">
              <Button className="w-full" variant="outline" onClick={handleBack}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>

              <Button className="w-full" variant="secondary" onClick={() => router.push("/")}>
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