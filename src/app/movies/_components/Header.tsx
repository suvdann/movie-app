"use client";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Moon, Film, ChevronRight, Sun } from "lucide-react";
import { useState } from "react";

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
  const { setTheme, resolvedTheme } = useState();
  return (
    <div className="w-full flex items-center justify-between px-6 py-4 shadow bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2 text-indigo-700 font-bold text-lg">
        <Film className="w-5 h-5" />
        Movie Z
      </div>

      <div className="flex items-center gap-4">
        {/* Genre Dropdown */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronDown className="w-4 h-4" />
              Genre
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[577px]">
            <div className="text-sm font-bold   ">Genres</div>
            <div className="border-b-[1px]  grid p-[4px] size-16px">
              See lists of movies by gene
            </div>

            <div className="grid grid-cols-3 gap-2 max-h-[300px] overflow-auto ">
              {genres.map((genre) => (
                <Button
                  key={genre}
                  variant="outline"
                  className=" w-full h-[20px] rounded-full p-[2px]"
                  //  gap-spacing/2
                >
                  {genre}
                  <ChevronRight />
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Search */}
        <Input className="w-[300px]" placeholder="Search..." />
      </div>

      {/* Dark Mode Button */}
      <Button variant="outline" className="bg-white">
        <Moon />
      </Button>
    </div>
  );
};
