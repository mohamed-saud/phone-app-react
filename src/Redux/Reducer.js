import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  leaders: LEADERS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
