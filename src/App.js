import logo from './logo.svg';
import './App.css';
import Messages from './Components/Messages.js';
import Textbox from './Components/Textbox.js';
import getSpotifyTrackID from './Controllers/SpotifyQuery.js'
import firebaseApp from './Controllers/Firebase.js'

let messagesDummy = []

const dbRefObject = firebaseApp.database().ref().child('spotifyId');
const dbRefMessagesList = dbRefObject.child('messages')

dbRefMessagesList.on("child_added", snap => {
  messagesDummy.push(snap.val().message);
})

function App() {

  getSpotifyTrackID();
  
  const listMessages = messagesDummy.map((text) => <li>{text}</li>);

  return (
    <div className="App">
      <ul id="listMessages">{listMessages}</ul>
      <Textbox/>
    </div>
  );
}

export default App;
