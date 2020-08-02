<script>
  import AnimalProvider from "./AnimalProvider.svelte";
  import Animal from "./Animal.svelte";
  import { animals } from "./AnimalStore.js";

  /*
    State variable holding an object representation of an animal.
  */
  const test_animal = {
    name: "Test",
    breed: "Jack Russell",
    customerId: 2,
    locationId: 1,
  };

  animals.getAnimals()
</script>


<article class="animals">
  {#each $animals as animal}
    <Animal {...animal} />
  {/each}
</article>

<button
  on:click={() => {
    animals.createAnimal(test_animal);
  }}>
  Create Animal
</button>

<button
  on:click={() => {
    animals.getAnimals();
  }}>
  Get Animals
</button>
