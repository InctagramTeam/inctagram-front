import { CSSProperties, HTMLAttributes, useMemo } from 'react'

import { cn } from '@/shared'

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  height?: string | number
  width?: string | number
  border?: string
}

function Skeleton({ className, height, width, border, ...props }: SkeletonProps) {
  const styles: CSSProperties = useMemo(() => {
    return {
      width,
      height,
      borderRadius: border || '50%',
    }
  }, [border, height, width])

  return (
    <div
      {...props}
      className={cn('animate-pulse rounded-md bg-Dark-500', className)}
      style={styles}
    />
  )
}

export { Skeleton }

/**
 * Пример использования:
 * export function SkeletonCard() {
 *   return (
 *     <div className="flex flex-col space-y-3">
 *       <Skeleton className="h-[125px] w-[250px] rounded-xl" />
 *       <div className="space-y-2">
 *         <Skeleton className="h-4 w-[250px]" />
 *         <Skeleton className="h-4 w-[200px]" />
 *       </div>
 *     </div>
 *   )
 * }
 */
