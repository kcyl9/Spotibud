import React from "react";


function OwnMessage(props) {
  let date = new Date(props.message.timestamp);
  let time = date.getHours() + ":";
  if (date.getMinutes() <= 9) {
    time = time + "0";
  }
  time = time + date.getMinutes();
  return (
    <div className="Message ownMessage">
      <div>
      <p className="user">{props.message.userID} at {time}: </p> 
      <p className="text">{props.message.message} </p>
      </div>
    </div>
  );
}

export default OwnMessage;
