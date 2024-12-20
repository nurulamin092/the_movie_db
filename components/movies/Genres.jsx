import React from "react";

const Genres = ({ movie }) => {
  return (
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
  );
};

export default Genres;
