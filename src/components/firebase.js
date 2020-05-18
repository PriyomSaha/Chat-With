import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDjFSYZW789XO6zDuvlcB1YNrlbNv157z4",
    authDomain: "test-f14d3.firebaseapp.com",
    databaseURL: "https://test-f14d3.firebaseio.com",
    projectId: "test-f14d3",
    storageBucket: "test-f14d3.appspot.com",
    messagingSenderId: "883461807260",
    appId: "1:883461807260:web:abadd5c2e8449c72a5e159",
    measurementId: "G-MWCHN3KPJR"
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const database = firebase.database();