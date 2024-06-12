import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFnCSf_PPL6vBhjYF0bsBOkQrMGX52L-4",
  authDomain: "sportspoll-cd9db.firebaseapp.com",
  projectId: "sportspoll-cd9db",
  storageBucket: "sportspoll-cd9db.appspot.com",
  messagingSenderId: "938686925729",
  appId: "1:938686925729:web:933a736d509f7f580dd9e0",
  measurementId: "G-VC6VSPJ0FQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Realtime Database
const db = getDatabase(app);

export { db };
