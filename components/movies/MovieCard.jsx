import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movie }) => {
  return (
    <>
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`Poster of ${movie.title}`}
          className="w-full rounded-lg"
          height={200}
          width={200}
        />
      </Link>
    </>
  );
};

export default MovieCard;
