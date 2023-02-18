import express from "express";
import cors from "cors"

//env configuration
import dotenv from "dotenv";
dotenv.config();

//routes
import AuthRouter from "./routes/auth.js";
import CustomerRouter from "./routes/customer.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }))
  
app.use("/api/auth", AuthRouter);
app.use("/api/customer", CustomerRouter);

app.listen(process.env.PORT, () => {
    console.log("Server is running on", process.env.PORT);
});