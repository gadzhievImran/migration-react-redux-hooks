import { INCREMENT, DECREMENT, RESET } from '../action/appAction';

let initialState = {
  counter: 0
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: return { ...state, counter: state.counter + 1 };
    case DECREMENT: return { ...state, counter: state.counter - 1 };
    case RESET: return { ...state, counter: 0 };
    default: return state;
  }
}