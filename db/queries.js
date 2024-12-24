import { userModel } from "@/models/userModel";
import { watchListModel } from "@/models/watchListModel";
import connectMongo from "@/services/mongo";
import { replaceMongoIdInObject } from "@/utils/data-util";

export async function createUser(user) {
    await connectMongo()
    return await userModel.create(user)
}

export async function findUserByCredentials(credentials) {
    await connectMongo()
    const user = await userModel.findOne(credentials).lean();
    if (user) {
        return replaceMongoIdInObject(user);
    }
    return null;
}

export async function updateWatchList(movieId, authId) {
    await connectMongo()

    const movie = await watchListModel.findById(movieId);

    if (movie) {
        const foundUsers = movie.interested_ids.find(
            (id) => id.toString() === authId
        );

        if (foundUsers) {
            movie.movieId.pull(new mongoose.Types.ObjectId(authId));
        } else {
            movie.movieId.push(new mongoose.Types.ObjectId(authId));
        }

        movie.save();
    }
}