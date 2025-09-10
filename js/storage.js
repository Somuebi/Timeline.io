// js/storage.js

/**
 * Saves data to localStorage after converting it to a JSON string.
 * @param {string} key - The key under which to store the data.
 * @param {any} value - The data to store (e.g., an object or array).
 */
export function saveData(key, value) {
    try {
        const jsonValue = JSON.stringify(value);
        localStorage.setItem(key, jsonValue);
    } catch (error) {
        console.error("Error saving data to localStorage:", error);
    }
}

/**
 * Loads data from localStorage.
 * @param {string} key - The key of the data to retrieve.
 * @returns {any | null} - The parsed data or null if not found.
 */
export function loadData(key) {
    try {
        const jsonValue = localStorage.getItem(key);
        return jsonValue ? JSON.parse(jsonValue) : null;
    } catch (error) {
        console.error("Error loading data from localStorage:", error);
        return null;
    }
}