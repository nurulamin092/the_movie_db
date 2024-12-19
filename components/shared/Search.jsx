const Search = () => {
  return (
    <>
      <div className="relative">
        <input
          type="text"
          id="searchInput"
          placeholder="Search movies..."
          className="bg-black bg-opacity-50 text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:border-white"
        />
        <div
          id="searchResults"
          className="absolute w-full mt-2 bg-black bg-opacity-90 rounded-lg hidden"
        ></div>
      </div>
    </>
  );
};

export default Search;
