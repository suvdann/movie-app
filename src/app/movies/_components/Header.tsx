import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";

// import { select } from "@radix-ui/react-select"
import { Moon } from "lucide-react";
const Header = () => {
  return (
    <div className="flex">
      <div className="flex justify-center items-center">
        <div className="border">
          <NavigationMenu></NavigationMenu>
        </div>
        <Input className="w-[379px] " placeholder="search..."></Input>
      </div>
      <Button className="bg-white ">
        <Moon />
      </Button>
    </div>
  );
};
export default Header;
