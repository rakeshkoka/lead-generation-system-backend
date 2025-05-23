import express from "express";
const app = express();
app.use(express.json());

import dotenv from "dotenv";
import leadRouter from "./routes/lead.route.js";
dotenv.config();

import cors from "cors";
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://lead-generation-system.vercel.app/",
        "https://lead-generation-system-apy60hb18-rakeshs-projects-9f496bf3.vercel.app/"
    ],
}))

//port
const PORT = process.env.PORT;


app.use("/api", leadRouter);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});