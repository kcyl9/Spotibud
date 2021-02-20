import React from "react";


function Message(props) {

  return (
    <div className="Message">
      <div><h5>{props.author} wrote at {props.timestamp}:</h5> <p>{props.message}</p></div>
    </div>
  );
}

export default Message;
