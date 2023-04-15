import React, { useState } from 'react'

export default function TextForm(props) {
    //const [text, setText] = useState("Enter your text here..");
    const [text, setText] = useState("");
    const clickhandleUp = ()=>{
        let newtext = text.toUpperCase();
        //setText("Your text is changed");
        setText(newtext);
        props.showAlert("Coverted to Uppercase!", "success");
    }
    const clickhandleLow = ()=>{
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
      }
      const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied text successfully!", "success");
    }
    const titleCaseHandler = () => {
    let newText = text.toUpperCase() + text.toLowerCase();
    setText(newText);
  };
    const changehandle = (event)=>{
        setText(event.target.value);
    }
  return (
    <>
    <div className='container'>
    <h2 className={props.mode==='dark'?'light':'dark'}>{props.heading}</h2>
    <div className="mb-3">
    <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} value={text} onChange={changehandle} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={clickhandleUp}>Convert to Uppercase</button>
    <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={clickhandleLow}>Convert to Lowercase</button>
    <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={copyText}>Copy text to Clipboard</button>
    <button disabled={text.length===0} className='btn btn-primary  my-2 mx-2' onClick={titleCaseHandler}>Title Case</button>

    </div>
    <div className={`container my-3 ${props.mode==='dark'?'light':'dark'}`}>
    <h2>Your text summary</h2>
    <p className='my-2'>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.trim().length} characters</p>
    <p className='my-2'>{0.008* text.split(/\s/).filter((element)=>{return element.length!==0}).length} minutes read</p>
    <h3>Preview:</h3>
    <p>{text}</p>
    </div>

    </>
  )
}
