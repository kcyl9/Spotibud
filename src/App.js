import logo from './logo.svg';
import './App.css';
import 'firebase/database';

var firebase = require("firebase/app");
require("firebase/database");

firebase.intializeApp({ 
  apiKey: "AIzaSyCdHlj6bH24v9JyLJmb2uHT4SfgDbk6utY",
  authDomain: "spotibud.firebaseapp.com",
  databaseURL: "https://spotibud-default-rtdb.firebaseio.com",
  projectId: "spotibud",
  storageBucket: "spotibud.appspot.com",
  messagingSenderId: "171308756762",
  appId: "1:171308756762:web:4a538418717f456ebe46a3",
  measurementId: "G-41MB6MS2WG"
})

var database = firebase.database();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
