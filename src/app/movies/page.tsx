"use client";

import { Hero } from "./_components/Hero";

import { UpcomingMovies } from "./_components/UpcomingMovies";
import { PopularMovies } from "./_components/PopularMovies";
import { TopRatedMovies } from "./_components/TopRatedMovies";

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
