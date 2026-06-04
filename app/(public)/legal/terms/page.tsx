import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Page() {
  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-3xl font-bold tracking-tight">Terms of Service</CardTitle>
        <p className="text-sm text-muted-foreground">Last updated: June 2026</p>
      </CardHeader>
      <CardContent className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <p>
          Welcome to RecipeHub. By accessing or using our application, you agree to comply with and be bound by the following terms and conditions.
        </p>
        
        <Separator />

        <div className="space-y-2 text-foreground">
          <h2 className="text-lg font-semibold">1. Account Responsibilities</h2>
          <p className="text-sm text-muted-foreground">
            To use RecipeHub, you must authenticate through our secure Supabase system. You are entirely responsible for maintaining the confidentiality of your account information and for any activity that occurs under your account.
          </p>
        </div>

        <div className="space-y-2 text-foreground">
          <h2 className="text-lg font-semibold">2. User Content & Ownership</h2>
          <p className="text-sm text-muted-foreground">
            You retain full ownership of all data, text, instructions, and recipe images you upload to RecipeHub. By toggling a recipe to "Public" or sharing it with other users, you grant RecipeHub a technical license to host, display, and distribute that specific recipe text and image within the platform to other users as requested by you.
          </p>
        </div>

        <div className="space-y-2 text-foreground">
          <h2 className="text-lg font-semibold">3. Acceptable Use</h2>
          <p className="text-sm text-muted-foreground">
            You agree not to upload content that is illegal, offensive, copyright-infringing, or malicious. We reserve the right to remove any recipe content or delete accounts that violate these guidelines.
          </p>
        </div>

        <div className="space-y-2 text-foreground">
          <h2 className="text-lg font-semibold">4. Disclaimer of Warranties</h2>
          <p className="text-sm text-muted-foreground">
            RecipeHub is provided "as is". We try our best to keep your digital cookbook up and running perfectly, but we do not guarantee uninterrupted service, completely accurate parsing for future AI features, or zero data loss. Please keep digital backups of your absolute favorite culinary secrets!
          </p>
        </div>

        <div className="space-y-2 text-foreground">
          <h2 className="text-lg font-semibold">5. Changes to Terms</h2>
          <p className="text-sm text-muted-foreground">
            We may occasionally update these terms to reflect new features or database optimizations. Continued use of the application constitutes acceptance of the updated terms.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}