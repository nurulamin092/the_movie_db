import Link from "next/link";
import Image from "next/image";

const MovieSearchResult = ({ searchResults, query, error }) => {
  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <main className="container mx-auto px-4 pt-24 pb-8">
          <h1 className="text-2xl font-bold mb-4">
            Search Results for {`"${query}"`}
          </h1>
          {error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : searchResults.results && searchResults.results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {searchResults.results.map((movie) => (
                <Link
                  href={`/movie/${movie.id}`}
                  key={movie.id}
                  className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform"
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full aspect-[2/3] object-cover"
                    width={300}
                    height={300}
                  />
                  <div className="p-4">
                    <h3 className="font-bold mb-2">{movie.title}</h3>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>{movie.release_date?.split("-")[0]}</span>
                      <span>⭐ {movie.vote_average}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">
              No results found for {`"${query}"`}.
            </p>
          )}
        </main>
      </div>
    </>
  );
};

export default MovieSearchResult;
