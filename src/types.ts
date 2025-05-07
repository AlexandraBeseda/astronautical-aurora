export type TaskPriority = "LOW" | "MEDIUM" | "HIGH";

export type TaskType = {
  id: number;
  title: string;
  description?: string;
  priority: TaskPriority;
  dueDate: string | null;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};
