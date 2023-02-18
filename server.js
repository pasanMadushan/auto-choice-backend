import express from "express";
import cors from "cors"

//env configuration
import dotenv from "dotenv";
dotenv.config();

//routes
import AuthRouter from "./routes/auth.js";
import CustomerRouter from "./routes/customer.js";
import GarageRouter from "./routes/garage.js";
import AgentRouter from "./routes/agent.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }))
  
app.use("/api/auth", AuthRouter);
app.use("/api/customer", CustomerRouter);
app.use("/api/garage", GarageRouter);
app.use("/api/agent", AgentRouter);

app.listen(process.env.PORT, () => {
    console.log("Server is running on", process.env.PORT);
});