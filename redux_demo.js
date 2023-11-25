const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type == "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type == "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

// console.log(store.getState()); // it come 0 (because it not subcribe function thats why it come initial state value)

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
