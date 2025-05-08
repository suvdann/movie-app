import { Film } from "lucide-react";
import Header from "./_components/Header";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="h-screen w-screen ">
      <div className="w-[1440px] flex items-center justify-center justify-between items-between">
        <h1 className="flex items-center text-indigo-700 text-[20px] font-bold">
          <Film />
          Movie Z
        </h1>
        <Header />
      </div>

      <Button className="bg-white hover:opacity-0.1">Watch Trailer</Button>
    </div>
  );
};
export default Home;
