import React, { Component } from "react";
import Messages from './Messages.js';
import firebaseApp from '../Controllers/Firebase.js';

let dbRefObject;
let dbRefMessagesList;

class Chatbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
    }

    newMessage = []

    componentDidUpdate = (previousProps, previousState) => {
        if (previousProps.songID != this.props.songID) {
            this.buildMessages();
        }
    }

    buildMessages() {
        dbRefObject = firebaseApp.database().ref().child(this.props.songID);
        dbRefMessagesList = dbRefObject.child('messages')
        dbRefMessagesList.off('child_added')
        this.newMessage = []
        dbRefMessagesList.on('child_added', snap => {
            if (snap.val().message) {
               this.newMessage.push(snap.val().message)
               this.setState( {messages: this.newMessage} )
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