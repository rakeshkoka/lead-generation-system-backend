import express from "express";
const app = express();
app.use(express.json());

import dotenv from "dotenv";
import leadRouter from "./routes/lead.route.js";
dotenv.config();

import cors from "cors";
const allowedOrigins = [
    "http://localhost:5173",
    "https://lead-generation-system.vercel.app"
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin) || origin.endsWith(".vercel.app")) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
}));

//port
const PORT = process.env.PORT;


app.use("/api", leadRouter);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});