import logo from './logo.svg';
import './App.css';
import Messages from './Components/Messages.js';
import Textbox from './Components/Textbox.js';
import getSpotifyTrackID from './Controllers/SpotifyQuery.js'
import firebaseApp from './Controllers/Firebase.js'
import React from 'react'

let messagesDummy = []

const dbRefObject = firebaseApp.database().ref().child('spotifyId');
const dbRefMessagesList = dbRefObject.child('messages')

dbRefMessagesList.on("child_added", snap => {
  messagesDummy.push(snap.val().message);
})

const listMessages = messagesDummy.map((text) => <li>{text}</li>);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      willLoad : true,
      loaded : false,
      album: "None",
      artURL: "None",
      artists: "None",
      song: "None",
      songURL: "None"
    }
  }

  componentDidMount() {
    getSpotifyTrackID().then( (value) =>
    {
      if(value[0] === true) {
        let trackData = {};
        console.log(value[1])
        console.log(value[1]['artists'].map(value => value['name']).join(", "))

        this.setState({
          willLoad : true,
          loaded : true,
          album: value[1]['album']['name'],
          artURL: value[1]['album']['images'][0]['url'],
          artists: value[1]['artists'].map(value => value['name']).join(", "),
          song: value[1]['name'],
          songURL: value[1]['external_urls']['spotify']
        })

        console.log(this.state)

      } else {
        this.setState({
          willLoad : false,
          loaded : false,
          album: "None",
          artURL: "None",
          artists: "None",
          song: "None",
          songURL: "None"
        })
      }
    });
  }

  render() {

    let songinfo = [];
    if (this.state.loaded) {
      songinfo.push(<p>{this.state.song} from {this.state.album} by {this.state.artists} </p>)
    }
    return (
      <div className="App">
        {songinfo}
        <ul id="listMessages">{listMessages}</ul>
        <Textbox/>
      </div>
    );
  }
  

}

export default App;
