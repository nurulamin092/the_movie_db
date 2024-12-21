"use client";

import { useState } from "react";

const SearchDialog = ({ onClose, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError("Please enter a valid movie name.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `http://localhost:3000/api/movie/search?query=${encodeURIComponent(
          searchTerm
        )}`
      );
      const data = await res.json();
      setResults(data?.results || []); // Ensure results is an array
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError("Failed to fetch movies. Please try again later.");
      setResults([]);
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
        <input
          type="text"
          placeholder="Type movie name..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setError("");
          }}
          className="w-full bg-zinc-800 text-white px-4 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button
          onClick={handleSearch}
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors w-full"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <div className="max-h-96 overflow-y-auto mt-4">
          {loading && (
            <div className="text-gray-400 text-center">Loading...</div>
          )}

          {!loading && results.length > 0
            ? results.map((movie) => (
                <div
                  key={movie.id}
                  className="flex items-center gap-4 p-2 hover:bg-zinc-800 cursor-pointer rounded"
                  onClick={() =>
                    onSelect({
                      title: movie.title,
                      poster: movie.poster_path,
                      year: movie.release_date?.split("-")[0],
                    })
                  }
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.title}
                    className="w-16 h-24 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-bold">{movie.title || "No Title"}</h3>
                    <p className="text-sm text-gray-400">
                      {movie.release_date?.split("-")[0] || "Unknown Year"}
                    </p>
                  </div>
                </div>
              ))
            : !loading && (
                <div className="text-gray-400 text-center">
                  {results.length === 0 && !error
                    ? "No results found."
                    : error || "An unexpected error occurred."}
                </div>
              )}
        </div>
      </div>
    </div>
  );
};

export default SearchDialog;
