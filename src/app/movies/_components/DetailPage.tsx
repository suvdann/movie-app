"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { Cards } from "./Card";
import { getMovieDetails } from "@/hooks/MovieDetailsApi";
import { useEffect, useState } from "react";
import { getMovieTrailer } from "@/hooks/MovieTrailerApi";
import { getSimilarMovie } from "@/hooks/SimilarMovieApi";
import { getstaffInfo } from "@/hooks/StaffInfoApi";
// export const Detail = ({ id }: { id: string }) 
type Props={
  id:string;
  title:string;
  date:string;
  duration:string;
  rating:number;
  totalraters:number;
  genre:string[];
  overview:string;
  director:string;
  writers:string[];
  stars:string[]
}
export const Detail = ({ id,director,writers,stars}:Props) => {
  const [movie, setMovie]=useState<any>(null);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const[similar, setSimilar]=useState<any[]>([]);
  const [info, setInfo] = useState<any>(null);
  const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);

const formatRuntime = (minutes: number): string => {
 const h = Math.floor(minutes / 60);
 const m = minutes % 60;
 return `${h}h ${m}m`;
};

  useEffect(()=>{
  const movieImformation=async()=>{
   const data= await getMovieDetails(id);
    const trailer = await getMovieTrailer(id);
const similarMovie=await getSimilarMovie(id,page);
const movieInfo=await getstaffInfo(id);    
    setMovie(data)
    setTrailerKey(trailer)
    setSimilar(similarMovie)
     setTotalPages(similarMovie.total_pages);
    setInfo(movieInfo)
  }
  movieImformation();
   },[id,page]);


  if (!movie) {
  return <p className="p-4">Түр хүлээнэ үү...</p>;
}


  return <div className="px-[108px] ">
  {/* <Button variant="outline"  className="bg-red border" onClick={movieImformation}> click</Button> */}
<div className="flex justify-center  flex-col">

  <p className="font-bold text-[36px]">{movie.title}</p>
  <p>{movie.release_date}• PG •{formatRuntime(movie.runtime)}</p>

<div className="ml-[271px] lg:ml-[985px] ">
  <p className="text-sm">Rating</p>
  <div className="flex items-center"><p className="text-[30px]">⭐</p>
<div className="flex flex-col">
<p className="flex "><p className="font-bold">{movie.vote_average.toFixed(1)}</p>/10</p>
<p>{movie.vote_count}K</p></div>
</div>
</div>
</div>
      <div className="flex h-[428px]">
    <Card className="w-[290px]">
      <div className="relative  h-[233px] sm:h-[428px] overflow-hidden rounded-t-lg m-0 p-0">
           <Image 
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}

         alt="poster"
          fill 
          className="object-cover " />
      </div>
     </Card> 
     
<Card className="w-[760px] ml-[32px]">
      <div className="relative w-full h-[428px] sm:h-[500px] overflow-hidden rounded-lg">
        <iframe
       className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${trailerKey}`}
        title="Youtube trailer"
        allowFullScreen
        ></iframe>
      </div>
     </Card> </div>
     {/* MovieDescription */}
     <div className="flex flex-col justify-between gap-5">
     <div className="flex  gap-5 mt-[32px]">
      {movie.genres.map((genre: any)=>(
       <Button variant="outline" className="border rounded-full border-[#E4E4E7] bg-transparent" key={genre.id}>
            {genre.name}
           </Button>
         ))}
        </div>
        <div className="flex flex-col justify-between gap-5">   
          <p>{movie.overview}</p>
             <div className="flex gap-[53px] border-[#E4E4E7] border-b-2">  <p className="font-bold">Director </p><p className="text-[16px] ">{info?.director}</p></div>
             <div className="flex gap-[53px] border-[#E4E4E7] border-b-2">  <p className="font-bold">Writers </p><p>{info?.writers?.join("  •  ")}</p></div>
             <div className="flex gap-[53px]  border-[#E4E4E7] border-b-2">  <p className="font-bold">Stars </p><p>{info?.stars?.join(" •  ")}</p></div>
        </div>
</div>
       {/* more like this   |v*/}
       <div className="px-4 sm:px-6 py-6">
   <div className=" flex  justify-between">
                <h2 className="text-lg sm:text-2xl font-bold mb-4 px-2 sm:px-0">More like this</h2> 
                  <Button variant="ghost" className="border-nonne">See more<ArrowRight/></Button>
           </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols- lg:grid-cols-5 gap-4">
                    {similar.map((movie: any) => (
            <Cards
              key={movie.id}
              id={movie.id.toString()}
              PosterPath={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              VoteAverage={movie.vote_average.toFixed(1)}
              title={movie.title}
            />
          ))}
                 </div>
       </div>
    </div>;
};
