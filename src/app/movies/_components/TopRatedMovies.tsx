import { useEffect, useState } from "react";
import {  Cards } from "./Card";
import { getTopRatedApi } from "@/hooks/TopRatedApi";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

 type TopMovies={
backdrop_path:string; 
overview:string
original_title: string
popularity: number
poster_path: string
release_date: Date
title: string
video: boolean,
vote_average: string,
vote_count:number
id:string
 }
export const TopRatedMovies=()=>{
        const [topMovie, setTopMovie] = useState<TopMovies[]>([]);
   useEffect(()=>{
     const bolohgeebn=async()=>{
      const response =await getTopRatedApi()
      const firstTen=response?.results.splice(0, 10)
      setTopMovie(firstTen)
     }
     bolohgeebn()
}, [])
     console.log(topMovie)
    return(
        
           <div className="px-4 sm:px-6 py-6">
           <div className=" flex  justify-between">
                <h2 className="text-lg sm:text-2xl font-bold mb-4 px-2 sm:px-0">Top Rated</h2> 
                  <Button variant="ghost" className="border-nonne">See more<ArrowRight/></Button>
           </div> 
       
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {topMovie.map((el, index) => (
            <Cards
              key={index}
              id={el.id.toString()}
              PosterPath={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
              VoteAverage={Number(el.vote_average).toFixed(1)}
              title={el.title}
            />
          ))}
        </div>
      </div>
    )
}