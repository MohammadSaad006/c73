import * as firebase from 'firebase'
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDnaQftXpFgvvfxyto3qn4X4wQfWOJ1gGI",
  authDomain: "class35-c1de5.firebaseapp.com",
  databaseURL:"https://console.firebase.google.com/project/undefined/firestore/data/User%20Stories",
  projectId: "class35-c1de5",
  storageBucket: "class35-c1de5.appspot.com",
  messagingSenderId: "513892294714",
  appId: "1:513892294714:web:8f268be5aad444066e9503"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
