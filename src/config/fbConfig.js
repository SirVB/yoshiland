import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/auth'

export const fbConfig = {
    apiKey: "AIzaSyACk9e3GBHzSJ3JjJh_MTqh7ks4hrJmC6s",
    authDomain: "yoshiland-a21d9.firebaseapp.com",
    databaseURL: "https://yoshiland-a21d9.firebaseio.com",
    projectId: "yoshiland-a21d9",
    storageBucket: "yoshiland-a21d9.appspot.com",
    messagingSenderId: "764763908175",
    appId: "1:764763908175:web:f2d64b859dd0df6850223a",
    measurementId: "G-Z3W1DNCJQ9"
  };
  // Initialize Firebase
  firebase.initializeApp(fbConfig);
  firebase.analytics();
  firebase.firestore();

  const db = firebase.firestore();
  export { db };
  export default firebase;