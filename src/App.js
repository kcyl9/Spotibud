import logo from './logo.svg';
import './App.css';
import Messages from './Components/Messages.js';

function App() {

  let messagesDummy = [
    {author: "Author A",
     timestamp: "13:61",
     message: "message 1"},
    {author: "Author B",
     timestamp: "13:62",
     message: "message 2"},
    {author: "Author C",
     timestamp: "13:63",
     message: "message 3"},
    {author: "Author D",
     timestamp: "13:64",
     message: "message 4"},
  ]

  return (
    <div className="App">
      <Messages data={messagesDummy}/>
      <Textbox/>
    </div>
  );
}

export default App;
