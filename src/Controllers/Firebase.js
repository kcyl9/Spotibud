import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCdHlj6bH24v9JyLJmb2uHT4SfgDbk6utY",
    authDomain: "spotibud.firebaseapp.com",
    databaseURL: "https://spotibud-default-rtdb.firebaseio.com",
    projectId: "spotibud",
    storageBucket: "spotibud.appspot.com",
    messagingSenderId: "171308756762",
    appId: "1:171308756762:web:4a538418717f456ebe46a3",
    measurementId: "G-41MB6MS2WG"
  }
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  var database = firebase.database();

export default firebaseConfig;