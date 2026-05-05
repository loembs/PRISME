import { Skeleton } from "@/components/ui/skeleton";

export function TrendingVideoCardSkeleton() {
  return (
    <div className="group cursor-pointer flex flex-col gap-3 w-full">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
        {/* Rank Badge */}
        <Skeleton className="absolute top-3 left-3 w-7 h-7 rounded-full" />
        {/* Thumbnail */}
        <Skeleton className="h-full w-full rounded-xl" />
        {/* Duration Badge */}
        <Skeleton className="absolute top-3 right-3 w-12 h-4 rounded" />
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <Skeleton className="h-3 w-16 mb-2 rounded" />
          <Skeleton className="h-4 w-full mb-1" />
          <Skeleton className="h-4 w-3/4 mb-2" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-3 w-8" />
            <Skeleton className="h-3 w-1" />
            <Skeleton className="h-3 w-12" />
          </div>
        </div>
      </div>
    </div>
  );
}