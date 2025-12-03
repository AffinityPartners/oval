import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * Home page component for the OVAL site.
 * Displays a welcome message and showcases the three OVAL membership tiers.
 * This serves as a placeholder landing page demonstrating the UI components.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Welcome to <span className="text-primary">OVAL</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Your comprehensive healthcare membership platform. Choose the plan
          that fits your needs.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </header>

      {/* Membership Tiers Section */}
      <main className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-semibold">
          Membership Tiers
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* OVAL Access Card */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>OVAL Access</CardTitle>
              <CardDescription>Essential healthcare access</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">
                Entry-level membership providing fundamental healthcare services
                and telemedicine support.
              </p>
            </CardContent>
          </Card>

          {/* OVAL One Card */}
          <Card className="flex flex-col border-primary">
            <CardHeader>
              <CardTitle>OVAL One</CardTitle>
              <CardDescription>Comprehensive coverage</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">
                Mid-tier membership with expanded benefits including enhanced
                telemedicine and prescription services.
              </p>
            </CardContent>
          </Card>

          {/* OVAL Plus Card */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>OVAL Plus</CardTitle>
              <CardDescription>Premium benefits</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">
                Top-tier membership offering the complete OVAL experience with
                all premium features included.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} OVAL. All rights reserved.</p>
      </footer>
    </div>
  );
}
