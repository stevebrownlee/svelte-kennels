<script>
  import Animal from "./Animal.svelte";
  import { animals, getAnimals } from "./AnimalStore.js";

  getAnimals()
</script>


<article class="animals">
  {#each $animals as animal}
    <section>🐶 { animal.name }</section>
  {/each}
</article>
