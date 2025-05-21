"use client"
import { useEffect, useState } from "react";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";

import { MovieFooter } from "./_components/Footer";
import { UpcomingMovies } from "./_components/UpcomingMovies";
import { PopularMovies } from "./_components/PopularMovies";
import { TopRatedMovies } from "./_components/TopRatedMovies";
// import {  MobileHero } from "./_components/Mobile";


const Home = () => {
 return (
    <div className="w-full ">
      <div className=" mt-10 ">
          <Hero
            current={1}
            count={5}
          />
        
      </div>
<div className="px-8">
<UpcomingMovies/>
<PopularMovies/>
<TopRatedMovies/></div>
      {/* <MovieFooter /> */}
    </div>
  );
};

export default Home;