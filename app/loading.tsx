import { LandingHeader } from "@/components/landing/header"
import { LandingShell } from "@/components/landing/shell"
import { CardSkeleton } from "@/components/shared/card-skeleton"

import { Button } from "@/components/ui/button"

export default function DashboardLoading() {
  return (
    <LandingShell>
      <LandingHeader heading="Posts" text="Create and manage posts.">
        <Button>Fake button</Button>
      </LandingHeader>
      <div className="divide-border-200 divide-y rounded-md border">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </LandingShell>
  )
}
