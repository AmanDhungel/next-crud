import mongoose from "mongoose"

export const connectDb = async() => {
    try {
        console.log("connecting to mongo db...")
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to mongo db...")
    } catch (error) {
        console.log(error);
    }

}