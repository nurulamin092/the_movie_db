import React from "react";

const MovieTitle = ({ movie }) => {
  return (
    <div className="mt-2">
      <h3 className="text-light text-sm font-bold truncate">{movie.title}</h3>
      <p className="text-primary text-xs">{movie.release_date}</p>
    </div>
  );
};

export default MovieTitle;
