import React, {Component} from "react";
import firebaseApp from "../Controllers/Firebase";
import firebase from 'firebase'

class Textbox extends Component {

  databaseAddress = "Rooms/" + this.props.roomID;

  handleSubmit=e=>{
    e.preventDefault();
    let messageText = e.target.elements[0]['value'];
    if (messageText !== "") {
      const text = {
        message: messageText,
        userID: this.props.userID,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      }
      e.target.elements[0].value="";
      firebaseApp.database().ref(this.databaseAddress).push(text)
      this.setState({
        message : ""
      })
    }
  }

  render() {
    return (
      <div className="Textbox">
        <form onSubmit={this.handleSubmit} style={{marginTop: '-1em'}}>
          <input className="textbox-input" type="text" id="message" placeholder="Message your Spotibuddies <3"></input>
          <button className="textbox-send" type="submit" id="send">SEND</button>
        </form>
      </div>
    );
  } 
}
  
export default Textbox;