"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
// import { getSearchByGenre } from "@/Hooks/GetSearchByGenre";
import Link from "next/link";
import { Dispatch } from "react";
import { getSearchByGenre } from "@/hooks/GetSearchByGenre";
interface Genre {
  id: number;
  name: string;
}
interface isOpenGenrePros {
  handleClick?: () => void;
  setIsOpenGenre?: Dispatch<boolean>;
  isOpenGenre?: boolean;
}

export const SearchByGenre = ({
  setIsOpenGenre,
  isOpenGenre,
}: isOpenGenrePros) => {
  const closeGenre = () => {
    if (setIsOpenGenre && typeof isOpenGenre === "boolean") {
      setIsOpenGenre(!isOpenGenre);
      console.log("haha");
    }
  };
  const { setTheme, resolvedTheme } = useTheme();
  const isDarkThemActive = resolvedTheme === "dark";
  const [genres, setGenres] = useState<Genre[]>([]);
  // console.log(genres, "lllllll");
  useEffect(() => {
    const fetchGenres = async () => {
      const genre = await getSearchByGenre();
      setGenres(genre.genres);
    };
    fetchGenres();
  }, []);
  return (
    <div
      className={` w-[377px] md:w-[400px]   top-10 rounded-lg p-1 ${
        isDarkThemActive ? "bg-black text-white" : "bg-white text-black"
      }  `}
    >
      <div className="p-5">
        <p className="font-semibold text-[24px]">Search by genre</p>
        <p>See lists of movies by genre </p>
      </div>
      <div className="flex gap-3 w-full flex-wrap cursor-pointer">
        {genres.map((el, index) => (
          <Link key={index} href={`/genre/${el?.id}`}>
            <div key={index}>
              <Button
                variant={"outline"}
                onClick={closeGenre}
                className="h-[25px] rounded-full"
              >
                {el?.name} <ChevronRight />
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
