import React from "react";


function Message(props) {

  return (
    <div className="Message">
      <div><p>{props.message.userID} said: {props.message.message} at {new Date(props.message.timestamp).toString()}</p></div>
    </div>
  );
}

export default Message;
