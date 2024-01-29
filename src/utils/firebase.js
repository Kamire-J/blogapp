// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.FIREBASE,
  authDomain: "myblog-4f370.firebaseapp.com",
  projectId: "myblog-4f370",
  storageBucket: "myblog-4f370.appspot.com",
  messagingSenderId: "449950135544",
  appId: "1:449950135544:web:4a3029766c4d91c780b70d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);