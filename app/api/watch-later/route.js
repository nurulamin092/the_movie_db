import { getSession } from "next-auth/react"; // For NextAuth.js authentication
import { NextResponse } from "next/server";

// Check the user's session to ensure they are authenticated
export async function POST(req) {
    try {
        const { movieId } = await req.json();
        if (!movieId) return NextResponse.json({ error: "Movie ID is required" }, { status: 400 });

        const session = await getSession({ req });
        if (!session) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });


    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const { movieId } = await req.json();
        if (!movieId) return NextResponse.json({ error: "Movie ID is required" }, { status: 400 });

        const session = await getSession({ req });
        if (!session) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

        // Perform the logic to remove movie from the watchlist
        // Continue with your logic for removing the movie from the watch list
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
