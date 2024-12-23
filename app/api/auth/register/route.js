import { userModel } from "@/models/userModel";
import { connectMongo } from "@/services/mongo";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, password, confirmPassword } = body;

        if (password !== confirmPassword) {
            return new Response(
                JSON.stringify({ error: "Passwords do not match" }),
                { status: 400 }
            );
        }

        await connectMongo();

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return new Response(
                JSON.stringify({ error: "User already exists" }),
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        return new Response(
            JSON.stringify({ message: "User registered successfully" }),
            { status: 201 }
        );
    } catch (error) {
        console.error("Error in registration:", error);
        return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            { status: 500 }
        );
    }
}
