import { Task } from "../interface/task-type";
import taskModel from "../models/task.model";

export const insertTask = async (data: Task) => {
  const response = await taskModel.create(data);
  return response;
};

export const getTasks = async () => {
  const response = await taskModel.find({});
  return response;
};

export const deleteTask = async (id: string) => {
  const response = await taskModel.deleteOne({ _id: id });
  return response;
};

export const updateTask = async (id: string, data: Task) => {
  const response = await taskModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return response;
};
