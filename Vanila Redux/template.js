// index.html
/* >>>>>>>>>>>>>>>>>>>>> Step 1 >>>>>>>>>>>>>>>>>>>
=> use redux cdn in head section of html file

<script src="https://unpkg.com/redux@4.2.1/dist/redux.min.js"> </script>
*/

// folder structure
/*
redux/
├── features/
│   ├── counter/
│   │   ├── actions.js
│   │   ├── reducer.js
│   ├── todo/
│   │   ├── actions.js
│   │   ├── reducer.js
├── store.js

*/

// actionCreators.js
/* >>>>>>>>>>>>>>>>>>>>> Step 2 >>>>>>>>>>>>>>>>>>>
=> create some actions creators and export them

=> actions types  
const INCREMENT = "increment";
const DECREMENT = "decrement";

=>  actions creators 
export const increment = () => {
  return {
    type: INCREMENT,
    // we can pass other property like payload here
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
    // we can pass other property like payload here
  };
};
*/

// counterReducer.js
/* >>>>>>>>>>>>>>>>>>> Step 3 >>>>>>>>>>>>>>>>>>>
=> create initialState, counterReducer. then export counterReducer.

=> initial State  
const initialState = {
  count: 0,
};

=> counter reducer  
// Note: change state  immutably, return immutable state always
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return { ...state, count: state.count + 1 };
    }

    case DECREMENT: {
      return { ...state, count: state.count - 1 };
    }

    default:
      return state;
  }
};
*/

// store.js
/* >>>>>>>>>>>>>>>>>>>>> Step 4 >>>>>>>>>>>>>>>>>>>
=> don't use like import { createStore, combineReducers } from "redux";

const rootReducer = Redux.combineReducers({
  counter: counterReducer,
});

// create store with redux devtools extension
const store = Redux.createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
*/

/* some considerations
=> all the js file include inside html files or use single js file to do all redux features
=> or use webpack, then bundle all redux file into single file. then use this bundle file into html file.
*/

// webpack configuration
/* 
Note: import all the js file into single file,then use this file as entry point.

=> const path = require("path");

=> module.exports = {
  entry: "./src/redux/store.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  mode: "production",
};
*/

// now we can import store to others file.
// Its API is { subscribe, dispatch, getState }.

// subscribe() method
/*
=> store.subscribe(renderer function, and so on);
=> whenever redux store state is any chages, store.subscribe() method will be called and all the function inside subscribe() method will be called. so all UI will re-render. 
=> we can optimized it inside each renderer method by comparing previous state and current state.
=> only called getState() method if previous and current state is not same.
*/

// inside each render method. compare previous state and current state using isEqual() method of lodash utility JS library. it requires import by cdn. isEqual() compare object deep copy.

// simply compare using: JSON.stringify(currentState.todos) with previousState.todos. as store object structure always same.

/*
>>>>>>>>>>>>>> connect redux-devtools-extensions >>>>>>>>>>>>>>>
const store = Redux.createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
*/
