// import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play } from "lucide-react";
// import { Play } from "lucide-react";

import Image from "next/image";
export const Feature = ({ setApi, slide, current, count }) => {
  return (
    <div className="mx-auto mt-[10px] w-full h-[600px]">
      <Carousel setApi={setApi} className=" w-full h-[600px]">
        <CarouselContent>
          {slide.map((el, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center"
            >
              <div className="relative w-full h-[600px] p-0">
                <Image
                  src={el.src}
                  alt="carsouselImage"
                  fill
                  objectFit="cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-3 z-2" />
        <CarouselNext className="absolute top-1/2 right-3 z-2" />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
};

// {/* Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

//   {/* Content */}
//   <div className="relative z-10 h-full flex items-center px-12">
//     <div className="max-w-[500px] text-white space-y-4">
//       <p className="text-sm opacity-80">Now Playing</p>
//       <h1 className="text-4xl font-bold">Gladiator II</h1>

//       <div className="flex items-center gap-2">
//          <p>⭐</p>
//         <p className="text-lg">6.9/10</p>
//       </div>

//       <p className="text-sm opacity-90">
//         After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is
//         forced to enter the Colosseum and must look to his past to find strength to return the
//         glory of Rome to its people.
//       </p>

//       <Button variant="outline" className="bg-white text-black hover:bg-gray-100">
//       <Play/>
//             <p>Watch Trailer</p>

//       </Button>
//     </div>
//   </div>

{
  /* <div className="mx-auto mt-[10px] w-full h-[600px]">
      <Carousel setApi={setApi} className=" w-full h-[600px]">
        <CarouselContent>
          {slide.map((el, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center"
            >
              <div className="relative w-full h-[600px] p-0">
                <Image
                  src={el.src}
                  alt="carsouselImage"
                  fill
                  objectFit="cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-3 z-2" />
        <CarouselNext className="absolute top-1/2 right-3 z-2" />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div> */
}
