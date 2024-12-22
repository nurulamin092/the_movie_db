"use client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddMovieAction from "./AddMovieAction";
import MovieSlot from "./MovieSlot";

const CompareMovies = () => {
  const [slots, setSlots] = useState([{ id: uuidv4() }]);
  const addSlot = () => setSlots([...slots, { id: uuidv4() }]);
  const removeSlot = (id) => setSlots(slots.filter((slot) => slot.id !== id));
  return (
    <main className="container mx-auto px-4 pt-24 pb-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Compare Movies</h1>
        <AddMovieAction addSlot={addSlot} />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {slots.map((slot) => (
          <MovieSlot key={slot.id} onRemove={() => removeSlot(slot.id)} />
        ))}
      </div>
    </main>
  );
};

export default CompareMovies;
