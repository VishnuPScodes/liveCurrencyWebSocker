
import mongoose from "mongoose";


export const connect = async (url: string) => {
    return await mongoose.connect(url);
}