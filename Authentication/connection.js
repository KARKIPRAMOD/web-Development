import mongoose from "mongoose";
import dotenv from "dotenv";
export const ConnectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("connection Sucessful");
    } catch (error) {
        console.log("Cant Connect to the Database");
        console.log(error.message);
    }
}

