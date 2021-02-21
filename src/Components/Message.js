import React from "react";


function Message(props) {

  let date = new Date(props.message.timestamp);
  let time = date.getHours() + ":" + date.getMinutes();

  return (
    <div className="Message otherMessage">
      <div>
      <p className="user">{props.message.userID} at {time}: </p> 
      <p className="text">{props.message.message} </p>
      </div>
    </div>
  );
}

export default Message;
