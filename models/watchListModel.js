import mongoose from "mongoose";

const watchListSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    movieId: { type: String, required: true },
});

export const watchListModel =
    mongoose.models.WatchList || mongoose.model("WatchList", watchListSchema);
