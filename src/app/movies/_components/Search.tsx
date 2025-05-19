import * as React from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Search, X, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

export function MovileSearch() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [showGenres, setShowGenres] = React.useState(false); 

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

  return (
    <div className="block md:hidden ">
      <Drawer open={open} direction="top" onOpenChange={setOpen} >
        <DrawerTrigger asChild>
          <Button variant="outline" className="">
            <Search />
          </Button>
        </DrawerTrigger>

        <DrawerContent className="block md:hidden bg-white dark:bg-black h-[59px]  p-4 ">
          
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
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className=" ml-[271px] pr-10 border-none outline-none"
            />
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
