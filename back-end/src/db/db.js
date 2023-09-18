import mongoose from "mongoose";

export const mongooseConnect = async (url) => {
    console.log('url', url)
    return await mongoose.connect(url)
}
