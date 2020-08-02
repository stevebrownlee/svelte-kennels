<script>
  import AnimalProvider from "./AnimalProvider.svelte";
  import Animal from "./Animal.svelte";

  /*
    This is a component state variable that will hold all of
    the animal objects that the data provider will extract from
    the API. Initially set its value to an empty array.
  */
  let animals = [];

  /*
    This state variable is to be a local reference to the createAnimal()
    function that is defined in the AnimalProvider.
  */
  let saveAnimal;

  /*
    State variable holding an object representation of an animal.
  */
  const test_animal = {
    name: "Test",
    breed: "Jack Russell",
    customerId: 2,
    locationId: 1,
  };
</script>

<!--
    The `bind:createAnimal` directive allows this component to use a value exported
    from a child component, but aliased as the variable scoped to the current
    component.
        "I need to invoke the createAnimal() function that is defined in
            AnimalProvider, so I will bind (or alias) that function to the
            `saveAnimal` variable I defined above."
-->
<AnimalProvider
  bind:createAnimal={saveAnimal}
  on:animalStateChanged={(e) => (animals = e.detail.animals)} />

<article class="animals">
  {#each animals as animal}
    <Animal {...animal} />
  {/each}
</article>

<button
  on:click={() => {
    saveAnimal(test_animal);
  }}>
  Create Animal
</button>
