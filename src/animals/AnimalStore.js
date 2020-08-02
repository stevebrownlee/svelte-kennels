import { writable } from 'svelte/store';


/*
    Initialize the creation of a custom, writeable store that
    exposes the `subscribe` function (which lets other components
    use the animal array), the `createAnimal` function that
    creates a new animal in the API, and the `getAnimals` function
    that pulls the animals from the API and updates the writeable
    store on success.

    This allows you to control what other components have access
    to on the writeable store. For example, other components do
    not have the ability to invoke `animals.set()` because the set()
    function is not returned from the init() function.
*/
const init = () => {
    let _animals = []
    let _synced = false

    const { subscribe, set } = writable(_animals);

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
            _synced = false
            await getAnimals()
        }

    }

    const getAnimals = async () => {
        if (!_synced) {
            _synced = true
            const response = await fetch("http://localhost:8088/animals");
            const animals = await response.json();

            if (response.ok) {
                set(animals);
            } else {
                _synced = false
            }
        }
    };

    return {
        subscribe,
        createAnimal,
        getAnimals
    }
}


export const animals = init()