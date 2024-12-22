// /app/api/movie/movieId/hero/route.js
export async function GET(req, { params: movieId }) {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TM_DB_API_KEY}`
    );
    const data = await res.json();

    return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
    });
}
