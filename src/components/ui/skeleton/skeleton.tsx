import { cn } from "@/lib/utils"
import React from "react"
export type SkeletonProps = React.ComponentPropsWithoutRef<"div"> & {
  className?: string}
const Skeleton = ({ className, ...props }:SkeletonProps) => {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
