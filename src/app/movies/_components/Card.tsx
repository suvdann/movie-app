import Image from "next/image";
import { Card } from "@/components/ui/card";

import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

interface MovieCard {
  title: string;
  PosterPath: string;
  VoteAverage: string;
  id: string;
}

export const Cards = ({ title, PosterPath, VoteAverage, id }: MovieCard) => {
  return (
    <Link href={`/details/${id}`}>
      <Skeleton />
      <Card className="w-full h-[309px] lg:h-[439px]">
        <div className="relative w-full h-[229px] sm:h-[340px] overflow-hidden rounded-t-lg m-0 p-0">
          <Image src={PosterPath} alt={title} fill className="object-cover " />
        </div>
        <div className="p-2 space-y-1 ">
          <p className="text-sm ">⭐ {VoteAverage}/10</p>
          <p className="text-[16px] md:text-[18px] font-semibold ">{title}</p>
        </div>
      </Card>
    </Link>
  );
};
