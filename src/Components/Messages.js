import React from "react";
import Message from "./Message.js";


function Messages(props) {
  return (
    <div className="Messages">
      {props.data.map((message) => <Message message={message}/>)}
    </div>
  );
}

export default Messages;
