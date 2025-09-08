"use client";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

type Upcoming = {
  title: string;
  vote_average: string;
  overview: string;
  onWatchTrailer: () => void; // 🔹 нэмэв
  disabled?: boolean; // 🔹 хүсвэл loading үед идэвхгүй болгох
};

export const MobileContent = ({
  title,
  vote_average,
  overview,
  onWatchTrailer,
  disabled,
}: Upcoming) => {
  return (
    <div className="flex flex-col gap-2 h-[264px] p-4">
      <p className="text-sm">Now Playing:</p>

      <div className="flex justify-between items-start gap-2">
        <h1 className="text-xl font-bold line-clamp-2">{title}</h1>
        <p className="text-sm shrink-0">⭐ {vote_average}/10</p>
      </div>

      <p className="text-sm line-clamp-3">{overview}</p>

      <Button
        onClick={onWatchTrailer} // 🔹 энд дуудна
        disabled={disabled}
        variant="default"
        className="border bg- text-sm w-fit px-4 py-2 rounded-md flex items-center gap-2 text-black"
      >
        <Play className="w-4 h-4" />
        Watch Trailer
      </Button>
    </div>
  );
};
