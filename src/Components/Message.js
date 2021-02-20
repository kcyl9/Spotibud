import React from "react";


function Message(props) {

  return (
    <div className="Message otherMessage">
      <p className="user">{props.message.userID} said: </p> 
      <p>{props.message.message} </p>
      <p className="timestamp"> at {new Date(props.message.timestamp).toString()}</p>
    </div>
  );
}

export default Message;
