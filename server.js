import express from "express";

//env configuration
import dotenv from "dotenv";
dotenv.config();

//routes
import AuthRouter from "./routes/auth.js";

const app = express();

app.use(express.json())

app.use(express.urlencoded({ extended: true }))
  
app.use("/api/auth", AuthRouter);

app.listen(process.env.PORT, () => {
    console.log("Server is running on", process.env.PORT);
});