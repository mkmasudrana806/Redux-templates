import counterReducer from "./counter/counterReducer.js";
const rootReducer = Redux.combineReducers({
  counter: counterReducer,
});

// create store and export
const store = Redux.createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
