import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
        <Link href={`/movie/${movie.id}`}>
          <Image
            // src={movie.poster_path}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`Poster of ${movie.title}`}
            // alt={movie.title}
            className="w-full rounded-lg"
            height={200}
            width={200}
          />
          <div className="mt-2">
            <h3 className="text-light text-sm font-bold truncate">
              {movie.title}
            </h3>
            <p className="text-primary text-xs">{movie.release_date}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
