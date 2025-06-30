// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js";

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC6woNHLsAC6GEr1vDJ53vEMjo2eV5BpSA",
  authDomain: "shimmerslimes-fe289.firebaseapp.com",
  projectId: "shimmerslimes-fe289",
  storageBucket: "shimmerslimes-fe289.firebasestorage.app",
  messagingSenderId: "82320008781",
  appId: "1:82320008781:web:a47f0b10c05a8cbdfa1e04",
  measurementId: "G-Z1SZQ5KJ0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Select form and textarea elements
const form = document.getElementById('messageForm');
const messageInput = document.getElementById('message');

// Handle form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    const message = messageInput.value.trim();  // Get the message value from the textarea

    if (message) {
        try {
            // Add the message to Firestore collection "messages"
            await addDoc(collection(db, "orders"), {
                message: message,
                timestamp: serverTimestamp() // Get the server timestamp
            });

            // Clear the input after submitting
            messageInput.value = '';
            alert('Order submitted! See you soon!');
        } catch (error) {
            console.error("Error adding message: ", error);
        }
    } else {
        alert("Please write something before submitting.");
    }
});
