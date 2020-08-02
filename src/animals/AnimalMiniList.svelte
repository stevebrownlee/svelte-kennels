<script>
  import AnimalProvider from "./AnimalProvider.svelte";
  import Animal from "./Animal.svelte";
  import { animals } from "./AnimalStore.js";

  animals.getAnimals()
</script>


<article class="animals">
  {#each $animals as animal}
    <section>🐶 { animal.name }</section>
  {/each}
</article>
