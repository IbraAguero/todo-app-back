import { Schema, model } from "mongoose";
import { Task } from "../interface/task-type";

const TaskSchema = new Schema<Task>(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, required: true },
  },
  { timestamps: true, versionKey: false }
);

const taskModel = model("task", TaskSchema);
export default taskModel;
