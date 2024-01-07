import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

// 2- create reducer
const counterReducer = (state = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return {...state, counter: state.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return {...state, counter: state.counter - 1 };
  } else if (action.type === "ADD") {
    return {...state, counter: state.counter + Number(action.payload.num) };
  } else if (action.type === "SUBTRACT") {
    return {...state, counter: state.counter - Number(action.payload.num) };
  } else if (action.type === "PRIVACY_TOGGLE") {
    return {...state, privacy: !state.privacy };
  }
  return state;
};

// 1-create store
const counterStore = createStore(counterReducer);

export default counterStore;
