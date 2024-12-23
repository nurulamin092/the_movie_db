import mongoose from "mongoose";

let isConnected = false; // Global connection state

export async function connectMongo() {
    if (isConnected) {
        console.log("MongoDB already connected.");
        return;
    }

    try {
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) throw new Error("MongoDB URI is not defined in environment variables.");

        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = true;
        console.log("MongoDB connected successfully.");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        throw new Error("Unable to connect to MongoDB.");
    }
}
