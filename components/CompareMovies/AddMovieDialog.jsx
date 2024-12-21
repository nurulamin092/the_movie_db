"use client";

import { useState } from "react";
import MovieSearchBar from "./MovieSearchBar";

const AddMovieDialog = ({ onSelectMovie }) => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (data) => {
    if (Array.isArray(data.results)) {
      setSearchResults(data.results);
    } else {
      console.error("Unexpected API response:", data);
      setSearchResults([]);
    }
  };

  return (
    <div className="flex items-center gap-4 p-2 hover:bg-zinc-800 cursor-pointer rounded">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Select a Movie</h2>
        <MovieSearchBar onSearchResults={handleSearchResults} />
        <div className="mt-4">
          {Array.isArray(searchResults) &&
            searchResults.map((movie) => (
              <div
                key={movie.id}
                onClick={() => onSelectMovie(movie)}
                className="cursor-pointer p-2 hover:bg-gray-100 rounded-md"
              >
                {movie.title} ({movie.release_date})
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AddMovieDialog;
