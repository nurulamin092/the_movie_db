"use client";
import { useState } from "react";
import AddMovieAction from "./AddMovieAction";
import MovieSlot from "./MovieSlot";

const CompareMovies = () => {
  const [slots, setSlots] = useState([{}]);
  const addSlot = () => setSlots([...slots, {}]);
  const removeSlot = (index) => setSlots(slots.filter((_, i) => i !== index));
  return (
    <main className="container mx-auto px-4 pt-24 pb-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Compare Movies</h1>
        <AddMovieAction addSlot={addSlot} />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {slots.map((_, index) => (
          <MovieSlot key={index} onRemove={() => removeSlot(index)} />
        ))}
      </div>
    </main>
  );
};

export default CompareMovies;
