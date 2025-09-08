// "use client";

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { searchMovie } from "@/hooks/SearchMovieApi";
// import Image from "next/image";
// import Link from "next/link";
// import { Card } from "@/components/ui/card";

// export default function SearchResultsPage() {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("query") || "";
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const fetchResults = async () => {
//       if (!query.trim()) return;
//       const movies = await searchMovie(query);
//       setResults(movies);
//     };

//     fetchResults();
//   }, [query]);

//   return (
//     <div className="px-4 sm:px-10 py-6 space-y-6">
//       <div>
//         <h1 className="text-xl font-semibold">
//           Results for: <span className="text-blue-500">"{query}"</span>
//         </h1>
//         <p className="text-sm text-muted-foreground">
//           {results.length} movie(s) found
//         </p>
//       </div>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//         {results.map((movie) => (
//           <Link href={`/movie/${movie.id}`} key={movie.id}>
//             <Card className="p-2 hover:shadow-lg transition rounded-md">
//               <div className="relative w-full h-[240px] rounded-md overflow-hidden">
//                 <Image
//                   src={PosterPath}
//                   alt={title}
//                   fill
//                   className="object-cover "
//                 />
//               </div>
//               <div className="mt-2 space-y-1">
//                 <p className="text-sm font-semibold line-clamp-1">
//                   {movie.title}
//                 </p>
//                 <p className="text-xs text-gray-500">
//                   ⭐ {movie.vote_average?.toFixed(1)}
//                 </p>
//               </div>
//             </Card>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
