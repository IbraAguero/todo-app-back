import "dotenv/config";
import express from "express";
import tasksRouter from "./routes/tasks-routes";
import cors from "cors";
import { connectDB } from "./db";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Servidor Express con Typescript funcionando 🚀");
});

app.use("/tasks", tasksRouter);

connectDB();
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
