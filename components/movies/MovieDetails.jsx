import { AddedIcon, AddIcon } from "../ui/UiIcon";
import Cast from "./Cast";

const MovieDetails = ({ movie }) => {
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
            alt={movie?.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70"></div>
        </div>

        <div className="relative container mx-auto px-4 pt-32">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img
                // src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                alt={movie?.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-4">{movie?.title}</h1>
              <div className="flex items-center mb-4 space-x-4">
                <span className="text-green-500">{movie?.release_date}</span>
                <span>|</span>
                <span>{movie?.runtime} min</span>
              </div>
              <p className="text-lg mb-6">{movie?.overview}</p>
              {/* Genres */}
              <div className="mb-6">
                <h3 className="text-gray-400 mb-2">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {movie.genres?.length ? (
                    movie.genres.map((genre) => (
                      <span
                        key={genre.id}
                        className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                      >
                        {genre.name}
                      </span>
                    ))
                  ) : (
                    <span>No genres available</span>
                  )}
                </div>
              </div>
              <div class="mb-6">
                <h3 class="text-gray-400 mb-2">Cast</h3>
                <div class="flex flex-wrap gap-4">
                  {movie.cast?.length ? (
                    movie.cast
                      .slice(0, 5)
                      .map((cast) => <Cast key={cast.id} cast={cast} />)
                  ) : (
                    <span>No cast information available</span>
                  )}
                </div>
              </div>

              {/* Watch List Buttons */}
              <div className="mb-6">
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg">
                    <AddIcon />
                    Add to Watch List
                  </button>
                  <button className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg text-green-600">
                    <AddedIcon />
                    Added to Watch List
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
