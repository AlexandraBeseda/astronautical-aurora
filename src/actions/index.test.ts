import { describe, it, expect, vi, beforeEach } from 'vitest';
import mockDb from '../../__mocks__/db';
import {
  handleCreateTask,
  handleGetAllTasks,
  handleUpdateTask,
  handleDeleteTask,
} from './../../lib/server/actions';

vi.mock('../../lib/server/db', () => ({ default: mockDb }));

describe('server actions (handlers)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('createTask should create a task', async () => {
    mockDb.task.create.mockResolvedValueOnce({ id: 1 });

    const input = {
        title: 'Test task',
        description: 'Description',
        priority: 'HIGH' as const,
        dueDate: new Date('2025-12-31'),
      };

    const result = await handleCreateTask(input);

    expect(mockDb.task.create).toHaveBeenCalledWith({ data: input });
    expect(result).toEqual({ success: true });
  });

  it('getAllTasks returns list of tasks', async () => {
    mockDb.task.findMany.mockResolvedValueOnce([{ id: 1 }, { id: 2 }]);

    const result = await handleGetAllTasks();

    expect(mockDb.task.findMany).toHaveBeenCalled();
    expect(result).toEqual({ tasks: [{ id: 1 }, { id: 2 }] });
  });

  it('updateTask should update task', async () => {
    const input = {
      id: 1,
      title: 'Updated title',
    };

    mockDb.task.update.mockResolvedValueOnce({ id: 1, title: 'Updated title' });

    const result = await handleUpdateTask(input);

    expect(mockDb.task.update).toHaveBeenCalledWith({
      where: { id: 1 },
      data: { title: 'Updated title' },
    });

    expect(result).toEqual({ task: { id: 1, title: 'Updated title' } });
  });

  it('deleteTask deletes a task', async () => {
    const input = { id: 1 };

    mockDb.task.delete.mockResolvedValueOnce(true);

    const result = await handleDeleteTask(input);

    expect(mockDb.task.delete).toHaveBeenCalledWith({ where: { id: 1 } });
    expect(result).toEqual({ success: true });
  });
});
