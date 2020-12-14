<script>
    import { animals, getAnimals, createAnimal } from "./AnimalStore.js";
    import { onMount } from "svelte";

    onMount(() => {
        getAnimals();
    });

    const test_animal = {
        name: "Test",
        breed: "Jack Russell",
        customerId: 2,
        locationId: 1,
    };
</script>

<style>
    .container {
        flex: 2;
    }

    .animals {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .animal {
        flex-basis: 30%;
    }
</style>

<article class="container">
    <button on:click={() => createAnimal(test_animal)}>Create Test Animal</button>
    <button
        on:click={() => {
            getAnimals();
        }}>
        Get Animals
    </button>

    <div class="animals">
        {#each $animals as animal}
            <section class="animal">
                <div class="animal--name">
                    <h2><a href="/animal/{animal.id}">{animal.name}</a></h2>
                </div>
                <div class="animal--breed">{animal.breed}</div>
            </section>
        {/each}
    </div>
</article>
