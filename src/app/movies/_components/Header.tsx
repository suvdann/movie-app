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
import { useEffect, useState } from "react";
import { searchMovie } from "@/hooks/SearchMovieApi";
import  Link from "next/link";
import Image from "next/image";
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
const[search, setSearch]=useState("")
const [results, setResults] = useState<any[]>([]);

//  const searchHandler=(event:any)=>{
//   setSearch(event.target.value);
// };
// console.log(search);


// const handleSearch = async () => {
//  if (search.trim() !== "") {
//    const movies = await searchMovie(search );
//    setResults(movies);
//  } else {
//    setResults([]);
//  }
// }

useEffect(() => {
  const delayDebounce = setTimeout(async () => {
    if (search.trim() !== "") {
      const movies = await searchMovie(search);
      setResults(movies.slice(0,5));
    } else {
      setResults([]);
    }
  }); 

  return () => clearTimeout(delayDebounce); // ← өмнөх debounce-г цуцална
}, [search]);
// console.log(results)
  return (
    <div className=" relative   sm:w-full flex items-center  justify-between px-6 py-4 shadow bg ">
      {/* <Detail id={id} /> */}
      {/* Logo */}
      <div className="flex items-center gap-2 text-indigo-700 font-bold text-lg">
        <Film className="w-5 h-5" />
        Movie Z
      </div>
{/* _______________________________ */}
      <div className="hidden lg:block lg:flex lg:items-center lg:justify-center lg:gap-4">
        {/* Genre Dropdown */}
        <Popover >
          <PopoverTrigger asChild className="hidden  lg:block">
            <Button variant="outline" className="hidden  lg:block lg:flex lg:items-center lg:gap-2">
              <ChevronDown className=" w-5 h-5" />
              Genre
            </Button>
          </PopoverTrigger>
<PopoverContent className="sm:hidden  lg:block lg:w -[577px]  lg:block ">
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
        <div className="lg:relative hidden lg:block lg:flex  lg:items-center  lg:border lg:w-[379px] lg:h-[36px] lg:rounded-lg lg:border-[#E4E4E7] p-1 ">
       <Search/> 
          {/* onClick={handleSearch} */}
          <Input
            className="border-none outline-none  focus:outline-none shadow-none"
            placeholder="Search.."
            onChange={(e) => setSearch(e.target.value)}
         
            value={search}
          />
        </div>
      
        {results.length > 0 && (
<div className="absolute top-[103px] left-[466px] w-[577px] bg-white dark:bg-black border rounded shadow-lg max-h-[729px]  z-50 p-2">
   {results.map((movie) => (
<Link href={`/movie/${movie.id}`} key={movie.id}>
<div className="flex items-center w-[553px] h-[116px] gap-5 border-b hover:bg-gray-100 dark:hover:bg-gray-800 p-2">
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
</div>
</div>
</Link>
   ))}
   <Link
                href={search}
                className="block  text-grey-500 hover:underline mt-2"
              >
               <p className="text-[24px]">See all results for "{search}"</p> 
              </Link>
</div>
)} 
           
            
         </div>
      <div className=""><MobileSearch /></div>
        
      
      <Button size="icon" onClick={toggleTheme}>
        {isDarkThemeActive ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
};
