<script>
    import { onMount } from "svelte";
    import { animals, getAnimals } from "./AnimalStore.js";

    onMount(() => getAnimals());
</script>

<style>
    .animals {
        flex: 1;
    }
</style>

<article class="animals">
    {#each $animals as animal}
        <section>🐶 <a href="/animals/{animal.id}">{animal.name}</a></section>
    {/each}
</article>
