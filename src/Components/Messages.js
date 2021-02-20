import React from "react";
import Message from "./Message.js";
import OwnMessage from "./OwnMessage.js"



function Messages(props) {
  let messages = [];
  props.data.forEach(element => {
    if (element.userID === props.userID) {
      messages.push(<OwnMessage message={element}/>)
    } else {
      messages.push(<Message message={element}/>)
    }
  });

  return (
    <div className="Messages">
      {props.data.map((message, index) => <Message key={index} message={message}/>)}
    </div>
  );
}

export default Messages;
