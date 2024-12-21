import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");
    const API_KEY = process.env.TM_DB_API_KEY;
    const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

    try {
        const response = await fetch(
            `${BASE_URL}?query=${query}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
        );

        if (response.ok) {
            const data = await response.json();

            if (data.results.length > 0) {
                return NextResponse.json(data, {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                });
            } else {
                return NextResponse.json(
                    { message: "No Data found", results: [] },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*",
                        },
                        status: 404,
                        statusText: "NOT FOUND",
                    }
                );
            }
        } else {
            throw new Error(
                "There was an error while loading searched Movie's data"
            );
        }
    } catch (error) {
        return NextResponse.json({
            error: error.message,
            results: [],
        });
    }
}