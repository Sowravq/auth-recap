// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8YM1YTkM327hKNpVlWfqIYfjoQCoI5GI",
  authDomain: "auth-recap-ae14e.firebaseapp.com",
  projectId: "auth-recap-ae14e",
  storageBucket: "auth-recap-ae14e.appspot.com",
  messagingSenderId: "473756987570",
  appId: "1:473756987570:web:24717748051441c0c7d9ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;