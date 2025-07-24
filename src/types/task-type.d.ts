export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

type NewTask = Omit<Task, "id">;
