import React, {useState} from 'react'

function TextUtils(props) {
  const [text, setText] = useState("Enter any text...");

  let convertToUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }

  let convertToLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }

  let reverseText = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
  }

  let clearAll = () => {
    setText("");
  }

  let handleOnChange = (event) => {
    setText(event.target.value);
  }

  let words = 0;
  let arrOfWords = text.split(" ");
  
  for (let word of arrOfWords){
    if (word !== ""){
      words += 1;
    }
  }

  return (
    <>
    <div className="container mt-4 mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        <button className="btn btn-primary mt-3" onClick={convertToUppercase}>Convert to Uppercase</button>
        <button className="btn btn-primary mt-3 mx-2" onClick={convertToLowercase}>Convert to Lowercase</button>
        <button className="btn btn-primary mt-3" onClick={reverseText}>Reverse Text</button>
        <button className="btn btn-primary mt-3 mx-2" onClick={clearAll}>Clear All</button>
    </div>
    <div className="container">
      <h2>Your text summary</h2>
      <p>{words} words and {text.length} characters</p>
      <p>{0.008 * words} minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
  </>
  )
}

export default TextUtils;