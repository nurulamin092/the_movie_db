import Image from "next/image";
import Cast from "./Cast";
import Genres from "./Genres";
import ShareSection from "./ShareSection";
import WatchList from "./WatchList";

const MovieDetails = ({ movie }) => {
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
            alt={movie?.title}
            className="w-full h-full object-cover"
            width={200}
            height={200}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70"></div>
        </div>

        <div className="relative container mx-auto px-4 pt-32">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <Image
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                alt={movie?.title}
                className="w-full rounded-lg shadow-lg"
                width={500}
                height={500}
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
              <Genres movie={movie} />

              <div className="mb-6">
                <h3 className="text-gray-400 mb-2">Cast</h3>
                <div className="flex flex-wrap gap-4">
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
                <WatchList />
              </div>
              <div className="mb-6">
                <h3 className="text-gray-400 mb-2">Share on social media</h3>
                <ShareSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
