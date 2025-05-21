"use client"
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Search, X, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { searchMovie } from "@/hooks/SearchMovieApi";
import  Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
export function MobileSearch() {
  const [open, setOpen] = useState(false);
  // const [query, setQuery] = useState("");
  const [showGenres, setShowGenres] = useState(false); 
const[search, setSearch]=useState("")
const [results, setResults] = useState<any[]>([])
  const closeDrawer = () => {
   
    setQuery("");
    setOpen(false);
    setShowGenres(false);
    
  };

  const genres = [
    "Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary",
    "Drama", "Family", "Fantasy", "Film-Noir", "Game-Show", "History", "Horror",
    "Music", "Musical", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi",
    "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"
  ];
;
useEffect(() => {
  const delayDebounce = setTimeout(async () => {
    if (search.trim() !== "") {
      const movies = await searchMovie(search);
      setResults(movies.slice(0,5));
    } else {
      setResults([]);
    }
  }, 500); 

  return () => clearTimeout(delayDebounce); // ← өмнөх debounce-г цуцална
}, [search]);
  return (
    <div className="block lg:hidden ">
      <Drawer open={open} direction="top" onOpenChange={setOpen} >
        <DrawerTrigger asChild>
          <Button variant="outline" className="">
            <Search />
          </Button>
        </DrawerTrigger>

        <DrawerContent className="block lg:hidden bg-white dark:bg-black h-[59px]  p-4 ">
          
          <div className="relative flex items-center gap-2 ">
            
          {/* Toggle Genres button */}
          <div className="px-2 ">
            <Button
              variant="outline"
              onClick={() => setShowGenres(!showGenres)}
              className="text-sm flex items-center gap-2 justify-between"
            >
           {/* genre */}
              {showGenres ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </div>
                <Search className="text-muted-foreground w-5 h-5" />

            <div className="flex flex-end">
            <Input
              placeholder="Search.."
              value={search}
             onChange={(e) => setSearch(e.target.value)}
              className="w-full  pr-10 border-none outline-none"
            />
            {results.length > 0 && (
            <div className="absolute top-[42px] left-0 w-full bg-white dark:bg-black  rounded shadow-lg max-h-[400px] overflow-auto z-50">
            {results.map((movie) => ( 
            <Link href={`/movie/${movie.id}`} key={movie.id}>
            <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 border-b p-2">
            <Image
                      src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                      alt={movie.title}
                      width={50}
                      height={75}
                      className="rounded"
                    />
            <div>
            <p className="font-semibold">{movie.title}</p>
            <p className="text-sm text-gray-500">{movie.release_date}</p>
            <p className="text-sm ">⭐ /10</p>
            </div>
            </div>
            </Link>

                      ))}
            <Link
                href={`${search}`}
                className="block  text-grey-500 hover:underline mt-2"
              >
               <p className="text-[24px]">See all results for "{search}"</p> 
              </Link>
              
</div>
)}
         <Button
              variant="ghost"
              size="icon"
              onClick={closeDrawer}
              className=" absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:bg-gray-200"
            >
              <X className="w-4 h-4" />
            </Button></div>

       
          </div>
          
          <div className=" flex justify-center">
     {showGenres && (
            <div className="px-2 bg-[white] w-[335px] h-[513px] mt-2 rounded-lg border border-[#E4E4E7 ]  ">
              <h1 className="font-bold text-[24px]">Genres</h1>
              <p className="text-xs mb-3 ">
                See lists of movies by genre
              </p>
              <div className="w-[295px] h-px bg-[#E4E4E7] my-2 " />
              <div className="grid grid-cols-3 gap-2 max-h-[300px] overflow-auto pr-1">
                {genres.map((genre) => (
                  <Button
                    key={genre}
                    variant="outline"
                    className="w-full h-[26px] rounded-full   text-xs flex  items-center"
                  >
                    {genre}
                    <ChevronRight className="w-3 h-3" />
                  </Button>
                ))}
              </div>
            </div>
          )}</div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
