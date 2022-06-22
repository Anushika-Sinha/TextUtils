import React, { useState } from 'react'


export default function TextForm(props) {

     const noOfWords = ()=>{
         let newText = text.trim();
         if(newText.length<1){
             let words = 0;
             return words;
            }
            else{
                let words = newText.split(/\s+/).length;
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
            props.showAlert("Converted to Lower Case", "success");
        }
        const handleInitClick = ()=>{
            let newText = text.toLowerCase();
            let words = newText.split(/\s+/);
            newText = '';
            words.forEach(function init(word){
                word = word.charAt(0).toUpperCase() + word.substring(1);
                newText = newText + " " + word;
            });
            newText = newText.trim();
            setText(newText);
        }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Cleared", "danger");
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied", "info");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces.", "info");
    }
    const handleOnChange = (event)=>{
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
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleInitClick}>Convert to InitCap</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Extra Space Remove</button>
    </div>
    <div className="container my-3">
        <h1>Your text Summary</h1>
        <p>{noOfWords()} words and {text.length} characters.</p>
        <p>{0.008 * noOfWords()} minutes read.</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
