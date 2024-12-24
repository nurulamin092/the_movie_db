"use client";

import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const MoreLikeThis = ({ movieId }) => {
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedMovies = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/movie/${movieId}/similar`,
          {
            cache: "no-store",
          }
        );
        const movies = await response.json();
        setRelatedMovies(movies);
      } catch (error) {
        console.error("Error fetching related movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedMovies();
  }, [movieId]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">More Like This</h2>

      <div className="flex space-x-4 overflow-x-auto pb-4">
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 h-[288px] rounded-lg bg-zinc-800 relative cursor-pointer"
            >
              <div className="animate-pulse absolute inset-0 w-full h-full bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-[length:200%_100%]"></div>
            </div>
          ))
        ) : relatedMovies.length ? (
          relatedMovies.map((movie) => (
            <div
              key={movie.id}
              className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform"
            >
              <MovieCard movie={movie} />
            </div>
          ))
        ) : (
          <p className="text-gray-400">No related movies found.</p>
        )}
      </div>
    </div>
  );
};

export default MoreLikeThis;
