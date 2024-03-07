<script>
  import Button from "$lib/components/ui/button/button.svelte";

  $: count = 0;
</script>

<div class="p-6">
  <h1 class="text-4xl font-bold">Welcome to SvelteKit</h1>
  <p class="italic">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

  <Button class="mt-2" on:click={() => count += 1}>Clicks: {count}</Button>
</div>

