import React, { Component } from "react";
import Messages from './Messages.js';
import firebaseApp from '../Controllers/Firebase.js';

const dbRefObject = firebaseApp.database().ref().child('Rooms')
let dbRefMessagesList = dbRefObject;

class Chatbox extends Component {

    state = {
        messages: [],
        loadedMessages: []
    }

    constructor(props) {
        super(props)
        dbRefMessagesList = dbRefObject.child(this.props.roomID)
    }


    componentDidMount = () => {
        this.buildMessages();
        this.loadMessages();
    }

    loadMessages() {
        for (let index = 0; index < this.state.messages.length/2; index++) {
            try {
                this.state.loadedMessages.push(this.state.messages.pop())
                console.log(this.state.loadedMessages)
                console.log(this.state.messages)
            } catch (error) {
                console.log("no more to load")
            }
        }
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