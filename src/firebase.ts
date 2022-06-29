// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCyNOJvtsdt86riUlpyrRUeij_Gt8xccNY',
  authDomain: 'leo-team.firebaseapp.com',
  projectId: 'leo-team',
  storageBucket: 'leo-team.appspot.com',
  messagingSenderId: '1088941342729',
  appId: '1:1088941342729:web:a86ca8f15be94c051df8d8',
  measurementId: 'G-L30NWZ6FX3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
