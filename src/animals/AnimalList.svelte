<script>
    import { animals, getAnimals } from "./AnimalStore.js";  // Import the data store

    getAnimals();  // Kick off getting animals into application state
  </script>

  <!--
      Note that the animals data is preceded with a $
      That's what makes it reactive. As soon as the `getAnimals()`
      function is invoked in the data store, $animals, updates
      here and the list re-renders.
   -->
  <article class="animals">
    {#each $animals as animal}
      <section class="animal">
          <div class="animal--name"><h2>{ animal.name }</h2></div>
          <div class="animal--breed">{ animal.breed }</div>
      </section>
    {/each}
  </article>