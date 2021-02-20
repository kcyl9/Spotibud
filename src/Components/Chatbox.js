import React, { Component } from "react";
import Messages from './Messages.js';
import firebaseApp from '../Controllers/Firebase.js';

const dbRefObject = firebaseApp.database().ref().child('spotifyId');
const dbRefMessagesList = dbRefObject.child('messages')

class Chatbox extends Component {
    state = {
        messages: ["hi", "interesting"]
    }

    componentDidMount = () => {
        this.buildMessages();
    }

    buildMessages() {
       dbRefMessagesList.on('child_added', snap => {
           if (snap.val().message) {
               let messages = [...this.state.messages]
               messages.push(snap.val().message)
               this.setState({ messages })
           }
       })
    }

    render() {
        return (
            <div className="Chatbox">
                <Messages data={this.state.messages}/>
            </div>
        );
    }
}

export default Chatbox