// Required import for a writable store of data
import { writable } from 'svelte/store';

const { subscribe, set } = writable([]);  // Create store
let _synced = false

export const animals = { subscribe }  // Export subscriptable data

export const getAnimals = async () => {  // Export GET call
    if (!_synced) {
        // Set as synced immediately in case 2 components need data simultaneously
        _synced = true

        const response = await fetch("http://localhost:8088/animals");  // Get API state
        const animals = await response.json();

        if (response.ok) {
            set(animals);  // States are in sync
        } else {
            _synced = false  // Request failed, states not in sync
        }
    }
};

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
        _synced = false
        await getAnimals()
    }
}
