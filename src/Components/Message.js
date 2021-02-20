import React from "react";


function Message(props) {

  return (
    <div className="Message otherMessage">
      <div>
      <p className="user">{props.message.userID} said: </p> 
      <p className="text">{props.message.message} </p>
      <p className="timestamp"> {new Date(props.message.timestamp).toString()}</p>
      </div>
    </div>
  );
}

export default Message;
