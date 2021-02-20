import React, { Component } from "react";
import Messages from './Messages.js';
import firebaseApp from '../Controllers/Firebase.js';

const dbRefObject = firebaseApp.database().ref().child('Rooms')
let dbRefMessagesList = dbRefObject;

class Chatbox extends Component {

    state = {
        messages: [],
        loadedMessages: [],
        firstKnownKey: ""
    }

    constructor(props) {
        super(props)
        dbRefMessagesList = dbRefObject.child(this.props.roomID)
    }

    childrenVal = [];
    childrenKey = [];

    componentDidMount = () => {
        this.buildMessages();
        // this.loadFirstMessages();
        // console.log(this.childrenVal)
        // console.log(this.state.firstKnownKey)
        // console.log(this.childrenKey)
        // console.log(this.state.loadedMessages)
    }

    // loadFirstMessages() {
    //     dbRefMessagesList.orderByKey().limitToLast(5).once('value').then((snap)=> {
    //         snap.forEach(childSnap => {
    //             this.childrenVal.unshift(childSnap.val().message)
    //             this.childrenKey.unshift(childSnap.key)
    //             this.state.loadedMessages.push({message: childSnap.val().message,
    //                 userID: childSnap.val().userID,
    //                 timestamp: childSnap.val().timestamp})
    //         });
    //         this.state.firstKnownKey = this.childrenKey[this.childrenKey.length - 1];
    //     });
    // }

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