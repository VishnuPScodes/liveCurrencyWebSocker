
import mongoose from "mongoose";

const mongoURL = process.env.URL
export const connect = async () => {
    if (mongoURL) return await mongoose.connect(mongoURL);
}