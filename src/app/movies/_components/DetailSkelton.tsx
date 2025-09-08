import { Skeleton } from "@/components/ui/skeleton";

export const DetailSkeleton = () => {
  return (
    <div className="w-full h-screen mt-6 p-6">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left side (poster + small text) */}
        <div className="flex flex-col gap-4">
          <Skeleton className="h-[428px] w-[290px] rounded-lg" />
          <Skeleton className="h-5 w-[260px] rounded-md" />
          <Skeleton className="h-5 w-[220px] rounded-md" />
          <Skeleton className="h-5 w-[180px] rounded-md" />
        </div>

        {/* Right side (big banner + details) */}
        <div className="flex flex-col gap-6 flex-1">
          <Skeleton className="w-full h-[428px] rounded-lg" />
          <div className="flex flex-col gap-3">
            <Skeleton className="h-6 w-1/2 rounded-md" />
            <Skeleton className="h-6 w-1/3 rounded-md" />
            <Skeleton className="h-6 w-2/3 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};
