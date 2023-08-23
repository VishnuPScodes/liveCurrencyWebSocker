import mongoose from "mongoose";


export const mongooseConnect = async (url) => {
    return await mongoose.connect(url)
}
