import MovieCard from "./MovieCard";
import MovieTitle from "./MovieTitle";

export const MovieCategorySection = ({ title, movies }) => {
  return (
    <>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform"
            >
              <MovieCard movie={movie} />
              {title === "Now Playing" && <MovieTitle movie={movie} />}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MovieCategorySection;
