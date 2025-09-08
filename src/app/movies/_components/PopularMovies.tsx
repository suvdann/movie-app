// PopularMovies.tsx
"use client";
import { useEffect, useState } from "react";
import { Cards } from "./Card";
import { getPopularApi } from "@/hooks/PopularApi";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { GridSkeleton, SectionHeaderSkeleton } from "./CardSkelton";

type PopularMovies = {
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

export const PopularMovies = () => {
  const [popularMovie, setPopularMovie] = useState<PopularMovies[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const response = await getPopularApi();
        const firstTen = response?.results?.slice(0, 10) ?? [];
        if (mounted) setPopularMovie(firstTen);
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
          Popular
        </h2>
        <Button asChild variant="ghost" className="border-none">
          <Link href="/movies/popular">
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
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {popularMovie.map((el) => (
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
