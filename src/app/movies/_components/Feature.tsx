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
import Image from "next/image";

interface SlideItem {
  src: string;
  title: string;
  rating: string;
  overview: string;
}

interface FeatureProps {
  setApi: (api: any) => void;
  slide: SlideItem[];
  current: number;
  count: number;
}
export const Feature = ({ setApi, slide, current, count }:FeatureProps) => {
  return (
    <div className="mx-auto mt-[10px] w-full h-[600px]">
      <Carousel setApi={setApi} className=" w-full h-[600px]">
        <CarouselContent>
          {Array.isArray(slide) &&
  slide.map((el, index) => (
    <CarouselItem key={index} className="relative w-full h-[600px]">
      {/* Зураг */}
      <Image
        src={el.src}
        alt="carouselImage"
        fill
        style={{ objectFit: "cover" }}
        className="rounded-md z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>

      {/* Text content */}
      <div className="absolute z-99 left-12 top-1/2 -translate-y-1/2 max-w-[500px] text-white space-y-4">
        <p className="text-sm opacity-80">Now Playing</p>
        <h1 className="text-4xl font-bold">{el.title}</h1>

        <div className="absolute z-20 flex items-center gap-2">
          <p>⭐</p>
          <p className="text-lg">{el.rating}/10</p>
        </div>

        <p className="text-sm w-[302px] h-[80px] mb-[16px] ">{el.overview}</p>

        <Button
          variant="outline"
          className="bg-white text-black hover:bg-gray-100 flex items-center gap-2"
        >
          <Play className="w-4 h-4 bg-red" />
          Watch Trailer
        </Button>
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

