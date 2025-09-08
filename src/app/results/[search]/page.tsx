"use client";

import { Card } from "@/components/ui/card";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import { searchMovie } from "@/hooks/SearchMovieApi";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface PageProps {
  params: Promise<{ search: string }>; // ⟵ params одоо Promise гэж тэмдэглэе
}

const Results = ({ params }: PageProps) => {
  // ⟵ Promise-оос задлах (unwrap)
  const { search } = use(params);
  const decodedSearch = decodeURIComponent(search);

  const [results, setResults] = useState<any[]>([]);

  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film-Noir",
    "Game-Show",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "News",
    "Reality-TV",
    "Romance",
    "Sci-Fi",
    "Short",
    "Sport",
    "Talk-Show",
    "Thriller",
    "War",
    "Western",
  ];

  useEffect(() => {
    (async () => {
      const movies = await searchMovie(decodedSearch);
      setResults((movies ?? []).slice(0, 5));
    })();
    // ⟵ params биш, задласан/дэкоудлосон утгаа хараат болгоно
  }, [decodedSearch]);

  return (
    <div className="p-5 lg:flex lg:flex-row">
      <div className="flex">
        <div className="flex flex-col relative w-[804px] h-[826px] border-r-2">
          <h1 className="text-[30px] font-semibold">Search results</h1>
          <h4 className="text-[20px]">5 results for "{decodedSearch}"</h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-1">
            {results.map((movie) => (
              <Card key={movie.id} className="w-[165px] h-[361px]">
                <div className="relative h-[233px] sm:h-[428px] overflow-hidden rounded-t-lg">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-2">
                  <p>{movie.title}</p>
                  <p>{movie.release_date}</p>
                  <p>⭐{Number(movie.vote_average).toFixed(1)}/10</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="ml-[28px] lg:w-[387px] lg:h-[352px] flex flex-col gap-4">
          <h1 className="text-[24px] font-semibold">Search by genre</h1>
          <p>See lists of movies by genre</p>
          <div className="grid grid-cols-3 gap-4 max-h-[300px]">
            {genres.map((genre) => (
              <Button
                key={genre}
                variant="outline"
                className="w-fit h-[20px] rounded-full p-[2px] z-20"
              >
                {genre}
                <ChevronRight />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Results;
