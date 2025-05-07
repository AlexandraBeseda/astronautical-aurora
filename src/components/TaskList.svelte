<script lang="ts">
  import type { TaskType } from "../types";
  import { actions } from "astro:actions";
  import Task from "./Task.svelte";

  export let tasks: TaskType[] = [];

  let title = "";
  let description = "";

  async function generateDescription() {
    if (title.length < 5) {
      alert("Title must be at least 5 characters long.");
      return;
    }

    try {
      const result = await actions.generateDescription({ title });

      if (result.error) {
        console.error(result.error);
        alert("Failed to generate description");
        return;
      }

      description = result.data.description ?? "";
    } catch (err) {
      console.error(err);
      alert("Unexpected error generating description");
    }
  }
</script>

<div class="space-y-4">
  <form
    method="post"
    action={actions.createTask}
    class="grid grid-cols-6 gap-2 items-center bg-gray-100 p-4 rounded"
  >
    <input
      name="title"
      bind:value={title}
      placeholder="Title"
      required
      class="col-span-1 px-2 py-TaskTyperder rounded"
    />
    <input
      name="description"
      bind:value={description}
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
    <button
      type="button"
      on:click={generateDescription}
      class="bg-blue-500 text-white px-3 py-1 rounded"
    >
      Generate Description
    </button>
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
