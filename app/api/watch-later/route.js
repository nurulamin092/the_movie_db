import { getSession } from "next-auth/react";
import { watchListModel } from "@/models/watchListModel";

export async function POST(req) {
    try {
        const session = await getSession({ req });

        if (!session) {
            return new Response(JSON.stringify({ error: "Unauthorized" }), {
                status: 401,
            });
        }

        const { movieId } = await req.json();
        const userId = session.user.id;

        // Check if the movie is already in the watch list
        const existingEntry = await watchListModel.findOne({ userId, movieId });

        if (existingEntry) {
            // If the movie exists, remove it
            await watchListModel.deleteOne({ _id: existingEntry._id });
            return new Response(JSON.stringify({ added: false }), { status: 200 });
        } else {
            // If not, add it to the watch list
            await watchListModel.create({ userId, movieId });
            return new Response(JSON.stringify({ added: true }), { status: 200 });
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
        });
    }
}
