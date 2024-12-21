"use client";

import { useState } from "react";
import SearchDialog from "./SearchDialog";

const MovieSlot = ({ onRemove }) => {
  const [movie, setMovie] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSelectMovie = (selectedMovie) => {
    setMovie(selectedMovie);
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className="bg-zinc-900 rounded-lg p-4 flex flex-col min-h-[400px]">
        <div className="flex justify-end mb-4">
          <button onClick={onRemove} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>
        <div className="flex-grow flex flex-col items-center justify-center">
          {!movie ? (
            <button
              className="bg-zinc-800 text-white px-6 py-3 rounded hover:bg-zinc-700 transition-colors"
              onClick={() => setIsDialogOpen(true)}
            >
              Select Movie
            </button>
          ) : (
            <div className="text-center">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
                alt={movie.title}
                className="w-full rounded-lg mb-4 object-contain max-h-64"
              />
              <h2 className="text-xl font-bold">{movie.title}</h2>
              <p className="text-gray-400">{movie.year}</p>
            </div>
          )}
        </div>
      </div>
      {isDialogOpen && (
        <SearchDialog
          onClose={() => setIsDialogOpen(false)}
          onSelect={handleSelectMovie}
        />
      )}
    </>
  );
};

export default MovieSlot;
