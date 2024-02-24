// declare action types
export const INCREMENT = "increment";
export const DECREMENT = "decrement";

// increment
export const increment = () => {
  return {
    type: INCREMENT,
  };
};

// decrement
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
