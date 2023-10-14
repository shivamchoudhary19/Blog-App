import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
    .connect(
        "mongodb+srv://admin:Lw0yKxhKpGnbWl2C@cluster0.k4itb95.mongodb.net/Blog?retryWrites=true&w=majority"
    )
    .then(() => app.listen(5000))
    .then(() =>
        console.log("Connected to Database and Listening to Localhost 5000")
    )
    .catch((err) => console.log(err));

//Lw0yKxhKpGnbWl2C