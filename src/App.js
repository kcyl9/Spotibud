import logo from './logo.svg';
import './App.css';
import Messages from './Components/Messages.js';
import Textbox from './Components/Textbox.js';
import getSpotifyTrackID from './Controllers/SpotifyQuery.js'
import firebaseApp from './Controllers/Firebase.js'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Chatbox from './Components/Chatbox';

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
      songURL: "None",
      songID: "None",
      songInfo: []
    }
  }

  componentDidMount() {
    if (window.location.pathname != "/") {
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
            songURL: value[1]['external_urls']['spotify'],
            songID: value[1]['id']
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
            songURL: "None",
            songID: "None"
          })
        }
      });
    }
  }

  render() {

    console.log(window.location.pathname)

    if (this.state.loaded) {
      let infoObject = {
        song: this.state.song,
        album: this.state.album,
        artists: this.state.artists
      }
      this.state.songInfo.push(infoObject)
    }
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js" integrity="sha256-qM7QTJSlvtPSxVRjVWNM2OfTAz/3k5ovHOKmKXuYMO4=" crossOrigin="anonymous"></script>
            <div class="App">
              <h1 class="App-text1">Drop Song URL Here</h1>
              <p class="App-url-input"><input type="url"></input></p>
              <img class="App-logo" src="buds.svg" width = "20%" alt="best friends owo"></img>
              <p class="App-text2"><b>to meet spotibuddies</b></p>
            </div>
          </Route>
          <Route>
              {this.state.songInfo.map(info => <p key={info.artists}>{info.song} from {info.album} by {info.artists} </p>)}
              <Chatbox songID={this.state.songID}/>
              <Textbox songID={this.state.songID}/>
          </Route>
        </Switch>
      </Router>
    );
  }
}


export default App;
