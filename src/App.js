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
        console.log(value)
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
          alert("We couldn't find the track you were looking for. Redirecting you to our homepage!")
          window.location.replace(window.location.origin)
        }
      });
    }

  }

  handleUrlDrop = (e) =>
  {
    e.preventDefault();
    let form = e.target;
    let redirectURL = new URL(form.elements[0]['value'])
    console.log(redirectURL.host)
    if (redirectURL.host === "spotify.com" || redirectURL.host === "open.spotify.com") {
      window.location.replace(window.location.origin + redirectURL.pathname);
    } else {
      alert("This isn't a Spotify URL!")
    }
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
          <a href={window.location.origin} style={{textDecoration: 'none'}}>
            <div style={{display: 'flex', alignItems: 'center'}} className="header">
              <img style={{marginLeft: '5em', marginRight: '1em', marginBottom: '0'}} src={window.location.origin + "/bud.png"} width="40em" alt="best friend owo"></img>
              <h1 style={{fontSize: "2.5em"}}className="Spotibud"><b>Spotibud</b></h1>
            </div>
          </a>
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
              <p className="App-text2"><b>to meet spotibuddies</b><br/><br/> <a style={{color: 'white', fontSize: '0.5em'}}href="https://github.com/richmondvan/spotibud">View repo here.</a></p>
            </div>
          </Route>
          <Route>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js" integrity="sha256-qM7QTJSlvtPSxVRjVWNM2OfTAz/3k5ovHOKmKXuYMO4=" crossOrigin="anonymous"></script>
            <div className="App2">
              <div style={{display: 'flex', alignItems: 'top', justifyContent: 'center', flexWrap: 'wrap'}}>
                <TrackInfo className="trackinfo" art={this.state.artURL} album={this.state.album} song={this.state.song} artists={this.state.artists}/>
                <div className="chatroom">
                    {chatinterface}
                </div>
              </div>
              <footer>
                <a href={this.state.songURL} target="_blank">
                  <img className="spotifybutton" src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png" alt="spotify link" width="55vw" ></img>
                </a>
                <a className="text3" href={this.state.songURL} style={{color: 'white'}}>Listen on Spotify</a>
                <p className="copyright"> <a href="https://github.com/richmondvan/spotibud">Github repo.</a> © 2021 Ethan Kwon, Kirsty Lau, Erin Lee, Evan Zheng</p>
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
