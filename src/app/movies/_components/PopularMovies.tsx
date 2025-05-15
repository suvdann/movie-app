import { useEffect, useState } from "react";
import {  Cards } from "./Card";
import { getPopularApi } from "@/hooks/PopularApi";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
 type PopularMovies={
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
export const PopularMovies=()=>{
        const [popularMovie, setPopularMovie] = useState<PopularMovies[]>([]);
   useEffect(()=>{
     const popularMovie=async()=>{
      const response =await getPopularApi()
      const firstTen=response?.results.splice(0, 10)
      setPopularMovie(firstTen)
     }
     popularMovie()
}, [])
     console.log(popularMovie)
    return(
        
           <div className="px-4 sm:px-6 py-6">
           <div className=" flex  justify-between">  
            <h2 className="text-lg sm:text-2xl font-bold mb-4 px-2 sm:px-0">Popular</h2>
          <Button variant="outline">See more<ArrowRight /></Button>
           </div> 
      
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {popularMovie.map((el, index) => (
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