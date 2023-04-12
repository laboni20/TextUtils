import React, { useState } from 'react'

export default function TextForm(props) {
    //const [text, setText] = useState("Enter your text here..");
    const [text, setText] = useState("");
    const clickhandleUp = ()=>{
        console.log("You have clicked the button" + text);
        let newtext = text.toUpperCase();
        //setText("Your text is changed");
        setText(newtext);
        props.showAlert("Coverted to Uppercase!", "success");
    }
    const clickhandleLow = ()=>{
        console.log("You have clicked the button" + text);
        let newtext = text.toLowerCase();
        //setText("Your text is changed"); 
        setText(newtext);
        props.showAlert("Coverted to Lowercase!", "success");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(msg);
        console.log("Hey speak clicked");
      }
      const copyText = () => {
        let text1 = document.getElementById("myBox");
        text1.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Copied text successfully!", "success");
    }
    const titleCaseHandler = () => {
    let newText = text.toUpperCase() + text.toLowerCase();
    setText(newText);
  };
    const changehandle = (event)=>{
        //console.log("You have changed the text");
        setText(event.target.value);
    }
  return (
    <>
    <div className='container'>
    <h2 className={props.mode==='dark'?'light':'dark'}>{props.heading}</h2>
    <div className="mb-3">
    <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} value={text} onChange={changehandle} id="myBox" rows="8"></textarea>
    </div>
    <button className='btn btn-primary mx-2' onClick={clickhandleUp}>Convert to Uppercase</button>
    <button className='btn btn-primary mx-2' onClick={clickhandleLow}>Convert to Lowercase</button>
    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    <button className='btn btn-primary mx-2' onClick={copyText}>Copy text to Clipboard</button>
    <button className='btn btn-primary mx-2' onClick={titleCaseHandler}>Title Case</button>

    </div>
    <div className={`container my-3 ${props.mode==='dark'?'light':'dark'}`}>
    <h2>Your text summary</h2>
    <p className='my-2'>{text===""?0:text.trim().split(" ").length} words and {text.length} characters</p>
    <p className='my-2'>{0.008* text.split(" ").length} minutes read</p>
    <h3>Preview:</h3>
    <p>{text}</p>
    </div>

    </>
  )
}
