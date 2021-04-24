import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA_UrSQxeGOvbqAYMO6xXP3s54Iybpvht8",
  authDomain: "delirium-app.firebaseapp.com",
  projectId: "delirium-app",
  storageBucket: "delirium-app.appspot.com",
  messagingSenderId: "669458289670",
  appId: "1:669458289670:web:3f94294c72e9e215d79f87",
  measurementId: "G-B2W4N2MW2D"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

firebase.firestore()

export default firebase;

