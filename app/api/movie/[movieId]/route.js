import { NextResponse } from "next/server";

const API_KEY = process.env.TM_DB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function GET(req, { params }) {
    const { movieId } = params;
    if (!movieId) {
        return NextResponse.json({ error: "Movie ID is required" }, { status: 400 });
    }
    try {
        console.log(`Fetching details for movie ID: ${movieId}`);
        const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch movie details: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("TMDB Response:", data); // Log response
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching movie details from TMDB:", error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
