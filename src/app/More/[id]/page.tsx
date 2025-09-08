"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getSimilarMovie } from "@/hooks/SimilarMovieApi";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const MoreLike = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchSimilar = async () => {
      const movieData = await getSimilarMovie(id as string, page);
      console.log("Fetched movieData:", movieData);
      setMovies(movieData.slice(0, 10));
    };

    fetchSimilar();
  }, [id, page]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">More like this</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[32px] px-8">
        {movies.map((movie) => (
          <Card key={movie.id} className="w-[229px] h-[439px] bg-gray-100 ">
            <div className="relative  h-[340px] overflow-hidden rounded-t-lg">
              <Image
                src={`https://image.tmdb.org/t/p/w500${
                  movie.backdrop_path || movie.poster_path
                }`}
                alt={movie.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2 ">
              <p>{movie.title}</p>
              <p>{movie.release_date}</p>
              <p>⭐{Number(movie.vote_average).toFixed(1)}/10</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MoreLike;
