import MovieDetails from "@/components/movies/MovieDetails";


export async function generateMetadata({ params }) {
    const res = await fetch(`http://localhost:3000/api/movie/${params.movieId}`, { cache: "no-store" });
    const movie = await res.json();
    return { title: `${movie.title} | Movie BD` };
}


export default async function MovieDetailsPage({ params: { movieId } }) {
    const res = await fetch(`http://localhost:3000/api/movie/${movieId}`, { cache: "no-store" });
    const movie = await res.json();

    return (
        <>

            <div id="movieDetails" className="min-h-screen pt-20 mb-8">
                <MovieDetails movie={movie} />
            </div>
        </>

    );
}