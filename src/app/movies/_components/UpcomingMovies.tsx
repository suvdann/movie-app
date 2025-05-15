import { useEffect, useState } from "react";
import {  Cards } from "./Card";
import { getUpcomingApi } from "@/hooks/UpcomingApi";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
 type SoonMovies={
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

 }
export const UpcomingMovies=()=>{
        const [soonMovie, setSoonMovie] = useState<SoonMovies[]>([]);
   useEffect(()=>{
     const bolohgeebn=async()=>{
      const response =await getUpcomingApi()
      const firstTen=response?.results.splice(0, 10)
      setSoonMovie(firstTen)
     }
     bolohgeebn()
}, [])
     console.log(soonMovie)
    return(
        
           <div className="px-4 sm:px-6 py-6">
                <div className=" flex  justify-between">  
            <h2 className="text-lg sm:text-2xl font-bold mb-4 px-2 sm:px-0">Upcoming</h2>
          <Button variant="outline">See more<ArrowRight /></Button>
           </div> 
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {soonMovie.map((el, index) => (
            <Cards
              key={index}
              PosterPath={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
              VoteAverage={Number(el.vote_average).toFixed(1)}
              title={el.title}
            />
          ))}
        </div>
      </div>
    )
}