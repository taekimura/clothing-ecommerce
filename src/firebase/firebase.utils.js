import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBFULzAQDIMDq6E2G4RmhQcyD1S1eTPmWg",
    authDomain: "clothing-website-ad4a6.firebaseapp.com",
    databaseURL: "https://clothing-website-ad4a6.firebaseio.com",
    projectId: "clothing-website-ad4a6",
    storageBucket: "clothing-website-ad4a6.appspot.com",
    messagingSenderId: "356614758956",
    appId: "1:356614758956:web:9872982bd052d0e42f6789",
    measurementId: "G-JEFCB73TE9"
  };

firebase.initializeApp(config);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;