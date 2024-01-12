import * as React from "react"

import { cn } from "@/lib/utils"

interface LandingShellProps extends React.HTMLAttributes<HTMLDivElement> { }

export function LandingShell({
  children,
  className,
  ...props
}: LandingShellProps) {
  return (
    <div className={cn("grid items-start gap-8", className)} {...props}>
      {children}
    </div>
  )
}
