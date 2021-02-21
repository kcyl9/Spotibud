import React, {Component} from "react";
import firebaseApp from "../Controllers/Firebase";
import firebase from 'firebase'

class Textbox extends Component {

  databaseAddress = "Rooms/" + this.props.roomID;

  handleSubmit=e=>{
    e.preventDefault();
    const text = {
      message: e.target.elements[0]['value'],
      userID: this.props.userID,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    }
    e.target.elements[0].value="";
    firebaseApp.database().ref(this.databaseAddress).push(text)
    this.setState({
      message : ""
    })
  }

  render() {
    return (
      <div className="Textbox">
        <form onSubmit={this.handleSubmit}>
          <input className="textbox-input" type="text" id="message" placeholder="Message your Spotibuddies"></input>
          <button type="submit" className="textbox-send" id="send">Send!</button>
        </form>
      </div>
    );
  } 
}
  
export default Textbox;