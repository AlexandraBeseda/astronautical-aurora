<script lang="ts">
  export let title: string = "Task Manager";
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="min-h-screen bg-gray-100 text-gray-900">
  <main class="max-w-3xl mx-auto px-4 py-8">
    <header class="mb-6">
      <h1 class="text-3xl font-bold">{title}</h1>
    </header>

    <slot />
  </main>
</div>
