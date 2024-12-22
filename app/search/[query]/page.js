
import MovieSearchResult from "@/components/movies/MovieSearchResult";

const SearchResultsPage = async ({ params: { query } }) => {

    let searchResults = [];
    let error = null;

    try {
        const res = await fetch(`http://localhost:3000/api/movie/search?query=${query}`);
        if (!res.ok) throw new Error("Failed to fetch search results");
        searchResults = await res.json();
    } catch (err) {
        error = err.message;
    }

    return (
        <MovieSearchResult searchResults={searchResults} query={query} error={error} />
    );
};
export default SearchResultsPage;
