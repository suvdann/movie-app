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
import { MovileSearch } from "./Search";
// import { Detail } from "@/app/details/[id]/page";

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

export const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDarkThemeActive = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDarkThemeActive ? "light" : "dark");

  return (
    <div className=" relative w-[375px] sm:w-full flex items-center justify-between px-6 py-4 shadow bg ">
      {/* <Detail id={id} /> */}
      {/* Logo */}
      <div className="flex items-center gap-2 text-indigo-700 font-bold text-lg">
        <Film className="w-5 h-5" />
        Movie Z
      </div>

      <div className="flex items-center gap-4">
        {/* Genre Dropdown */}
        <Popover>
          <PopoverTrigger asChild className="">
            <Button variant="outline" className=" flex items-center gap-2">
              <ChevronDown className=" w-4 h-4" />
              Genre
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[577px] hidden lg:block ">
            <div className="text-sm font-bold">Genres</div>
            <div className="border-b-[1px]  grid p-[4px] size-16px">
              See lists of movies by gene
            </div>

            <div className="grid grid-cols-3 gap-2 max-h-[300px] overflow-auto  ">
              {genres.map((genre) => (
                <Button
                  key={genre}
                  variant="outline"
                  className=" w-full h-[20px] rounded-full p-[2px] z-20"
                >
                  {genre}
                  <ChevronRight />
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Search */}
        <div className=" hidden lg:block lg:flex  lg:items-center lg:border lg:w-[379px]  lg:rounded-lg lg:border-[#E4E4E7] p-1 ">
          <Search />
          <Input
            className="border-none outline-none  focus:outline-none shadow-none"
            placeholder="Search..."
          />
        </div>
      </div>

      <MovileSearch />

      <Button size="icon" onClick={toggleTheme}>
        {isDarkThemeActive ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
};
