"use server";

import { createUser, findUserByCredentials, updateWatchList } from "@/db/queries";
import { redirect } from "next/navigation";
export async function registerUser(formData) {
    const user = Object.fromEntries(formData);
    const created = await createUser(user);
    redirect("/auth/login");
}

export async function performLogin(formData) {
    try {
        const credential = {};
        credential.email = formData.get("email");
        credential.password = formData.get("password");
        const found = await findUserByCredentials(credential);
        return found;
    } catch (error) {
        throw error;
    }
}

export async function addWatchList(movieId, authId) {
    try {
        await updateWatchList(movieId, authId);
    } catch (error) {
        throw error;
    }
    revalidatePath('/');
}