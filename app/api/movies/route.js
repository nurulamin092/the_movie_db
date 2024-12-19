// export default async function handler(req, res) {
//     const { query } = req;
//     const API_KEY = process.env.TM_DB_API_KEY;
//     try {
//         const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
//         const response = await fetch(url);
//         const data = await response.json();
//         res.status(200).json(data.results);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching data from TMDB' });
//     }


// }

import { NextResponse } from "next/server";

const API_KEY = process.env.TM_DB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function GET() {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return NextResponse.json(data);
}