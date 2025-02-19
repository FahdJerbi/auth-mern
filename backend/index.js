import express from "express";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  connectDB();
  console.log("server is running on port:", port);
});
