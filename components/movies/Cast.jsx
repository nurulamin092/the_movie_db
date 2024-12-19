const Cast = ({ cast }) => {
  return (
    <>
      <div class="text-center">
        <img
          src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
          alt={cast.name}
          class="w-24 h-24 rounded-full object-cover mb-2"
        />
        <p class="text-sm">{cast.name}</p>
      </div>
    </>
  );
};

export default Cast;
