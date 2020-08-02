<script>
  import AnimalList from "./animals/AnimalList.svelte";
  import AnimalMiniList from "./animals/AnimalMiniList.svelte";
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .splitScreen {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
</style>

<main>
  <h1>Nashville Kennels</h1>

  <div class="splitScreen">
    <AnimalList />
    <AnimalMiniList />
  </div>
</main>
