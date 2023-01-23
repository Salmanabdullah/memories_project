import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


const CONNECTION_URL = 'mongodb+srv://salman2023:salman9900@cluster0.trl8iyf.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => console.log("connected"))
  .catch(() => console.log("No connection"));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});