import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { handleCreateTask, handleDeleteTask, handleGetAllTasks, handleGetFilteredTasks, handleGetTaskById, handleUpdateTask } from '../../lib/server/actions';

export const server = {
  createTask: defineAction({
    accept: 'form',
    input: z.object({
      title: z.string().min(1),
      description: z.string().min(1),
      priority: z.enum(["LOW", "MEDIUM", "HIGH"]),
      dueDate: z.coerce.date(),
    }),
    handler: handleCreateTask
  }),

  getAllTasks: defineAction({
    handler: handleGetAllTasks
  }),

  getFilteredTasks: defineAction({
    input: z.object({
      priority: z.enum(["LOW", "MEDIUM", "HIGH"]).optional(),
      completed: z.enum(["true", "false"]).optional(),
    }),
    handler: handleGetFilteredTasks
  }),

   getTaskById: defineAction({
    input: z.object({
      id: z.coerce.number(),
    }),
    handler: handleGetTaskById
  }),

  updateTask: defineAction({
    accept: 'form',
    input: z.object({
      id: z.coerce.number(),
      title: z.string().min(1).optional(),
      description: z.string().min(1).optional(),
      priority: z.enum(["LOW", "MEDIUM", "HIGH"]).optional(),
      completed: z.boolean().optional(),
    }),
    handler: handleUpdateTask
  }),

  deleteTask: defineAction({
    accept: 'form',
    input: z.object({
      id: z.coerce.number(),
    }),
    handler: handleDeleteTask
})
};
