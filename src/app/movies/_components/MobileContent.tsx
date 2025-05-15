import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";


  type Upcoming={
title:string,
vote_average:string,
overview: string ;
  }
  export const MobileContent=({title, vote_average, overview}:Upcoming)=>{
  return(      
     <div className=" ">
        <p className="text-sm text-base ">Now Playing:</p>
         <div className=" flex justify-between ">
        <h1 className="text-xl text-4xl font-bold ">{title}</h1>
        <p className="text-sm">⭐{vote_average}/10</p>
        </div>
          

        <p className="text-sm  w-[302px] h-[80px]   ">{overview}</p>

        <Button
          variant="outline"
          className="bg-white text-black text-sm px-4 py-2 rounded-md flex items-center gap-2"
        >
          <Play className="w-4 h-4 " />
          Watch Trailer
        </Button>
      
    </div>
       ) }