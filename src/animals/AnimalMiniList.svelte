<script>
  import { animals, getAnimals } from "./AnimalStore.js";
  getAnimals()
</script>

<style>
    .animals {
        flex: 1;
    }
</style>

<article class="animals">
  {#each $animals as animal}
    <section>🐶 { animal.name }</section>
  {/each}
</article>
