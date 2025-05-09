import { Button } from "@/components/ui/button";
import { Header } from "./_components/Header";
import { Feature } from "./_components/Feature";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-gray-50">
      <Header />
      <div className="px-6 mt-10">
        <Feature/>
      
      </div>
    </div>
  );
};

export default Home;
