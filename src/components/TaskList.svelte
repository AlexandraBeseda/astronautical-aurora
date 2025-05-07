<script lang="ts">
  import type { TaskType } from "../types";
  import { actions } from "astro:actions";
  import Task from "./Task.svelte";

  export let tasks: TaskType[] = [];

  // Храним ID редактируемой задачи и её изменённые значения
  let editingTaskId: number | null = null;
</script>

<div class="space-y-4">
  <form
    method="post"
    action={actions.createTask}
    class="grid grid-cols-6 gap-2 items-center bg-gray-100 p-4 rounded"
  >
    <input
      name="title"
      placeholder="Title"
      required
      class="col-span-1 px-2 py-TaskTyperder rounded"
    />
    <input
      name="description"
      placeholder="Description"
      required
      class="col-span-2 px-2 py-1 border rounded"
    />
    <select name="priority" class="col-span-1 px-2 py-1 border rounded">
      <option value="LOW">Low</option>
      <option value="MEDIUM">Medium</option>
      <option value="HIGH">High</option>
    </select>
    <input
      name="dueDate"
      type="date"
      class="col-span-1 px-2 py-1 border rounded"
    />
    <button
      type="submit"
      class="col-span-1 bg-green-500 text-white px-4 py-2 rounded">Add</button
    >
  </form>

  <table class="w-full table-auto border mt-2 text-sm">
    <thead class="bg-gray-200">
      <tr>
        <th class="px-4 py-2">Title</th>
        <th class="px-4 py-2">Description</th>
        <th class="px-4 py-2">Priority</th>
        <th class="px-4 py-2">Status</th>
        <th class="px-4 py-2">Due Date</th>
        <th colspan="2" class="px-4 py-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each tasks as task}
        <Task {task} />
      {/each}
    </tbody>
  </table>
</div>
