import React from "react";


function Message(props) {

  return (
    <div className="Message">
      <div><p>{props.message}</p></div>
    </div>
  );
}

export default Message;
