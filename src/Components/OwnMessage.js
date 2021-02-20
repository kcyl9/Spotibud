import React from "react";


function OwnMessage(props) {
  console.log(new Date(props.message.timestamp));

  return (
    <div className="Message ownMessage">
      <p className="user">{props.message.userID} (That's you!) said: </p> 
      <p className="message"> {props.message.message} </p>
      <p className="timestamp"> at {new Date(props.message.timestamp).toString()}</p>
    </div>
  );
}

export default OwnMessage;
