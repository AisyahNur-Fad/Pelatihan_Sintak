// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN7IYYmiRO-lAgwO9avKPG-WCoZDt8xgw",
  authDomain: "pelatihan-sintak-3d6e5.firebaseapp.com",
  projectId: "pelatihan-sintak-3d6e5",
  storageBucket: "pelatihan-sintak-3d6e5.firebasestorage.app",
  messagingSenderId: "723872766777",
  appId: "1:723872766777:web:397d7381bb0fa2cdf7a6e8",
  measurementId: "G-BHZH3NWQMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
// const analytics = getAnalytics(app);
export{db};