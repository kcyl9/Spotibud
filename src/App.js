import './App.css';
import Textbox from './Components/Textbox.js';
import TrackInfo from './Components/TrackInfo.js'
import getSpotifyTrackID from './Controllers/SpotifyQuery.js'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Chatbox from './Components/Chatbox';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      username: ""
    }
  }

  componentDidMount() {
    if (window.location.pathname != "/") {
      getSpotifyTrackID().then( (value) =>
      {
        if(value[0] === true) {
          console.log(value[1])
          console.log(value[1]['artists'].map(value => value['name']).join(", "))
  
          let json = require("./Components/animals.json")
          this.setState({
            willLoad : true,
            loaded : true,
            album: value[1]['album']['name'],
            artURL: value[1]['album']['images'][0]['url'],
            artists: value[1]['artists'].map(value => value['name']).join(", "),
            song: value[1]['name'],
            songURL: value[1]['external_urls']['spotify'],
            songID: value[1]['id'],
            username: "Anonymous " + json[Math.floor(Math.random() * json.length)]
          })
          console.log(this.state.username)
          let art = new Image(640, 640);
          art.src = this.state.artURL;

          // new ColorThief().getPalette(art, 2).then(palette =>
          //   console.log(palette)
          //   // document.body.style.setProperty('--primarybg', palette[0]), 
          //   // document.body.style.setProperty('--secondarybg', palette[1])
          // )



          // console.log("loaded")
          // fetch("animals.json").then(response => response.json()).then(
          //   json => {
          //   }).catch(e => console.log(e))
  
        } else {
          this.setState({
            ...this.state,
            willLoad : false,
            loaded : false,
            album: "None",
            artURL: "None",
            artists: "None",
            song: "None",
            songURL: "None",
            songID: "None",
          })
        }
      });
    }

  }

  handleUrlDrop = (e) =>
  {
    e.preventDefault();
    let form = e.target;
    console.log(new URL(form.elements[0]['value']).pathname)

    window.location.replace(window.location.origin + new URL(form.elements[0]['value']).pathname);
  }

  render() {

    let chatinterface = [];
    if (this.state.loaded) {
      chatinterface.push(<Chatbox roomID={this.state.songID} userID={this.state.username}/>)
      chatinterface.push(<Textbox roomID={this.state.songID} userID={this.state.username}/>)
    } else if (this.state.willLoad) {
      chatinterface.push()// Add loading screen animation here
    } else {
      chatinterface.push()// Add error message here for api fail
    }
    return (
      <div>
        <div style={{display: 'flex', alignItems: 'center'}} className="header">
          <img style={{marginLeft: '5em', marginRight: '1em'}} src={"bud.png"} width="3%" alt="best friend owo"></img>
          <h1 style={{fontSize: "2.5em"}}className="Spotibud"><b>Spotibud</b></h1>
        </div>
        <Router>
        <Switch>
          <Route path="/" exact>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js" integrity="sha256-qM7QTJSlvtPSxVRjVWNM2OfTAz/3k5ovHOKmKXuYMO4=" crossOrigin="anonymous"></script>
            <div className="App">
              <h1 className="App-text1"><b>Drop Song URL Here</b></h1>
              <form onSubmit={this.handleUrlDrop}>
                <input className="App-url-input" type="url" id="url" onSubmit={this.handleUrlDrop}></input>
              </form>
              <img className="App-logo" src={"buds.png"} width = "20%" alt="best friends owo"></img>
              <p className="App-text2"><b>to meet spotibuddies</b></p>
            </div>
          </Route>
          <Route>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js" integrity="sha256-qM7QTJSlvtPSxVRjVWNM2OfTAz/3k5ovHOKmKXuYMO4=" crossOrigin="anonymous"></script>
            <div className="App2">
              <TrackInfo art={this.state.artURL} album={this.state.album} song={this.state.song} artists={this.state.artists}/>
              <div className="chatroom">
                  {chatinterface}
                <p><input className="message" type="text"></input></p>
              </div>
              <footer>
              
                <a href="https://open.spotify.com/track/08ZHVvaudYvVs8ztcKcADf?si=SMphCeZhTFqiBXMR6JKBFg" target="_blank">
                  <img className="spotifybutton" src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png" alt="spotify link" width="3%" ></img>
                </a>
                <p className="text3">Listen on Spotify</p>
              
              </footer>
              
            </div>
          </Route>
        </Switch>
      </Router>
      </div>
      );
  }

}


export default App;
