import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { title } from "process";

type Upcoming = {
  title: string;
  vote_average: string;
  overview: string;
};
export const ComContent = ({ title, vote_average, overview }: Upcoming) => {
  return (
    <div className="h-[264px] text-white flex flex-col gap-3 ">
      <p className="text-sm text-base ">Now Playing:</p>

      <h1 className="text-xl text-4xl font-bold ">{title}</h1>
      <p className="text-sm">⭐{vote_average}/10</p>

      <p className="text-sm  w-[302px]    ">{overview}</p>


        <Button
          variant="default"
          className="bg-[white]  hover:bg-gray-300 hover:text-black text-secondary-foreground text-sm w-fit px-4 py-2 rounded-md flex items-center gap-2"
        >
          <Play className="w-4 h-4 " />
          Watch Trailer
        </Button>
      {/* <button
        className="text-black bg-grey-200 bg-gradient-to-b border border-white hover:bg-gray-500 hover:text-white w-fit  text-sm px-4 py-2 rounded-md flex items-center gap-2"
         
      >
        <Play className="w-5 h-5 " />
        Watch Trailer
      </button> */}
 
    </div>
  );
};
