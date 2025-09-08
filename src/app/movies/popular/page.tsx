import Link from "next/link";
import Image from "next/image";
import { getPopularApi } from "@/hooks/PopularApi";
import { Cards } from "../_components/Card";
import { useState } from "react";
import {
  GridSkeleton,
  SectionHeaderSkeleton,
} from "../_components/CardSkelton";
// Хэрэв та өөрийн Cards компонентыг ашиглах бол дараах импортын замаа төслийнхөө дагуу соль:

export default async function PopularPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = Number(searchParams.page ?? 1);
  const data = await getPopularApi(page);
  const movies = data?.results ?? [];
  const totalPages = Math.min(data?.total_pages ?? 1, 500); // TMDB 500 хүртэл

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-end justify-between mb-4">
        <h1 className="text-2xl font-bold">Popular</h1>
        <p className="text-sm text-muted-foreground">
          Page {page} of {totalPages} · {data?.total_results?.toLocaleString()}{" "}
          titles
        </p>
      </div>

      {/* Хэрэв та Cards компонентыг хэрэглэх бол доорх <div>–ийн оронд map дотор <Cards .../> тавь */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {movies.map((m: any) => (
          <Link key={m.id} href={`/details/${m.id}`} className="group">
            <div className="relative aspect-[2/3] overflow-hidden rounded">
              <Image
                src={
                  m.poster_path
                    ? `https://image.tmdb.org/t/p/w342${m.poster_path}`
                    : "/placeholder.png"
                }
                alt={m.title}
                fill
                className="object-cover transition-transform group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-2">
              <p className="font-medium line-clamp-1">{m.title}</p>
              <p className="text-xs text-muted-foreground">
                {Number(m.vote_average || 0).toFixed(1)}⭐ /10 ·{" "}
                {m.release_date?.slice(0, 4)}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {/* 
      {isLoading ? (
        <>
          <SectionHeaderSkeleton />
          <GridSkeleton count={10} />
        </>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 content-visibility-auto">
          {soonMovie.map((el) => (
            <Cards
              key={el.id}
              id={String(el.id)}
              PosterPath={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
              VoteAverage={Number(el.vote_average).toFixed(1)}
              title={el.title}
            />
          ))}
        </div>
      )} */}

      {/* Pagination: Prev  [1] [2] [3] ... Next */}
      <nav className="flex items-center gap-2 mt-8">
        {page > 1 && (
          <PageBtn href={`/movies/popular?page=${page - 1}`} label="Previous" />
        )}

        <PageNumber current={page} total={totalPages} />

        {page < totalPages && (
          <PageBtn href={`/movies/popular?page=${page + 1}`} label="Next" />
        )}
      </nav>
    </main>
  );
}

/* ---------- UI helpers ---------- */
function PageBtn({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="px-3 py-1 border rounded hover:bg-muted text-sm"
    >
      {label}
    </Link>
  );
}

function PageNumber({ current, total }: { current: number; total: number }) {
  // 1, current-1, current, current+1, total (эллипсис дагалдуулна)
  const pages = Array.from(
    new Set(
      [1, current - 1, current, current + 1, total].filter(
        (p) => p >= 1 && p <= total
      )
    )
  ).sort((a, b) => a - b);

  return (
    <>
      {pages.map((p, i) => (
        <span key={p} className="flex items-center">
          {i > 0 && pages[i - 1] !== p - 1 && (
            <span className="px-2 text-muted-foreground">…</span>
          )}
          <Link
            href={`/movies/popular?page=${p}`}
            className={`px-3 py-1 border rounded text-sm ${
              p === current
                ? "bg-primary text-primary-foreground border-primary"
                : "hover:bg-muted"
            }`}
          >
            {p}
          </Link>
        </span>
      ))}
    </>
  );
}
