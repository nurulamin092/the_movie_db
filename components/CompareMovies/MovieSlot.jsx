"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SearchDialog from "./SearchDialog";

const MovieSlot = ({ onRemove }) => {
  const [movie, setMovie] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieDetails = async (movieId) => {
    try {
      const res = await fetch(`http://localhost:3000/api/movie/${movieId}`);
      if (!res.ok) {
        throw new Error("Failed to fetch movie details.");
      }
      const data = await res.json();
      return data;
    } catch (err) {
      console.error("Error fetching movie details:", err);
      throw new Error("Could not fetch movie details.");
    }
  };
  const handleSelectMovie = async (selectedMovie) => {
    setLoading(true);
    setError(null);
    try {
      const detailedMovie = await fetchMovieDetails(selectedMovie.id);
      setMovie({
        ...selectedMovie,
        ...detailedMovie,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setIsDialogOpen(false);
    }
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
          {loading && <p className="text-gray-400">Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!movie && !loading && !error && (
            <button
              className="bg-zinc-800 text-white px-6 py-3 rounded hover:bg-zinc-700 transition-colors"
              onClick={() => setIsDialogOpen(true)}
            >
              Select Movie
            </button>
          )}
          {movie && !loading && !error && (
            <div className="grid grid-cols-5 gap-8">
              <div className="col-span-2 h-full">
                <Link href={`/movie/${movie.id}`}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
                    alt={movie.title}
                    className="w-full rounded-lg mb-4 object-contain max-h-full"
                    width={300}
                    height={300}
                  />
                  <h2 className="text-xl font-bold mb-2 text-center">
                    {movie.title}
                  </h2>
                </Link>
              </div>

              <div className="w-full space-y-4 col-span-3">
                <div className="bg-zinc-800 p-3 rounded">
                  <span className="text-gray-400">Rating:</span>
                  <span className="float-right">{movie.vote_average}/10</span>
                </div>
                <div className="bg-zinc-800 p-3 rounded">
                  <span className="text-gray-400">Release Year:</span>
                  <span className="float-right">{movie.release_date}</span>
                </div>
                <div className="bg-zinc-800 p-3 rounded">
                  <span className="text-gray-400">Runtime:</span>
                  <span className="float-right">
                    {movie.runtime ? `${movie.runtime} min` : "N/A"}
                  </span>
                </div>
                <div className="bg-zinc-800 p-3 rounded">
                  <span className="text-gray-400">Budget:</span>
                  <span className="float-right">
                    {movie.budget
                      ? `$${(movie.budget / 1_000_000).toFixed(2)}M`
                      : "N/A"}
                  </span>
                </div>
                <div className="bg-zinc-800 p-3 rounded">
                  <span className="text-gray-400">Revenue:</span>
                  <span className="float-right">
                    {movie.revenue
                      ? `$${(movie.revenue / 1_000_000).toFixed(2)}M`
                      : "N/A"}
                  </span>
                </div>
                <div className="bg-zinc-800 p-3 rounded">
                  <span className="text-gray-400">Genres:</span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {movie.genres?.map((genre) => (
                      <span
                        key={genre.id}
                        className="bg-gray-700 text-white px-2 py-1 rounded"
                      >
                        {genre.name}
                      </span>
                    )) || "N/A"}
                  </div>
                </div>
              </div>
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
