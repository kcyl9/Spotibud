import './App.css';
import Textbox from './Components/Textbox.js';
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
    }
  }

  componentDidMount() {
    if (window.location.pathname != "/") {
      getSpotifyTrackID().then( (value) =>
      {
        if(value[0] === true) {
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
            songID: value[1]['id'],
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
    let elements = form.elements;
    console.log(new URL(form.elements[0]['value']).pathname)

    window.location.replace(window.location.origin + new URL(form.elements[0]['value']).pathname);
  }

  render() {

    let chatinterface = [];
    if (this.state.loaded) {
      chatinterface.push(<p>{this.state.song} from {this.state.album} by {this.state.artists} </p>)
      chatinterface.push(<Chatbox/>)
      chatinterface.push(<Textbox/>)
    } else if (this.state.willLoad) {
      chatinterface.push()// Add loading screen animation here
    } else {
      chatinterface.push()// Add error message here for api fail
    }
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js" integrity="sha256-qM7QTJSlvtPSxVRjVWNM2OfTAz/3k5ovHOKmKXuYMO4=" crossorigin="anonymous"></script>
            <div class="App">
              <h1 class="App-text1">Drop Song URL Here</h1>
              <form onSubmit={this.handleUrlDrop}>
                <input class="App-url-input" type="url" id="url" onSubmit={this.handleUrlDrop}></input>
              </form>
              <img class="App-logo" src={"buds.png"} width = "20%" alt="best friends owo"></img>
              <p class="App-text2"><b>to meet spotibuddies</b></p>
            </div>
          </Route>
          <Route>
            <div class="App">
              {chatinterface}
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }

}


export default App;
