import React from "react";
import Message from "./Message.js";
import OwnMessage from "./OwnMessage.js"



function Messages(props) {
  let messages = [];
  props.data.forEach((element, index) => {
    if (element.userID === props.userID) {
      console.log(element.userID);
      console.log(props.userID);
      messages.push(<OwnMessage message={element} key={index}/>)
    } else {
      messages.push(<Message message={element} key={index}/>)
    }
  });

  return (
    <div className="Messages">
      {messages}
    </div>
  );
}

export default Messages;
