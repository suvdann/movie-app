"use client";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronDown,
  Moon,
  Film,
  ChevronRight,
  Sun,
  Search,
} from "lucide-react";

import { useTheme } from "next-themes";
import { MobileSearch } from "./MobileSearch";
import { useEffect, useRef, useState } from "react";
import { searchMovie } from "@/hooks/SearchMovieApi";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { SearchByGenre } from "./SearchByGenre";
// const genres = [
//   "Action",
//   "Adventure",
//   "Animation",
//   "Biography",
//   "Comedy",
//   "Crime",
//   "Documentary",
//   "Drama",
//   "Family",
//   "Fantasy",
//   "Film-Noir",
//   "Game-Show",
//   "History",
//   "Horror",
//   "Music",
//   "Musical",
//   "Mystery",
//   "News",
//   "Reality-TV",
//   "Romance",
//   "Sci-Fi",
//   "Short",
//   "Sport",
//   "Talk-Show",
//   "Thriller",
//   "War",
//   "Western",
// ];
interface Props {
  id: string;
}
export const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDarkThemeActive = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDarkThemeActive ? "light" : "dark");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const searchWrapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
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
  useEffect(() => {
    const onDocMouseDown = (e: MouseEvent) => {
      if (
        searchWrapRef.current &&
        !searchWrapRef.current.contains(e.target as Node)
      ) {
        setResults([]); // dropdown хаана
      }
    };
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, []);
  // console.log(results)
  return (
    <div className=" relative   sm:w-full flex items-center  justify-between px-6 py-4 shadow bg ">
      {/* <Detail id={id} /> */}
      {/* Logo */}
      <Link
        href={"/movies"}
        className="flex items-center gap-2 text-indigo-700 font-bold text-lg cursor-pointer"
      >
        <Film className="w-5 h-5" />
        Movie Z
      </Link>
      {/* _______________________________ */}
      <div className="hidden  lg:flex lg:items-center lg:justify-center lg:gap-4">
        <Popover>
          <PopoverTrigger asChild className="hidden  lg:block">
            <Button
              variant="outline"
              className="hidden   lg:flex lg:items-center lg:gap-2 shadow-sm h-[36px] "
            >
              <ChevronDown className=" w-5 h-5" />
              Genre
            </Button>
          </PopoverTrigger>
          <PopoverContent className="sm:hidden lg:block lg:w-[577px] space-y-2">
            <SearchByGenre />
          </PopoverContent>
        </Popover>

        {/* Search-------------- */}
        <div
          ref={searchWrapRef}
          className="relative     lg:flex  lg:items-center  lg:border lg:w-[379px] lg:h-[36px] lg:rounded-lg lg:border-[#E4E4E7] p-1 shadwow "
        >
          <Search />
          <Input
            className="border-none outline-none  focus:outline-none shadow-none"
            placeholder="Search.."
            onChange={handleChange}
            value={search}
          />
        </div>

        {results.length > 0 && (
          <div className="absolute top-[60px] left-[466px] w-[577px] bg-white dark:bg-black  rounded-lg border border-[#E4E4E7] max-h-[729px]  z-50 p-2">
            {results.map((movie) => (
              <Link href={`/movie/${movie.id}`} key={movie.id}>
                <div className="flex items-center w-[553px] h-[116px] gap-8 border-b hover:bg-gray-100 dark:hover:bg-gray-800 p-2">
                  <Image
                    src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                    alt={movie.title}
                    width={50}
                    height={75}
                    className="rounded"
                  />
                  <div>
                    <p className="font-semibold">{movie.title}</p>
                    <p className="text-sm ">
                      {Number(movie.vote_average).toFixed(1)}⭐ /10
                    </p>
                    <p className="text-sm text-gray-500">
                      {movie.release_date}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
            {/* results ruu usreh  */}

            <Link href={`/results/${search}`}>
              <p className="text-[14px] hover:underline">
                See all results for "{search}"
              </p>
            </Link>
          </div>
        )}
      </div>
      <div className="">
        <MobileSearch />
      </div>

      <Button size="icon" onClick={toggleTheme}>
        {isDarkThemeActive ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
};
