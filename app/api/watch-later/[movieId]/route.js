import { connectMongo } from "@/services/mongo";
import { userModel } from "@/models/userModel";
import { NextResponse } from "next/server";
import { getSession } from "next-auth/react";

// GET: Check if a movie is in the user's watch list
export async function GET(req, { params }) {
    try {
        await connectMongo();

        const session = await getSession({ req });

        if (!session) {
            return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
        }

        const { movieId } = params;

        const user = await userModel.findById(session.user.id);

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const isAdded = user.watchList.includes(movieId);

        return NextResponse.json({ success: true, isAdded });
    } catch (error) {
        console.error("Error checking watch list:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

// DELETE: Remove a movie from the user's watch list
export async function DELETE(req, { params }) {
    try {
        await connectMongo();

        const session = await getSession({ req });

        if (!session) {
            return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
        }

        const { movieId } = params;

        const user = await userModel.findById(session.user.id);

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        user.watchList = user.watchList.filter((id) => id !== movieId);
        await user.save();

        return NextResponse.json({ success: true, message: "Movie removed from Watch Later" });
    } catch (error) {
        console.error("Error removing movie from watch list:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
