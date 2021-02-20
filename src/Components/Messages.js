import React from "react";
import Message from "./Message.js";


function Messages(props) {
  return (
    <div className="Messages">
      {props.data.map((message) => <li>{message}</li>)}
    </div>
  );
}

export default Messages;
