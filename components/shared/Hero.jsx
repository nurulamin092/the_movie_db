"use client";

import { useState, useEffect } from "react";

const Hero = ({ movies }) => {
  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    if (movies && movies.length > 0) {
      const getRandomMovie = () => {
        const randomIndex = Math.floor(Math.random() * movies.length);
        setCurrentMovie(movies[randomIndex]);
      };

      getRandomMovie();

      const interval = setInterval(getRandomMovie, 10000);

      return () => clearInterval(interval);
    }
  }, [movies]);

  if (!currentMovie) {
    return (
      <div className="h-screen bg-gray-800 text-white flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div
      id="hero"
      className="relative h-screen"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}')`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
      <div className="absolute bottom-0 left-0 p-12">
        <h1 id="heroTitle" className="text-5xl font-bold mb-4">
          {currentMovie.title || "Untitled Movie"}
        </h1>
        <p id="heroOverview" className="text-lg max-w-2xl mb-4">
          {currentMovie.overview || "No overview available."}
        </p>
        <button className="bg-white text-black px-8 py-2 rounded-lg font-bold hover:bg-opacity-80">
          ▶ Play
        </button>
      </div>
    </div>
  );
};

export default Hero;
