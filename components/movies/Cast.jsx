import Image from "next/image";

const Cast = ({ cast }) => {
  return (
    <>
      <div className="text-center">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
          alt={cast.name}
          className="w-24 h-24 rounded-full object-cover mb-2"
          width={200}
          height={200}
        />
        <p className="text-sm">{cast.name}</p>
      </div>
    </>
  );
};

export default Cast;
