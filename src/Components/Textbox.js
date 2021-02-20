import React from "react";

function Textbox() {

    return (

      <div className="Textbox">
          <input type="text" id="message" placeholder="Message your Spotibuds"></input>
          <button id="send">Send!</button>
      </div>
    );
  }
  
  export default Textbox;