import type React from "react"
import { cn } from "@/lib/utils"

interface CaseStudySectionProps {
  title: string
  children: React.ReactNode
  className?: string
  id?: string
}

export function CaseStudySection({ title, children, className, id }: CaseStudySectionProps) {
  return (
    <section id={id} className={cn("py-12 md:py-16", className)}>
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      {children}
    </section>
  )
}

