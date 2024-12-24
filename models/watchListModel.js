import mongoose from "mongoose";

const watchListSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    movieId: { type: String, required: true },
});

export const watchListModel =
    mongoose.models.WatchList || mongoose.model("WatchList", watchListSchema);



//     import mongoose, { Schema } from "mongoose";

// const schema = new Schema({
//   userDetails: {
//     firstName: {
//       type: String,
//       required: true,
//     },
//     lastName: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//   },

//   movieIds: {
//     type: [
//       {
//         id: {
//           type: Number,
//           required: true,
//         },
//         title: {
//           type: String,
//           required: true,
//         },
//         poster_path: {
//           type: String,
//           required: true,
//         },
//         release_date: {
//           type: String,
//           required: true,
//         },
//       },
//     ],
//     required: true,
//     default: [],
//   },
// });

// const watchListModel =
//   mongoose.models?.["watchlists"] ?? mongoose.model("watchlists", schema);

// export default watchListModel;