import mongoose from "mongoose";
import dotenv from "dotenv";
export const connectdb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`connected to db successfully  : ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error ${error.message}`);
        process.exit(1);
    }
}