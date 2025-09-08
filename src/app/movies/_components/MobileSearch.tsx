"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Search, X, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { searchMovie } from "@/hooks/SearchMovieApi";
import { getSearchByGenre } from "@/hooks/GetSearchByGenre";
import Link from "next/link";
import Image from "next/image";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function MobileSearch() {
  const [open, setOpen] = React.useState(false);
  const [showGenres, setShowGenres] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [results, setResults] = React.useState<any[]>([]);
  const [genres, setGenres] = React.useState<{ id: number; name: string }[]>(
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const closeDrawer = () => {
    setSearch("");
    setOpen(false);
    setShowGenres(false);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      if (search.trim() !== "") {
        const movies = await searchMovie(search);
        setResults(movies.slice(0, 5));
      } else {
        setResults([]);
      }
    };

    fetchData();
  }, [search]);

  React.useEffect(() => {
    const fetchGenres = async () => {
      const data = await getSearchByGenre();
      setGenres(data.genres);
    };
    fetchGenres();
  }, []);

  return (
    <div className="block lg:hidden">
      <Drawer open={open} direction="top" onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline">
            <Search />
          </Button>
        </DrawerTrigger>

        <DrawerContent className="block lg:hidden bg-white dark:bg-black h-[59px] p-4">
          <div className="relative flex items-center gap-2">
            <div className="px-2">
              <Button
                variant="outline"
                onClick={() => setShowGenres(!showGenres)}
                className="text-sm flex items-center gap-2 justify-between"
              >
                {showGenres ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </Button>
            </div>

            <Search className="text-muted-foreground w-5 h-5" />

            <div className="flex flex-end">
              <Input
                placeholder="Search.."
                value={search}
                onChange={handleChange}
                className="w-full pr-10 border-none outline-none"
              />

              {/* Search results */}
              {results.length > 0 && (
                <div className="absolute top-[42px] left-[20px] w-[335px] bg-white dark:bg-black border border-[#E4E4E7] rounded-lg max-h-[729px] z-50">
                  {results.map((movie) => (
                    <Link href={`/movie/${movie.id}`} key={movie.id}>
                      <div className="flex items-center gap-5 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 border-b p-2">
                        <Image
                          src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                          alt={movie.title}
                          width={50}
                          height={75}
                          className="rounded"
                        />
                        <div>
                          <p className="font-semibold">{movie.title}</p>
                          <p className="text-sm ">⭐ /10</p>
                          <p className="text-sm text-gray-500">
                            {movie.release_date}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                  <Link
                    href={`/results/${search}`}
                    className="block text-grey-500 hover:underline mt-2"
                  >
                    <p className="text-[14px]">
                      See all results for "{search}"
                    </p>
                  </Link>
                </div>
              )}

              <Button
                variant="ghost"
                size="icon"
                onClick={closeDrawer}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:bg-gray-200"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Genres list */}
          <div className="flex justify-center">
            {showGenres && (
              <div className="px-2 bg-white dark:bg-black w-[335px] h-[513px] mt-2 rounded-lg border border-[#E4E4E7]">
                <h1 className="font-bold text-[24px]">Genres</h1>
                <p className="text-xs mb-3">See lists of movies by genre</p>
                <div className="w-[295px] h-px bg-[#E4E4E7] my-2" />
                <div className="grid grid-cols-3 gap-2 max-h-[300px] overflow-auto pr-1">
                  {genres.map((genre) => (
                    <Link key={genre.id} href={`/genre/${genre.id}`}>
                      <Button
                        variant="outline"
                        className="w-full h-[26px] rounded-full text-xs flex items-center"
                        onClick={closeDrawer}
                      >
                        {genre.name}
                        <ChevronRight className="w-3 h-3 ml-1" />
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
