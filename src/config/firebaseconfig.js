// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDAKA8YPNzlYJU2uSBlPVXpsmulhchPHAg",
    authDomain: "fir-todo-f6b68.firebaseapp.com",
    projectId: "fir-todo-f6b68",
    storageBucket: "fir-todo-f6b68.appspot.com",
    messagingSenderId: "916257903523",
    appId: "1:916257903523:web:665619449a119d6826c016",
    measurementId: "G-94LPLB1R6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;