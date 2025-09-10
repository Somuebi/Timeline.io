// js/profile.js
import { saveData } from './storage.js';

const PROFILE_KEY = 'timelineAppUser';

/**
 * Creates a new user profile object and saves it to localStorage.
 * @param {string} username - The user's chosen name.
 * @returns {object} The newly created profile object.
 */
export function createProfile(username) {
    const newProfile = {
        username: username,
        avatar: null, // Can be implemented later
        timelines: []
    };
    
    saveData(PROFILE_KEY, newProfile);
    console.log('Profile created and saved:', newProfile);
    return newProfile;
}

/**
 * Loads the user profile from localStorage.
 * @returns {object | null} The profile object or null if none exists.
 */
export function loadProfile() {
    return loadData(PROFILE_KEY);
}