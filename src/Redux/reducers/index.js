import { ColorLensOutlined } from "@material-ui/icons";
import { RemoveFromCard } from "../actions/actins";
import { ADD_TO_CART, REMOVE_FROM_CARD } from "../actions/types";

export default function cretReducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        card: [
          ...state.card,
          {
            prodact: action.prodactInfo,
            quantity: action.Quantity,
          },
        ],
      };
    }
    case REMOVE_FROM_CARD: {
      const item_index = action.index;
      const new_state = { ...state };
      delete new_state.card[item_index];
      return new_state;
    }
    default:
      return state;
  }
}
