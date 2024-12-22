import React from "react";

const MovieTitle = ({ movie }) => {
  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";
  return (
    <div className="mt-2">
      <h3 className="text-light text-sm font-bold truncate">{movie.title}</h3>
      <p className="text-primary text-xs">{releaseYear}</p>
    </div>
  );
};

export default MovieTitle;
