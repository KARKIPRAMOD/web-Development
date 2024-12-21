import express from "express";
import { ConnectDB } from "./connection.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";

dotenv.config();
const PORT = 8000;
const app = express();

//middleware to parse incoming requests with JSON payloads
app.use(express.json());


app.use("/api/auth", authRoutes);

app.listen(PORT, ()=>{
    ConnectDB();
    console.log(`Server started at port = ${PORT}`)
});