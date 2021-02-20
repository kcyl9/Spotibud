import React from "react";


function OwnMessage(props) {
  console.log(new Date(props.message.timestamp));

  return (
    <div className="Message ownMessage">
      <div>
      <p className="user">{props.message.userID} (That's you!) said: </p> 
      <p className="text"> {props.message.message} </p>
      <p className="timestamp"> {new Date(props.message.timestamp).toString()}</p>
      </div>
    </div>
  );
}

export default OwnMessage;
