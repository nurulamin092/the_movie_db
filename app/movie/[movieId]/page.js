import MoreLikeThis from "@/components/movies/MoreLikeThis";
import MovieDetails from "@/components/movies/MovieDetails";

export async function generateMetadata({ params }) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movie/${params.movieId}`, {
        cache: "no-store",
    });
    const movie = await res.json();
    const image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    return {
        title: `${movie.title} | Movie BD`,
        description: movie.overview,
        openGraph: {
            title: `${movie.title} | Movie BD`,
            description: movie.overview,
            images: [
                {
                    url: image,
                    width: 800,
                    height: 600,
                    alt: movie.title,
                },
            ],
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/movie/${params.movieId}`,
        },
    };
}

// Movie Details Page Component
export default async function MovieDetailsPage({ params: { movieId } }) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movie/${movieId}`, { cache: "no-store" });
    const movie = await res.json();

    return (
        <div id="movieDetails" className="min-h-screen pt-20 mb-8">
            <MovieDetails movie={movie} />

            <MoreLikeThis movieId={movieId} />
        </div>
    );
}
