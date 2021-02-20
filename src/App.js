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
  //document.body.style.backgroundImage = "url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js')"

  return (
    <div className="App">
      <h1 class="App-text1">Drop Song URL Here</h1>
      <td class="App-url-input"><input type="url"></input></td>
      <img src="buds.svg" width = "20%" alt="best friends owo" class="App-logo"></img>
      <p class="App-text2"><b>to meet spotibuddies</b></p>
      {/* <ul id="listMessages">{listMessages}</ul>
      <Textbox/> */}
    </div>
  );
}

export default App;
