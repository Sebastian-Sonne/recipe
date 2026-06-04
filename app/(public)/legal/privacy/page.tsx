import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Page() {
  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-3xl font-bold tracking-tight">Privacy Policy</CardTitle>
        <p className="text-sm text-muted-foreground">Last updated: June 2026</p>
      </CardHeader>
      <CardContent className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <p>
          At RecipeHub, your privacy is a high priority. This policy outlines how we collect, use, and safe-keep your data when you use our recipe management app.
        </p>

        <Separator />

        <div className="space-y-2 text-foreground">
          <h2 className="text-lg font-semibold">1. Data We Collect</h2>
          <p className="text-sm text-muted-foreground">
            We only collect the essential information required to make your digital cookbook function smoothly:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pl-2">
            <li><strong>Account Information:</strong> Your email address and basic profile info via Supabase Auth.</li>
            <li><strong>Recipe Data:</strong> The ingredients, titles, steps, tags, and instructions you manually input.</li>
            <li><strong>Images:</strong> Photos of food or handwritten recipes you explicitly upload to our storage bins.</li>
          </ul>
        </div>

        <div className="space-y-2 text-foreground">
          <h2 className="text-lg font-semibold">2. How Your Data is Used</h2>
          <p className="text-sm text-muted-foreground">
            Your data is strictly used to deliver service functionality, such as dynamically scaling your ingredients, indexing your tags for instant searches, and serving shared recipes to friends or the community if you opt into sharing.
          </p>
        </div>

        <div className="space-y-2 text-foreground">
          <h2 className="text-lg font-semibold">3. Third-Party Infrastructure</h2>
          <p className="text-sm text-muted-foreground">
            We don't sell your data to advertisers. We rely on trusted third-party cloud infrastructure to run our app:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pl-2">
            <li><strong>Supabase:</strong> For handling secure user credentials, database hosting, and secure file storage.</li>
          </ul>
        </div>

        <div className="space-y-2 text-foreground">
          <h2 className="text-lg font-semibold">4. Control Over Your Content</h2>
          <p className="text-sm text-muted-foreground">
            Your data belongs to you. Every recipe you create can be edited, toggled between private/public, or fully deleted at any time through the UI. If you decide to completely delete your account, your associated database records will be erased in accordance with our system cleaning configurations.
          </p>
        </div>

        <div className="space-y-2 text-foreground">
          <h2 className="text-lg font-semibold">5. Contact Us</h2>
          <p className="text-sm text-muted-foreground">
            Have any questions or need your data manually adjusted? Reach out to us through the feedback sections on your main settings panel.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}