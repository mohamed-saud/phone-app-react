import { ADD_TO_CART, REMOVE_FROM_CARD } from "../actions/types";

function cretReducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        card: [
          ...state.card,
          {
            prodact: action.prodactInfo,
            Quantity: action.Quantity,
          },
        ],
      };
    }
    case REMOVE_FROM_CARD: {
      const item_index = action.index;
      const new_state = { ...state };
      new_state.card.splice(item_index, 1);
      return new_state;
    }
    default:
      return state;
  }
}
export default cretReducer;
