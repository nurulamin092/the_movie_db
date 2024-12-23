import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectMongo } from "@/services/mongo";
import { userModel } from "@/models/userModel";

export async function POST(req) {
    await connectMongo();
    const { email, password } = await req.json();

    if (!email || !password) {
        return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);


        if (!isPasswordCorrect) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }
        return NextResponse.json(
            {
                message: "Login successful",
                user: {
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                },
            },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json({ error: "Login failed" }, { status: 500 });
    }
}