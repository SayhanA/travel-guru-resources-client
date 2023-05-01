// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7cPM08YY7UHNRdV4hLdfeF0QYB52ksh4",
  authDomain: "travel-guro-resources.firebaseapp.com",
  projectId: "travel-guro-resources",
  storageBucket: "travel-guro-resources.appspot.com",
  messagingSenderId: "277993087991",
  appId: "1:277993087991:web:79305ee27f3c2611f484f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;