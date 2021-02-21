import React, { useState, useEffect } from "react";
import Message from "./Message.js";
import OwnMessage from "./OwnMessage.js"



function Messages(props) {
  let messages = [];
  let messageEnd; 
  const [something, setSomething] = useState(0);

  useEffect(() => {
    scrollToBottom();
  })

  props.data.forEach((element, index) => {
    if (element.userID === props.userID) {
      console.log(element.userID);
      console.log(props.userID);
      messages.push(<OwnMessage message={element} key={index}/>)
    } else {
      messages.push(<Message message={element} key={index}/>)
    }
  });

  if (messages.length === 0) {
    messages.push(<p>No messages were found! Be the first to start a conversation.</p>)
  }
  function scrollToBottom() {
    messageEnd.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="Messages">
      {messages}
      <div style={{ float:"left", clear:"both" }} ref={(el) => { messageEnd = el; }}></div>
    </div>
  );
}

export default Messages;
