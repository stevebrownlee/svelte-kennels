<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  let _animals = [];

  export const createAnimal = async (animal) => {
      const response = await fetch("http://localhost:8088/animals", {
          "method": "POST",
          "headers": {
              "Content-Type": "application/json"
          },
          "body": JSON.stringify(animal)
      });
      const new_animal = await response.json();

      if (response.ok) {
          await getAnimals()
      }

  }

  const getAnimals = async () => {
    const response = await fetch("http://localhost:8088/animals");
    const animals = await response.json();

    _animals = animals;

    dispatch("animalStateChanged", {
      animals: _animals.slice(),
    });
  };

  getAnimals();
</script>
