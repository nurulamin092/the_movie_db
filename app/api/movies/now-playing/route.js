import { NextResponse } from "next/server";

const API_KEY = process.env.TM_DB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";



export async function GET() {
    try {
        const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch now playing movies: ${response.statusText}`);
        }
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
