"use client";
import Image from "next/image";
import { useState } from "react";
import SearchBar from "./SearchBar";

const SearchDialog = ({ onClose, onSelect }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovies = async (query) => {
    if (!query.trim()) {
      setResults([]);
      setError("");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `http://localhost:3000/api/movie/search?query=${encodeURIComponent(
          query
        )}`
      );
      const data = await res.json();
      setResults(data?.results || []);
    } catch (err) {
      console.error("Error fetching movies:", err);
      setError("Failed to fetch movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-zinc-900 p-6 rounded-lg w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Search Movie</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>
        <SearchBar onSearch={fetchMovies} />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <div className="max-h-96 overflow-y-auto mt-4">
          {loading && <p className="text-gray-400 text-center">Loading...</p>}
          {!loading &&
            results.map((movie) => (
              <div
                key={movie.id}
                className="p-2 hover:bg-zinc-800 cursor-pointer rounded flex"
                onClick={() =>
                  onSelect({
                    id: movie.id,
                    title: movie.title,
                    poster: movie.poster_path,
                    year: movie.release_date,
                  })
                }
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="w-12 h-18 object-cover rounded"
                  width={30}
                  height={30}
                />
                <div className="ml-4">
                  <h3 className="text-white">{movie.title}</h3>
                  <p className="text-sm text-gray-400">
                    {movie.release_date?.slice(0, 4)}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchDialog;
