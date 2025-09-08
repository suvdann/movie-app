"use client";

import { useEffect, useState } from "react";
import { searchMovie } from "@/hooks/SearchMovieApi";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface PageProps {
  params: {
    id: string; // folder нэртэй таарсан байх ёстой
  };
}

const Results = ({ params }: PageProps) => {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const fetchResults = async () => {
      const movies = await searchMovie(params.id);
      setResults(movies);
    };

    fetchResults();
  }, [params.id]);

  return (
    <div className="p-6">
      <h1 className="text-[30px] font-bold mb-4">
        Search results for: "{params.id}"
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {results.map((movie) => (
          <Card key={movie.id} className="w-[165px] h-[361px]">
            <div className="relative h-[233px] overflow-hidden rounded-t-lg">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2">
              <p className="text-sm font-medium">{movie.title}</p>
              <p className="text-xs text-gray-500">{movie.release_date}</p>
              <p className="text-xs text-yellow-500">
                ⭐ {movie.vote_average} / 10
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Results;
