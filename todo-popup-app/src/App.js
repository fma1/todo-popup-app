import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Popup from 'react-popup';
import timestring from 'timestring';
import './App.css';

// TODO: Add styling
function App() {
  const [content, setContent] = useState("");
  const [time, setTime] = useState("");
 
  const handleClick = e => {
    e.preventDefault();
    if (!content || !time) return;
    setTimeout(() => Popup.alert(content), timestring(time)*1000)
    setContent("");
    setTime("");
  };
    
  // TODO: Make popup show in separate dialog
  return (
    <div className="App">
      <Popup />
      <span>Enter reminder:</span><br />
      <TextareaAutosize
        name="textValue"
        value={content}
        onChange={e => setContent(e.target.value)}
        minRows={10}
      /><br />
      <span>Enter time from now:</span><br />
      <input
        type="text"
        className="input"
        value={time}
        onChange={e => setTime(e.target.value)}
      />< br/>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
