import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";

dotenv.config();
const app = express();

//middlewares
app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//mongodb connection
mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => console.log("connected"))
  .catch(() => console.log("No connection"));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
