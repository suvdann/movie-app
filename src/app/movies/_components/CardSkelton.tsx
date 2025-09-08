// _components/Skeletons.tsx
import { Skeleton } from "@/components/ui/skeleton";

export const CardSkeleton = () => (
  <div className="space-y-2">
    <Skeleton className="w-full aspect-[2/3] rounded-lg" />
    <Skeleton className="h-4 w-3/4 rounded-md" />
    <Skeleton className="h-4 w-1/2 rounded-md" />
  </div>
);

export const SectionHeaderSkeleton = () => (
  <div className="flex items-center justify-between">
    <Skeleton className="h-7 w-36 rounded-md" />
    <Skeleton className="h-9 w-24 rounded-md" />
  </div>
);

export const GridSkeleton = ({ count = 10 }: { count?: number }) => (
  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
    {Array.from({ length: count }).map((_, i) => (
      <CardSkeleton key={i} />
    ))}
  </div>
);

// Hero skeleton (өргөн баннер + текст)
export const HeroSkeleton = () => (
  <div className="relative w-full">
    <div className="relative h-[246px] w-full lg:h-[600px]">
      <Skeleton className="absolute inset-0 rounded-none" />
      <div className="hidden lg:block absolute z-10 p-4 space-y-3 top-[100px] left-[120px] w-[520px]">
        <Skeleton className="h-10 w-3/4 rounded-md" />
        <Skeleton className="h-6 w-1/2 rounded-md" />
        <Skeleton className="h-6 w-full rounded-md" />
        <Skeleton className="h-6 w-5/6 rounded-md" />
        <div className="flex gap-3 pt-2">
          <Skeleton className="h-10 w-28 rounded-md" />
          <Skeleton className="h-10 w-36 rounded-md" />
        </div>
      </div>
    </div>
  </div>
);
