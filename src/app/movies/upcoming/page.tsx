import Link from "next/link";
import Image from "next/image";
import { getUpcomingApi } from "@/hooks/UpcomingApi";

export default async function UpcomingPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const sp = await searchParams; // ← await хийж авна
  const page = Number(sp.page ?? 1);

  const data = await getUpcomingApi(page);
  const movies = data?.results ?? [];
  const totalPages = Math.min(data?.total_pages ?? 1, 500); // TMDB: 500 хүртэл

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-end justify-between mb-4">
        <h1 className="text-2xl font-bold">Upcoming</h1>
        <p className="text-sm text-muted-foreground">
          Page {page} of {totalPages} · {data?.total_results?.toLocaleString()}{" "}
          titles
        </p>
      </div>

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

      {/* Pagination */}
      <nav className="flex items-center gap-2 mt-8">
        {page > 1 && (
          <PageBtn
            href={`/movies/upcoming?page=${page - 1}`}
            label="Previous"
          />
        )}

        <PageNumber current={page} total={totalPages} />

        {page < totalPages && (
          <PageBtn href={`/movies/upcoming?page=${page + 1}`} label="Next" />
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
            href={`/movies/upcoming?page=${p}`}
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
