import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import { setIncrement, setDecrement, setReset } from '../model/action/appAction';

function App(props) {
  const newCounter = useSelector(state => state.appReducer.counter);
  const dispatch = useDispatch();

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
          <button onClick={() => dispatch(setDecrement())}>-</button>
          <button>{newCounter}</button>
          <button onClick={() => dispatch(setIncrement())}>+</button>
        </div>
        <div style={{ width: '100%' }}>
          <button onClick={() => dispatch(setReset())}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
