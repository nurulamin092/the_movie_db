"use client";
import { useState } from "react";

const MovieSearchBar = ({ onSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query) return;
    const response = await fetch(
      `/api/movie/search?query=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    if (!data.error) onSearchResults(data);
  };
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
        <div className="bg-zinc-900 p-6 rounded-lg w-full max-w-2xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Search Movie </h2>
            <button className="text-gray-400 hover:text-white">✕</button>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type movie name"
              className="w-full bg-zinc-800 text-white px-4 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button
              onClick={handleSearch}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieSearchBar;
