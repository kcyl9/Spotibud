import React from "react";
import Message from "./Message.js";


function Messages(props) {

  return (
    <div className="Messages">
      {props.data.map(({author, timestamp, message}) => <Message author={author} timestamp={timestamp} message = {message}/>)}
    </div>
  );
}

export default Messages;
