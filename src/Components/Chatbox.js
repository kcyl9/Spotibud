import React, { Component } from "react";
import Messages from './Messages.js';
import firebaseApp from '../Controllers/Firebase.js';
import './Chatbox.css'

const dbRefObject = firebaseApp.database().ref().child('Rooms')
let dbRefMessagesList = dbRefObject;

class Chatbox extends Component {

    state = {
        messages: [],
        loadedMessages: [],
    }

    constructor(props) {
        super(props)
        dbRefMessagesList = dbRefObject.child(this.props.roomID)
    }

    firstKnownKey;
    childrenVal = [];
    childrenKey = [];

    componentDidMount = () => {
        this.buildMessages();
    }

    buildMessages() {
        dbRefMessagesList.on('child_added', snap => {
           if (snap.val().message) {
               let messages = [...this.state.messages]
               messages.push({message: snap.val().message,
                userID: snap.val().userID,
                timestamp: snap.val().timestamp})
               this.setState({ messages })
           }
       })
    }

    render() {
        return (
            <div className="Chatbox">
                <Messages data={this.state.messages} userID={this.props.userID}/>
            </div>
        );
    }
}

export default Chatbox