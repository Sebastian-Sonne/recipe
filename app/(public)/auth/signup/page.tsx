import { SignUpForm } from "@/components/features/auth/sign-up-form";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<Loader2 className="h-6 w-6 text-muted-foreground animate-spin"/>}>
      <SignUpForm />
    </Suspense>
  );
}
