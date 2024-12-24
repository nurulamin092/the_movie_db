import { NextResponse } from "next/server";

const API_KEY = process.env.TM_DB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function GET(req, { params: { movieId } }) {
    try {

        const movieResponse = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
        if (!movieResponse.ok) {
            throw new Error(`Failed to fetch movie details: ${movieResponse.statusText}`);
        }
        const movieData = await movieResponse.json();


        const creditsResponse = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
        if (!creditsResponse.ok) {
            throw new Error(`Failed to fetch movie credits: ${creditsResponse.statusText}`);
        }
        const creditsData = await creditsResponse.json();


        const data = {
            ...movieData,
            cast: creditsData.cast,
        };

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}