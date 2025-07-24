import express from "express";
import { addTask, getTasks } from "../controllers/tasks-controller";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(getTasks());
});

router.post("/", (req, res) => {
  const { title, completed } = req.body;

  const newTask = addTask({ title, completed });

  res.json(newTask);
});

export default router;
