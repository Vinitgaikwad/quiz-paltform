import mongoose from "mongoose";

export const DateBaseStartUP = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL as string);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
};
