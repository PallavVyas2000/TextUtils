import React from "react";

export default function About(props) {
  return (
    <div className="container">
      <h2 className="heading my-4" style = {{backgroundColor : props.mode === 'dark'? '#394046':'white', color : props.mode === 'dark'? 'white':'black'}}>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style = {{backgroundColor : props.mode === 'dark'? '#2e3036':'white', color : props.mode === 'dark'? 'white':'black'}}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne">
              Analyze Your text
            </button>
          </h2>
          <div
            id="collapseOne"
            style = {{backgroundColor : props.mode === 'dark'? '#394046':'#dfdfdfc2', color : props.mode === 'dark'? 'white':'black'}}
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Textutils gives you a way to analyze your text quickly and efficiently. Be it word count or character count. Capitalization, Un-Capitalization, Remove extra/all spaces.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              style = {{backgroundColor : props.mode === 'dark'? '#2e3036':'white', color : props.mode === 'dark'? 'white':'black'}}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo">
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            style = {{backgroundColor : props.mode === 'dark'? '#394046':'#dfdfdfc2', color : props.mode === 'dark'? 'white':'black'}}
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Textutils is a free character counter tool that provides instant character count & word count statistics for a given
              text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character
              limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style = {{backgroundColor : props.mode === 'dark'? '#2e3036':'white', color : props.mode === 'dark'? 'white':'black'}}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree">
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            style = {{backgroundColor : props.mode === 'dark'? '#394046':'#dfdfdfc2', color : props.mode === 'dark'? 'white':'black'}}
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It
              suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
