<script>
    import { onMount } from "svelte";
    import { getAnimal } from "./AnimalStore.js";

    export let params;
    let animal = {}

    onMount(async () => {
        animal = await getAnimal(parseInt(params.id))
    });
</script>

<section class="animal">
    <div class="animal--name">
        <h2>{animal.name}</h2>
    </div>
    <div class="animal--breed">{animal.breed}</div>
</section>
