import { combineReducers } from 'redux';

import appReducer from './appReducer';

const highReducer = combineReducers({
  appReducer
});

export default highReducer;