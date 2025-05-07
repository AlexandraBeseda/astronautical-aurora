import db from "./db";

export type CreateTaskInput = {
    title: string;
    description: string;
    priority: 'LOW' | 'MEDIUM' | 'HIGH';
    dueDate: Date;
  };

export type GetFilteredTasksInput = {
    priority?: 'LOW' | 'MEDIUM' | 'HIGH';
    completed?: 'true' | 'false';
  };

export  type IdParam = { id: number };

export type UpdateTaskInput = {
  id: number;
  title?: string;
  description?: string;
  priority?: 'LOW' | 'MEDIUM' | 'HIGH';
  completed?: boolean;
};


export async function handleCreateTask({
    title,
    description,
    priority,
    dueDate,
  }: CreateTaskInput) {
    await db.task.create({ data: { title, description, priority, dueDate } });
    return { success: true };
  }
  
  export async function handleGetAllTasks() {
    const tasks = await db.task.findMany();
    return { tasks };
  }
  
  export async function handleGetFilteredTasks({
    priority,
    completed,
  }: GetFilteredTasksInput) {
    const completedFilter =
      completed === "true" ? true :
      completed === "false" ? false :
      undefined;
  
    const tasks = await db.task.findMany({
      where: {
        ...(priority && { priority }),
        ...(completedFilter !== undefined && { completed: completedFilter }),
      },
      orderBy: { createdAt: "desc" },
    });
  
    return { tasks };
  }
  
  export async function handleGetTaskById({ id }: IdParam) {
    const task = await db.task.findUnique({ where: { id } });
    if (!task) {
      throw new Error("Task not found");
    }
    return { task };
  }
  
  export async function handleUpdateTask({ id, ...data }: UpdateTaskInput) {
    const task = await db.task.update({
      where: { id },
      data,
    });
    return { task };
  }
  
  export async function handleDeleteTask({ id }: IdParam) {
    await db.task.delete({ where: { id } });
    return { success: true };
  }