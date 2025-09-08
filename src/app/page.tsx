"use client";

import { Hero } from "./movies/_components/Hero";
import { PopularMovies } from "./movies/_components/PopularMovies";
import { TopRatedMovies } from "./movies/_components/TopRatedMovies";
import { UpcomingMovies } from "./movies/_components/UpcomingMovies";

const Home = () => {
  return (
    <div className="w-full ">
      <Hero />

      <div className="lg:px-20">
        <UpcomingMovies />
        <PopularMovies />
        <TopRatedMovies />
      </div>
    </div>
  );
};
export default Home;
