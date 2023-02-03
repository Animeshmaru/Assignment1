import React, {useState, useRef} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const showAnswer = useRef(null);

  const changeStyle = () => {
    console.log(showAnswer.current);
    if (show) {
      showAnswer.current.style.display = 'none';
    }
    else {
      showAnswer.current.style.display = 'block';
    }
    setShow(!show);
  } 
  const inLineStyle = {
    display: 'none'
  }

  return (
    <div className="App">
      <h2 id="heading">What is the advantage of useRef Hook?</h2>

      <button id="btn" data-cy="change" onClick={changeStyle}>{show ? "Hide" : "Show"} Answer</button>
      
      <h3 id="sol" ref={showAnswer} style={inLineStyle}>useRef hook not rerenders to the DOM.</h3>
    </div>
  );
}

export default App;
