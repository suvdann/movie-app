// Hero.tsx
"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { getHeroApi } from "@/hooks/HeroApi";
import { getMovieTrailer } from "@/hooks/MovieTrailerApi";
import { ComContent } from "./ComContent";
import { HeroSkeleton } from "./CardSkelton";
import { MobileContent } from "./MobileContent";

const YouTube = dynamic(() => import("react-youtube"), { ssr: false });

type UpcomingMovies = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  overview: string;
  vote_average: number;
};

export const Hero = () => {
  const [upcoming, setUpcoming] = useState<UpcomingMovies[]>([]);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [loadingTrailer, setLoadingTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState<string | undefined>(undefined);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const response = await getHeroApi();
        const firstFive = response?.results?.slice(0, 5) ?? [];
        if (mounted) setUpcoming(firstFive);
      } finally {
        if (mounted) setIsLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleWatchTrailer = async (movieId: number) => {
    try {
      setLoadingTrailer(true);
      const key = await getMovieTrailer(String(movieId));
      setTrailerKey(key || undefined);
      setIsTrailerOpen(true);
    } finally {
      setLoadingTrailer(false);
    }
  };

  const closeTrailer = () => {
    setIsTrailerOpen(false);
    setTrailerKey(undefined);
  };

  if (isLoading) {
    return <HeroSkeleton />;
  }

  return (
    <div className="w-full">
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 4000 })]}
        className="relative w-full"
        setApi={setApi}
      >
        <CarouselContent className="-ml-0">
          {upcoming.map((el) => (
            <CarouselItem key={el.id} className="pl-0">
              <div className="relative h-[246px] w-full lg:h-[600px]">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
                  alt={el.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  // skeleton-аас шилжих үед дүрсний ачаалалт илүү зөөлөн
                  placeholder="empty"
                  priority
                />
                <div className="hidden lg:block absolute z-10 p-4 space-y-3 top-[100px] left-[120px]">
                  <ComContent
                    id={el.id}
                    title={el.title}
                    vote_average={el.vote_average.toFixed(1)}
                    overview={el.overview}
                    onWatchTrailer={() => handleWatchTrailer(el.id)}
                  />
                </div>
              </div>
              <div className="block lg:hidden sm:h-[260px]">
                <MobileContent
                  title={el.title}
                  vote_average={el.vote_average.toFixed(1)}
                  overview={el.overview}
                  onWatchTrailer={() => handleWatchTrailer(el.id)}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden lg:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 w-[40px] h-[40px] items-center justify-center" />
        <CarouselNext className="hidden lg:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 w-[40px] h-[40px] items-center justify-center" />

        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 z-20 flex items-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                current === i
                  ? "bg-white shadow-[0_0_0_2px_rgba(0,0,0,0.25)]"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </Carousel>

      {isTrailerOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
          onClick={closeTrailer}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeTrailer}
              className="absolute top-2 right-2 z-[110] rounded-md bg-white/80 px-2 py-1 text-sm hover:bg-white"
            >
              Close
            </button>
            {!trailerKey && (
              <div className="absolute inset-0 grid place-items-center text-white/90 text-sm">
                {loadingTrailer
                  ? "Loading trailer..."
                  : "Trailer not available"}
              </div>
            )}
            {trailerKey && (
              <div className="absolute inset-0">
                <YouTube
                  videoId={trailerKey}
                  className="w-full h-full"
                  opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: { autoplay: 1 },
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
