import {
  deleteTask,
  getTasks,
  insertTask,
  updateTask,
} from "../services/task-service";
import { Request, Response } from "express";
import { handleHttp } from "../utils/error-handle";

export const getTaskController = async (_req: Request, res: Response) => {
  try {
    const response = await getTasks();
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_TASKS");
  }
};
export const postTask = async (req: Request, res: Response) => {
  try {
    const responseInsert = await insertTask(req.body);

    res.send(responseInsert);
  } catch (error) {
    handleHttp(res, "ERROR_POST_TASK", error);
  }
};

export const updateTaskController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const response = await updateTask(id, req.body);

    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_TASK", error);
  }
};

export const deleteTaskController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const response = await deleteTask(id);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_TASK", error);
  }
};

/* const newTask = {
  ...newTaskEntry,
  id: Math.max(...dataTasks.map((d) => d.id)) + 1,
};

dataTasks.push(newTask);
return newTask; */
