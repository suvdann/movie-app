"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import { getHeroApi } from "@/hooks/HeroApi";
import { useEffect, useState } from "react";
import { ComContent } from "./ComContent";

import { MobileContent } from "./MobileContent";

import Autoplay from "embla-carousel-autoplay";
import { getUpcomingApi } from "@/hooks/UpcomingApi";

interface SlideItem {
  src: string;
  title: string;
  rating: string;
  overview: string;
}

interface HeroProps {
  current: number;
  count: number;
}
type UpcomingMovies = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  overview: string;
  vote_average: string;
};
export const Hero = ({ current, count }: HeroProps) => {
  const [upcoming, setUpcoming] = useState<UpcomingMovies[]>([]);
  useEffect(() => {
    const nowPlaying = async () => {
      const response = await getHeroApi();
      const firstFive = response?.results.splice(0, 5);
      setUpcoming(firstFive);
    };
    nowPlaying();
  }, []);
  // console.log(upcoming, "upcoming");

  return (
    <div className="w-full   ">
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 4000 })]}
        className=" w-full "
      >
        <CarouselContent>
          {upcoming.map((el, index) => (
            <CarouselItem key={index} className=" ">
              <div className="relative w-full lg:h-[1000px]    sm:h-[600px]">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
                  alt={el.title}
                  fill
                  className="object-cover  "
                />

                {/* gradient */}
                <div className="sm:hidden  absolute inset-0  z-10"></div>

                <div className="  hidden lg:block lg:absolute lg:z-10  lg:p-4 lg:space-y-3  lg:top-[100px]  lg:h-fit lg:justify-center lg:items-center ">
                  <ComContent
                    title={el.title}
                    vote_average={Number(el.vote_average).toFixed(1)}
                    overview={el.overview}
                  />
                </div>
              </div>
              {/* Text content */}

              <div className=" block lg:hidden sm:relative sm:h-[260px]">
               
                <MobileContent
                  title={el.title}
                  vote_average={Number(el.vote_average).toFixed(1)}
                  overview={el.overview}
                />
                
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:block absolute  top-1/2 left-3 z-20" />
        <CarouselNext className="hidden sm:block absolute top-1/2 right-3 z-20" />
      </Carousel>
    </div>
  );
};
