import express from "express";
import { ConnectDB } from "./connection.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import path from 'path';  // Import path module
import { fileURLToPath } from 'url'; 


dotenv.config();
const PORT = 8000;
const app = express();

//setup ejs as template engine
app.set("view engine", "ejs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 
app.set('views', path.join(__dirname,"views"));

//middleware to parse incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.json());


app.use("/api/auth", authRoutes);

app.listen(PORT, ()=>{
    ConnectDB();
    console.log(`Server started at port = ${PORT}`)
});