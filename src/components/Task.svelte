<script lang="ts">
  export let task: TaskType;
  import { actions } from "astro:actions";
  import type { TaskType } from "../types";

  let title = task.title;
  let description = task.description;
  let dueDate = task.dueDate
    ? new Date(task.dueDate).toISOString().slice(0, 10)
    : "";
  let priority = task.priority;
  let completed = task.completed ? "true" : "false";
</script>

<tr class="border-t hover:bg-gray-50">
  <td class="px-4 py-2">
    <input
      type="text"
      bind:value={title}
      name="title"
      class="border px-2 py-1 w-full"
    />
  </td>
  <td class="px-4 py-2">
    <input
      type="text"
      bind:value={description}
      name="description"
      class="border px-2 py-1 w-full"
    />
  </td>
  <td class="px-4 py-2">
    <select
      bind:value={priority}
      name="priority"
      class="border px-2 py-1 w-full"
    >
      <option value="LOW">Low</option>
      <option value="MEDIUM">Medium</option>
      <option value="HIGH">High</option>
    </select>
  </td>
  <td class="px-4 py-2">
    <select
      bind:value={completed}
      name="completed"
      class="border px-2 py-1 w-full"
    >
      <option value="false">No</option>
      <option value="true">Yes</option>
    </select>
  </td>
  <td class="px-4 py-2">
    <input
      type="date"
      bind:value={dueDate}
      name="dueDate"
      class="border px-2 py-1 w-full"
    />
  </td>
  <td class="px-2 py-2">
    <form method="post" action={actions.deleteTask}>
      <input type="hidden" name="id" value={task.id} />
      <button
        type="submit"
        title="Delete task"
        class="text-red-600 hover:underline">Delete</button
      >
    </form>
  </td>
  <td class="px-2 py-2">
    <form method="post" action={actions.updateTask}>
      <input type="hidden" name="id" value={task.id} />
      <input type="hidden" name="title" value={title} />
      <input type="hidden" name="description" value={description} />
      <input type="hidden" name="priority" value={priority} />
      <input type="hidden" name="completed" value={completed} />
      <input type="hidden" name="dueDate" value={dueDate} />
      <button
        type="submit"
        title="Update task"
        class="text-yellow-600 hover:underline">Update</button
      >
    </form>
  </td>
</tr>
