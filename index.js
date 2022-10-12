import express from "express";
import dotenv from "dotenv";
import uploadRouter from "./uploadRoutes.js";
 

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/upload", uploadRouter);
app.get("/", (req, res) => {
  res.send("INDOMITABLE SUIIII");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
