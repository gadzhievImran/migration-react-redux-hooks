import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './App.css';

function App(props) {
  const { counter, setIncrement, setDecrement, setReset } = props;

  const newCounter = useSelector(state => state.appReducer);
  useEffect(() => {
    console.log(newCounter, 'newCounter');
  });

  useEffect(() => {
    if(window.clientHeight) {
      document.querySelector('.app').style.height = window.clientHeight + 'px'
    } else if(window.innerHeight) {
      document.querySelector('.app').style.height = window.innerHeight + 'px'
    }
  }, []);

  return (
    <div className="app">
      <div>
        <h1>
          Using hooks of react-redux
        </h1>
        <div style={{ display: 'flex', width: '100%' }}>
          <button onClick={() => setDecrement()}>-</button>
          <button>{counter}</button>
          <button onClick={() => setIncrement()}>+</button>
        </div>
        <div style={{ width: '100%' }}>
          <button onClick={() => setReset()}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
