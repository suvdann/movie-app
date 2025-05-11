"use client"
import { useState } from "react";
import { Header } from "./_components/Header";
import { Feature } from "./_components/Feature";
import { Card } from "./_components/Card";

const Home = () => {
    const slide = [
    {
      src: "/Wicked.png",
      title: "Wicked",
      rating: "6.9",
      overview:
        "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads.  ",
    },
    {
      src: "/Gladiator.png",
      title: "Gradiator ",
      rating: "6.9",
      overview:
        "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.",
    },
    {
       src: "/Moana.png",
      title: "Moana 2 ",
      rating: "6.9",
      overview:
      "After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced."
    },
  ];
  
  const [api, setApi] = useState(null);

  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="px-6 mt-10">
        <Feature
          setApi={setApi}
          slide={slide}
          current={1} // default
          count={slide.length}
        />
      </div>
      <Card/>
    </div>
  );
};

export default Home;
