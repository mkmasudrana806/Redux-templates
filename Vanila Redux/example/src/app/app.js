import { decrement, increment } from "../redux/counter/actions";
import store from "../redux/store";

// select counter dom element
const counterEl = document.getElementById("countValue");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// increment
incrementEl.addEventListener("click", () => {
  store.dispatch(increment());
});

// increment
decrementEl.addEventListener("click", () => {
  store.dispatch(decrement());
});

// render count value
const renderedCount = () => {
  const state = store.getState();
  counterEl.innerText = state.counter?.count;
};

// initial counter render
renderedCount();

// subscribe to the store with rendered count
store.subscribe(renderedCount);
