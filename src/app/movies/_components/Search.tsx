import * as React from "react";

import { Button } from "@/components/ui/button";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function MovileSearch() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <Drawer open={open} direction="top" onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline" className=" block lg:hidden ">
            <Search />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <Input placeholder="search" />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
