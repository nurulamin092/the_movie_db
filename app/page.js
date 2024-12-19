import MovieCard from "@/components/movies/MovieCard";

export default async function Home() {
  try {
    const [nowPlayingRes, popularRes, topRatedRes] = await Promise.all([
      fetch("http://localhost:3000/api/movies/now-playing", { cache: "no-store" }),
      fetch("http://localhost:3000/api/movies/popular", { cache: "no-store" }),
      fetch("http://localhost:3000/api/movies/top-rated", { cache: "no-store" }),
    ]);

    if (!nowPlayingRes.ok || !popularRes.ok || !topRatedRes.ok) {
      throw new Error("Failed to fetch one or more movie categories.");
    }

    const nowPlaying = await nowPlayingRes.json();
    const popular = await popularRes.json();
    const topRated = await topRatedRes.json();

    return (
      <>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Now Playing</h2>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {nowPlaying.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Popular Movies</h2>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {popular.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Top Rated Movies</h2>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {topRated.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </>
    );
  } catch (error) {
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Error</h2>
        <p className="text-red-500">Failed to load movies: {error.message}</p>
      </section>
    );
  }
}
