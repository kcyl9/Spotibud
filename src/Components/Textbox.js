import React, {Component} from "react";
import firebaseApp from "../Controllers/Firebase";

class Textbox extends Component {
  state={
    message : ""
  }

  handleText=e=>{
    this.setState({
      message : e.target.value
    })
  }

  handleSubmit=e=>{
    let messageRef = firebaseApp.database().ref('spotifyId/messages').orderByKey().limitToLast
    const text = {
      message: this.state.message
    }
    firebaseApp.database().ref('spotifyId/messages').push(text)
    this.setState({
      message : ""
    })
  }

  render() {
    return (
      <div className="Textbox">
          <input type="text" onChange={this.handleText} id="message" placeholder="Message your Spotibuds"></input>
          <button onClick={this.handleSubmit} id="send">Send!</button>
      </div>
    );
  } 
}
  
export default Textbox;