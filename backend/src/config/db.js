import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        //connect to mongodb with mongoose. 
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected succesfully.");
    } catch (error) {
        //log error and exit
        console.error("Failed to connect to MongoDB.", error);
        process.exit(1);
    }
}