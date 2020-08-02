import { writable } from 'svelte/store';


const init = () => {
    const { subscribe, set, update } = writable([]);

    const createAnimal = async (animal) => {
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

      set(animals);
    };


    return {
        subscribe,
        createAnimal,
        getAnimals
    }
}


export const animals = init()