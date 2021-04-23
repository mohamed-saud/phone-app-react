import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cretReducer from "./reducers";
function loadState() {
  try {
    const state = localStorage.getItem("card");
    if (state !== null) {
      return JSON.parse(state);
    }
  } catch (e) {}
  return {
    card: [],
  };
}
function saveState(state) {
  console.log("save state...");
  localStorage.setItem("card", JSON.stringify(state));
}

const store = createStore(
  cretReducer,
  loadState(),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
