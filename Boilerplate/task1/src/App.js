import React, {useState, useRef} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const showAnswer = useRef(null);
  const answer = "One of the advantage of the useRef hook is that it not rerenders to the DOM.";

  const changeStyle = () => {
    /* Write your code here */
    
  } 
  const inLineStyle = {
    visibility: 'hidden'
  }

  return (
    <div className="App">
      <h2 id="heading">What is the advantage of useRef Hook?</h2>

      <button id="btn" data-cy="change" onClick={changeStyle}>{show ? "Hide" : "Show"} Answer</button>
      
      {/* This element should should show the answer  */}
      <h3 id="sol" ref={showAnswer} style={inLineStyle}> </h3>
    </div>
  );
}

export default App;

/*
  Solution =>

    if (show) {
      showAnswer.current.innerHTML = '';
      showAnswer.current.style.visibility = 'hidden';
    }
    else {
      showAnswer.current.innerHTML = answer;
      showAnswer.current.style.visibility = 'visible';
    }
    setShow(!show);
*/