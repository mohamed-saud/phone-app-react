import { createStore } from "redux";
import cretReducer from "./reducers";
export const initialState = {
  card: [],
};
const store = createStore(
  cretReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
