// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBYhdMocEksNecSln-gNMRXajkxAVKrKY",
  authDomain: "e-solar-f3581.firebaseapp.com",
  projectId: "e-solar-f3581",
  storageBucket: "e-solar-f3581.appspot.com",
  messagingSenderId: "873629174709",
  appId: "1:873629174709:web:61c884c48246fc8fb367fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
