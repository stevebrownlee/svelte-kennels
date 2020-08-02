// Required import for a writable store of data
import { writable } from 'svelte/store';

const { subscribe, set } = writable([]);  // Create store

export const animals = { subscribe }  // Export subscriptable data

export const getAnimals = async () => {  // Export GET call
    const response = await fetch("http://localhost:8088/animals");  // Get API state
    const animals = await response.json();

    if (response.ok) {
        set(animals);  // Set the data to API state
    }
};

