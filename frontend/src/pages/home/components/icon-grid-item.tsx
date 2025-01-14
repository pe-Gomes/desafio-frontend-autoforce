import { Skeleton } from "@/components/ui/skeleton"
import type { ReactNode } from "react"

export function IconGridItem({
  icon,
  title,
  description,
}: {
  icon: ReactNode
  title: string
  description?: string
}) {
  return (
    <div className='flex items-center justify-center gap-x-4 md:justify-start'>
      {icon}
      <div className='text-base font-bold'>
        <h1>{title}</h1>
        {!description && <Skeleton className='h-4 w-full bg-primary/70' />}

        {description && <span className='text-primary'>{description}</span>}
      </div>
    </div>
  )
}
