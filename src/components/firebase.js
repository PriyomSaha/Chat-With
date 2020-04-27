import firebase  from 'firebase/app';
import 'firebase/auth'
import'firebase/database';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: process.env.apikey,
    authDomain: process.env.authDomain,
    databaseURL: "https://test-f14d3.firebaseio.com",
    projectId: "test-f14d3",
    storageBucket: "test-f14d3.appspot.com",
    messagingSenderId: "883461807260",
    appId: "1:883461807260:web:abadd5c2e8449c72a5e159",
    measurementId: "G-MWCHN3KPJR"
  };
  // Initialize Firebase
  export const firebaseApp  = firebase.initializeApp(firebaseConfig);
  export const database = firebase.database();