// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt228D97zCdV_fNjlUZvTr6NCA5JaurNU",
  authDomain: "gvleon-b7b9b.firebaseapp.com",
  projectId: "gvleon-b7b9b",
  storageBucket: "gvleon-b7b9b.appspot.com",
  messagingSenderId: "205243819551",
  appId: "1:205243819551:web:6b0a2c5d9b10ecd2bd972a",
  measurementId: "G-11MPTG41X5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }; // Exporta la instancia de la app y analytics si es necesario