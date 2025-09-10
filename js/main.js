// --- Element Selections ---
// Screens
const welcomeScreen = document.querySelector('#welcome-screen');
const appContainer = document.querySelector('#app-container');

// Modals & Overlays
const modalOverlay = document.querySelector('#modal-overlay');
const profileCreationModal = document.querySelector('#profile-creation-modal');

// Buttons
const newProfileBtn = document.querySelector('#new-profile-btn');
const saveProfileBtn = document.querySelector('#save-profile-btn');

// Form Inputs
const usernameInput = document.querySelector('#username-input');

// More element selections will be added here as we build...

// --- Event Listeners ---
newProfileBtn.addEventListener('click', () => {
    showModal(profileCreationModal);
});

// --- Functions ---
function showModal(modalElement) {
    modalOverlay.classList.remove('hidden');
    modalElement.classList.remove('hidden');
}

function hideModal(modalElement) {
    modalOverlay.classList.add('hidden');
    modalElement.classList.add('hidden');
}

