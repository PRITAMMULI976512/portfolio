// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsTKRQ9J9YNlL5q5KyrZ2T2xVoa_riu2k",
  authDomain: "portfolio-851f8.firebaseapp.com",
  projectId: "portfolio-851f8",
  storageBucket: "portfolio-851f8.appspot.com",
  messagingSenderId: "379721100960",
  appId: "1:379721100960:web:7f330f1945ffbfa65ea3c5",
  measurementId: "G-9PF1WRGRF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);