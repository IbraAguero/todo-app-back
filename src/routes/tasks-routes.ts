import express from "express";
import {
  postTask,
  deleteTaskController,
  getTaskController,
  updateTaskController,
} from "../controllers/tasks-controller";

const router = express.Router();

router.get("/", getTaskController);
router.post("/", postTask);
router.put("/:id", updateTaskController);
router.delete("/:id", deleteTaskController);

export default router;
