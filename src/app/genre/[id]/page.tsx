import Image from "next/image";
import Link from "next/link";
import { getMoviesByGenre } from "@/hooks/GenreApi";
import { getSearchByGenre } from "@/hooks/GetSearchByGenre";
import { ChevronRight } from "lucide-react"; // ⬅️ ChevronDown-ийг устгав

export default async function GenrePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>; // ⬅️ Promise
  searchParams: Promise<{ page?: string; name?: string }>; // ⬅️ Promise
}) {
  const { id: genreId } = await params; // ⬅️ await
  const sp = await searchParams; // ⬅️ await

  const page = Number(sp.page ?? 1);
  const name = sp.name ?? "Genre";

  const [genresData, moviesData] = await Promise.all([
    getSearchByGenre(),
    getMoviesByGenre(genreId, page),
  ]);

  const genres = genresData?.genres ?? [];
  const movies = moviesData?.results ?? [];

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-5">Search filter</h1>

      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
        {/* LEFT */}
        <div>
          <p className="font-semibold text-2xl">Genres</p>
          <p className="text-sm text-muted-foreground mb-4">
            See list of movies by genre
          </p>
          <div className="flex flex-wrap gap-2 w-[387px] overflow-auto">
            {genres.map((g: any) => (
              <Link
                key={g.id}
                href={`/genre/${g.id}?name=${encodeURIComponent(g.name)}`}
              >
                <span
                  className={`inline-flex items-center rounded-full border px-3 h-[28px] text-sm cursor-pointer
                    ${
                      String(g.id) === genreId
                        ? "bg-primary text-primary-foreground border-primary"
                        : "hover:bg-muted"
                    }`}
                >
                  {g.name}
                  <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="block lg:border" />

        {/* RIGHT */}
        <section>
          <p className="mb-4 text-sm">
            {moviesData?.total_results?.toLocaleString()} titles in “{name}”
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
          <div className="flex items-center gap-2 mt-8">
            {page > 1 && (
              <PageBtn
                href={`/genre/${genreId}?name=${encodeURIComponent(
                  name
                )}&page=${page - 1}`}
                label="Previous"
              />
            )}
            <span className="text-sm">Page {page}</span>
            {page < (moviesData?.total_pages ?? 1) && (
              <PageBtn
                href={`/genre/${genreId}?name=${encodeURIComponent(
                  name
                )}&page=${page + 1}`}
                label="Next"
              />
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

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
