import React, {Component} from "react";
import firebaseApp from "../Controllers/Firebase";
import firebase from 'firebase'

class Textbox extends Component {
  state={
    message : ""
  }

  handleText=e=>{
    this.setState({
      message : e.target.value
    })
  }

  databaseAddress = "Rooms/" + this.props.roomID;

  handleSubmit=e=>{
    const text = {
      message: this.state.message,
      userID: this.props.userID,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    }
    firebaseApp.database().ref(this.databaseAddress).push(text)
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