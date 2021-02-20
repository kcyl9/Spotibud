import React from "react";


function OwnMessage(props) {
  console.log(new Date(props.message.timestamp));

  return (
    <div className="Message ownMessage">
      <div><p>{props.message.userID} (That's you!) said: {props.message.message} at {new Date(props.message.timestamp).toString()}</p></div>
    </div>
  );
}

export default OwnMessage;
