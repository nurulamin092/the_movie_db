import Image from "next/image";
import Link from "next/link";

const Cast = ({ cast }) => {
  const wikipediaBaseURL = "https://en.wikipedia.org/wiki/";
  const castWikiLink = `${wikipediaBaseURL}${cast.name.replace(/ /g, "_")}`;
  return (
    <>
      <div className="text-center">
        <Link href={castWikiLink}>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
            alt={cast.name}
            className="w-24 h-24 rounded-full object-cover mb-2"
            width={200}
            height={200}
          />
          <p className="text-sm">{cast.name}</p>
        </Link>
      </div>
    </>
  );
};

export default Cast;
