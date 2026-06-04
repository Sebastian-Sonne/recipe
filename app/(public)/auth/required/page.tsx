import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AuthRequiredPage() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center">Sign in required</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 text-center">
          <p className="text-sm text-muted-foreground">
            You need an account to access this page.
          </p>

          <div className="flex flex-col gap-2">
            <Button asChild>
              <Link href="/auth/login">Log in</Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href="/auth/signup">Create account</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}