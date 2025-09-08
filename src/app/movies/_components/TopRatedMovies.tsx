// TopRatedMovies.tsx
"use client";
import { useEffect, useState } from "react";
import { Cards } from "./Card";
import { getTopRatedApi } from "@/hooks/TopRatedApi";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GridSkeleton, SectionHeaderSkeleton } from "./CardSkelton";
import Link from "next/link";

type TopMovies = {
  backdrop_path: string;
  overview: string;
  original_title: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number | string;
  vote_count: number;
  id: number | string;
};

export const TopRatedMovies = () => {
  const [topMovie, setTopMovie] = useState<TopMovies[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const response = await getTopRatedApi();
        const firstTen = response?.results?.slice(0, 10) ?? [];
        if (mounted) setTopMovie(firstTen);
      } finally {
        if (mounted) setIsLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="px-4 sm:px-6 py-6">
      <div className="flex justify-between">
        <h2 className="text-lg sm:text-2xl font-bold mb-4 px-2 sm:px-0">
          Top Rated
        </h2>
        <Button asChild variant="ghost" className="border-none">
          <Link href="/movies/top-rated">
            See more
            <ArrowRight />
          </Link>
        </Button>
      </div>

      {isLoading ? (
        <>
          <SectionHeaderSkeleton />
          <GridSkeleton count={10} />
        </>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {topMovie.map((el) => (
            <Cards
              key={el.id}
              id={String(el.id)}
              PosterPath={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
              VoteAverage={Number(el.vote_average).toFixed(1)}
              title={el.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};
