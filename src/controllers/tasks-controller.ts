import dataTasks from "../data/tasks";
import { NewTask, Task } from "../types/task-type";

export const getTasks = () => dataTasks;

export const addTask = (newTaskEntry: NewTask): Task => {
  const newTask = {
    ...newTaskEntry,
    id: Math.max(...dataTasks.map((d) => d.id)) + 1,
  };

  dataTasks.push(newTask);
  return newTask;
};
