import express from "express";
import tasksRouter from "./routes/tasks-routes";
import cors from "cors";

const PORT = 3001;
const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Servidor Express con Typescript funcionando 🚀");
});

app.use("/tasks", tasksRouter);

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
