import React from 'react';
import { connect } from 'react-redux';

import App from './App.js';
import { setIncrement, setDecrement, setReset } from '../model/action/appAction';

const mapStateToProps = state => ({
  counter: state.appReducer.counter
});

const mapDispatchToProps = dispatch => ({
  setIncrement: () => dispatch(setIncrement()),
  setDecrement: () => dispatch(setDecrement()),
  setReset: () => dispatch(setReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);