"use client";

import { useRouter } from "next/navigation";
import useDebounce from "@/app/hooks/useDebounce";
import { useRef } from "react";

const Search = () => {
  const router = useRouter();
  const inputRef = useRef(null);

  const debouncedSearch = useDebounce((query) => {
    if (query.trim()) {
      router.push(`/search/${encodeURIComponent(query.trim())}`);
    } else {
      router.replace("/");
    }
  }, 500);

  const handleInputChange = (e) => {
    const value = e.target.value;
    debouncedSearch(value);
  };

  return (
    <input
      type="text"
      ref={inputRef}
      placeholder="Type movie name..."
      onChange={handleInputChange}
      className="w-full bg-zinc-800 text-white px-4 py-2 rounded mb-4"
    />
  );
};

export default Search;
