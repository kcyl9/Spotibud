import React from "react";

function Messages() {
  

  return (

    <div className="Messages">
      {props.data.map(({author, timestamp, message}) => <div><h5>{author} wrote at {timestamp}:</h5> <p>{message}</p></div>)}
    </div>
  );
}

export default Messages;
