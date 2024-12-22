"use client";
import { useRef } from "react";
import useDebounce from "@/app/hooks/useDebounce";
const SearchBar = ({ onSearch }) => {
  const inputRef = useRef("");
  const debouncedSearch = useDebounce((query) => {
    onSearch(query);
  }, 500);
  const handleInputChange = (e) => {
    const value = e.target.value;
    inputRef.current = value;
    debouncedSearch(value);
  };
  return (
    <input
      type="text"
      placeholder="Type movie name..."
      onChange={handleInputChange}
      className="w-full bg-zinc-800 text-white px-4 py-2 rounded mb-4"
    />
  );
};

export default SearchBar;
