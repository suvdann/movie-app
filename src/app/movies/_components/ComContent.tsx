"use client";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

type Upcoming = {
  id: number; // 🔹 add
  title: string;
  vote_average: string;
  overview: string;
  onWatchTrailer: () => void; // 🔹 add
};

export const ComContent = ({
  id,
  title,
  vote_average,
  overview,
  onWatchTrailer,
}: Upcoming) => {
  return (
    <div className="h-[264px] text-white flex flex-col gap-3">
      <p className="text-base">Now Playing:</p>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-sm">⭐{vote_average}/10</p>
      <p className="text-sm w-[302px] line-clamp-4">{overview}</p>

      <Button
        onClick={onWatchTrailer} // 🔹 товч дарахад Hero-оос ирсэн handler
        variant="default"
        className="bg- border text-sm w-fit px-4 py-2 rounded-md flex items-center gap-2 "
      >
        <Play className="w-4 h-4" />
        Watch Trailer
      </Button>
    </div>
  );
};
