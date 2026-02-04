import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase, ref, onValue, runTransaction } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkq_zfHbl07lvMuDFpKtUJ4VAqM2T6wp4",
  authDomain: "globe-button.firebaseapp.com",
  databaseURL: "https://globe-button-default-rtdb.firebaseio.com",
  projectId: "globe-button",
  storageBucket: "globe-button.firebasestorage.app",
  messagingSenderId: "336049400416",
  appId: "1:336049400416:web:924c2de5724da0cddeb105",
  measurementId: "G-ELKQ01WVVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

//ref function(database var, field)
const numRef = ref(database, "button-num");

//snapshot - realtime-updates
onValue(numRef, (snapshot) => {
  const value = snapshot.val();
  document.getElementById("number").textContent = value ?? 0;
});

//Increment on click
document.getElementById("main").addEventListener("click", () => {
    runTransaction(numRef, (currentValue) => {
        return (currentValue || 0) + 1;
    });
});

document.getElementById("down").addEventListener("click", () => {
    runTransaction(numRef, currentValue => {
        if (currentValue === null) return 0;
        return currentValue > 0 ? currentValue - 1 : currentValue;
    });
});