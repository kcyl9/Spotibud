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
      songID: "None"
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

    let songinfo = [];
    if (this.state.loaded) {
      songinfo.push(<p>{this.state.song} from {this.state.album} by {this.state.artists} </p>)
    }
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <div className="App">
              <body class="body">
                <h1 class="App-text1">Drop Song URL Here</h1>
                <td class="App-url-input"><input type="url"></input></td>
                <img src="buds.svg" width = "20%" alt="best friends owo" class="App-logo"></img>
                <p class="App-text2"><b>to meet spotibuddies</b></p>
              </body>
            </div>
          </Route>
          <Route>
              {songinfo}
              <Chatbox/>
              <Textbox/>
          </Route>
        </Switch>
      </Router>
    );
  }
}


export default App;
