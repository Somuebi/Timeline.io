// js/main.js
import { createProfile, loadProfile } from './profile.js';

// DOM Elements
const profileCreationView = document.getElementById('profile-creation-view');
const mainView = document.getElementById('main-view');
const profileForm = document.getElementById('profile-form');
const usernameInput = document.getElementById('username-input');
const welcomeMessage = document.getElementById('welcome-message');

/**
 * Updates the UI to show the main view for an existing user.
 * @param {object} profile - The user's profile object.
 */
function showMainView(profile) {
    welcomeMessage.textContent = `Welcome, ${profile.username}!`;
    profileCreationView.classList.add('hidden');
    mainView.classList.remove('hidden');
}

/**
 * Updates the UI to show the profile creation form for a new user.
 */
function showProfileCreationView() {
    profileCreationView.classList.remove('hidden');
    mainView.classList.add('hidden');
}

// --- Event Listeners and Initialization ---

// Handle the profile creation form submission
profileForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the browser from reloading the page
    const username = usernameInput.value.trim();

    if (username) {
        const newProfile = createProfile(username);
        showMainView(newProfile);
    }
});

// Main function to run when the app starts
function initializeApp() {
    const userProfile = loadProfile();
    if (userProfile) {
        console.log('Profile found:', userProfile);
        showMainView(userProfile);
    } else {
        console.log('No profile found. Showing creation view.');
        showProfileCreationView();
    }
}

// Run the app
initializeApp();