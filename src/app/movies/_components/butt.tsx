"use client";

import { useState } from "react";

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

const genres = [

  "Action", "Adventure", "Animation", "Biography", "Comedy", "Crime",

  "Documentary", "Drama", "Family", "Fantasy", "Horror", "Music",

  "Romance", "Sci-Fi", "Thriller", "War"

];

export const Header = () => {

  const [open, setOpen] = useState(false);

  const { setTheme, resolvedTheme } = useTheme();

  const isDarkThemeActive = resolvedTheme === "dark";

  const toggleTheme = () => setTheme(isDarkThemeActive ? "light" : "dark");

  return (
<>

      {/* ✅ Mobile Header */}
<div className="sm:hidden w-full px-4 py-3 flex items-center justify-between shadow bg-white">

        {/* Logo */}
<div className="flex items-center gap-2 text-indigo-700 font-bold text-base">
<Film className="w-5 h-5" />

          Movie Z
</div>

        {/* Search trigger */}
<Popover open={open} onOpenChange={setOpen}>
<PopoverTrigger asChild>
<Button

              variant="outline"

              className="px-3 py-1 text-sm"

              onClick={() => setOpen(true)}
>

              Search
</Button>
</PopoverTrigger>
<PopoverContent className="w-[320px]">
<div className="text-sm font-semibold mb-2">Genres</div>
<div className="grid grid-cols-2 gap-2 max-h-[250px] overflow-auto">

              {genres.map((genre, index) => (
<Button

                  key={index}

                  variant="outline"

                  className="flex justify-between w-full h-8 text-xs"
>

                  {genre}
<ChevronRight className="w-3 h-3" />
</Button>

              ))}
</div>
</PopoverContent>
</Popover>

        {/* Search icon (зүгээр чимэг) */}
<Search className="w-5 h-5 text-gray-700" />
</div>

      {/* ✅ Desktop Header */}
<div className="hidden sm:flex w-full items-center justify-between px-6 py-4 shadow bg-white">

        {/* Logo */}
<div className="flex items-center gap-2 text-indigo-700 font-bold text-lg">
<Film className="w-5 h-5" />

          Movie Z
</div>

        {/* Genre + Search */}
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
<div className="text-sm font-bold mb-1">Genres</div>
<div className="border-b text-xs mb-2">See lists of movies by genre</div>
<div className="grid grid-cols-3 gap-2 max-h-[300px] overflow-auto">

                {genres.map((genre) => (
<Button

                    key={genre}

                    variant="outline"

                    className="w-full h-[20px] rounded-full text-xs"
>

                    {genre}
<ChevronRight className="w-3 h-3" />
</Button>

                ))}
</div>
</PopoverContent>
</Popover>

          {/* Search input */}
<Input className="w-[300px]" placeholder="Search..." />
</div>

        {/* Theme toggle */}
<Button size="icon" onClick={toggleTheme}>

          {isDarkThemeActive ? <Sun /> : <Moon />}
</Button>
</div>
</>

  );

};
 