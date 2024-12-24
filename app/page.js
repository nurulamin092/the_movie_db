import MovieCategorySection from "@/components/movies/MovieCategorySection";
import Hero from "@/components/shared/Hero";

export default async function Home() {
  let nowPlaying = [];
  let popular = [];
  let topRated = [];
  let error = null;

  try {
    const [nowPlayingRes, popularRes, topRatedRes] = await Promise.all([
      fetch("${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/now-playing"),
      fetch("${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/popular"),
      fetch("${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/top-rated"),
    ]);

    if (!nowPlayingRes.ok || !popularRes.ok || !topRatedRes.ok) {
      throw new Error("Failed to fetch one or more movie categories.");
    }

    nowPlaying = await nowPlayingRes.json();
    popular = await popularRes.json();
    topRated = await topRatedRes.json();
  } catch (err) {
    error = err.message;
  }

  return (
    <>

      {nowPlaying.results && nowPlaying.results.length > 0 ? (
        <Hero movies={nowPlaying.results} />
      ) : (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Now Playing</h2>
          <p className="text-red-500">No now playing movies available.</p>
        </section>
      )}

      {/* Render movie categories */}
      <MovieCategorySection title="Now Playing" movies={nowPlaying.results || []} />
      <MovieCategorySection title="Popular Movies" movies={popular.results || []} />
      <MovieCategorySection title="Top Rated Movies" movies={topRated.results || []} />
    </>
  );
}
