<script>
  import AnimalProvider from "./AnimalProvider.svelte";
  import Animal from "./Animal.svelte";

  let animals = [];
  let createAnimal;

  const test_animal = { name: "Test", breed: "Jack Russell", customerId: 2, locationId: 1 };
</script>

<AnimalProvider
  bind:createAnimal={createAnimal}
  on:animalStateChanged={(e) => (animals = e.detail.animals)} />

<article class="animals">
  {#each animals as animal}
    <Animal {...animal} />
  {/each}
</article>

<button
  on:click={() => {
    createAnimal(test_animal);
  }}>
  Create Animal
</button>
