import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    let UpText = text.toUpperCase();
    setText(UpText);
    props.showAlert("Converted to UpperCase!","success");
  };

  const handleLowClick = () => {
    let LowText = text.toLowerCase();
    setText(LowText);
    props.showAlert("Converted to LowerCase!","success");
  };

  const handleClrText = () => {
    let ClrText = "";
    setText(ClrText);
    props.showAlert("Cleared all text!","success");
  };

  const handleExtraSpaces = () => {
    let xtraSpaceText = text.split(/[ ]+/);
    setText(xtraSpaceText.join(" "));
    props.showAlert("Removed all extra spaces!","success");
  };

  const handleRemSpace = () => {
    let remSpaceText = text.split(" ").join("");
    setText(remSpaceText);
    props.showAlert("Removed all spaces!","success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style ={{color : props.mode === 'dark'? '#d9d9d9':'#394046'}}>
        <h1>{props.heading}</h1>
        <h3>Word Counter, Character Counter, Remove extra spaces</h3>
        <div className={`mb-4`}>
          <textarea
            className="form-control mt-4"
            value={text}
            onChange={handleOnChange}
            style = {{backgroundColor : props.mode === 'dark'? '#2e3036':'white', color : props.mode === 'dark'? 'white':'black'}}
            id="txtBox"
            rows="8"
            />{" "}
        </div>
        <button disabled = {text.length === 0}className={`btn btn-${props.mode === 'dark'? 'light':'secondary'} mx-2 my-2`} onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled = {text.length === 0}className={`btn btn-${props.mode === 'dark'? 'light':'secondary'} mx-2 my-2`} onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled = {text.length === 0}className={`btn btn-${props.mode === 'dark'? 'light':'secondary'} mx-2 my-2`} onClick={handleRemSpace}>Remove Spaces</button>
        <button disabled = {text.length === 0}className={`btn btn-${props.mode === 'dark'? 'light':'secondary'} mx-2 my-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled = {text.length === 0}className={`btn btn-${props.mode === 'dark'? 'light':'secondary'} mx-2 my-2`} onClick={handleCopy}>Copy text</button>
        <button disabled = {text.length === 0}className={`btn btn-${props.mode === 'dark'? 'light':'secondary'} mx-2 my-2`} onClick={handleClrText}>Clear text</button>
      </div>
      <div className="container mt-4" style ={{color : props.mode === 'dark'? '#d9d9d9':'#394046'}}>
        <h2>Your text summary :</h2>
          <p>
            Word Count : {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}
            <br></br> Character Count :{text.length}
          </p>
          <p>
            {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute Read
          </p>
          <h2>Preview</h2>
          <div className="container" style ={{color : props.mode === 'dark'? '#a9a9a9':'#5a5a5a'}}>
          <p>{text.length>0?text:"Enter text to preview..."}</p>
          </div>
      </div>
    </>
  );
}

TextForm.propTypes = { heading: PropTypes.string };
