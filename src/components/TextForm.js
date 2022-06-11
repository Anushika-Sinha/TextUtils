import React, { useState } from 'react'


export default function TextForm(props) {
    
    String.prototype.initCap = function () {
        return this.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (m) {
           return m.toUpperCase();
        });
     };
    const noOfWords = ()=>{
        let newText = text.trim();
        if(newText.length<1){
            let words = 0;
            return words;
        }
        else{
        let words = newText.split(" ").length;
        return words;
        }
        
    }
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        console.log(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleInitClick = ()=>{
        let newText = text.initCap();
        setText(newText);
        console.log(newText);
        props.showAlert("Converted to Init Case", "success");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        console.log(newText);
        props.showAlert("Cleared", "danger");
    }
    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied", "info");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces.", "info");
    }
    const handleOnChange = (event)=>{
        console.log("Uppercase bhjk");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');

  return (
      <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleInitClick}>Convert to InitCap</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Extra Space Remove</button>
    </div>
    <div className="container my-3">
        <h1>Your text Summary</h1>
        <p>{noOfWords()} words and {text.length} characters.</p>
        <p>{0.008 * noOfWords()} minutes read.</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter text to preview"}</p>
    </div>
    </>
  )
}
