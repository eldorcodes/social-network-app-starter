// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA_DrqGcY375nomDSUX8V-vt1iyX2r9C-k",
  authDomain: "quickchat-8c0aa.firebaseapp.com",
  projectId: "quickchat-8c0aa",
  storageBucket: "quickchat-8c0aa.appspot.com",
  messagingSenderId: "254383632955",
  appId: "1:254383632955:web:408456c3f65c376ca7221e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;