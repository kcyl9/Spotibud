import logo from './logo.svg';
import './App.css';
import Messages from './Components/Messages.js';
import Textbox from './Components/Textbox.js';
import getSpotifyTrackID from './Controllers/SpotifyQuery.js'
import firebaseApp from './Controllers/Firebase.js'
import Chatbox from './Components/Chatbox';

function App() {

  getSpotifyTrackID();

  return (
    <div className="App">
      <Chatbox/>
      <Textbox/>
    </div>
  );
}

export default App;
