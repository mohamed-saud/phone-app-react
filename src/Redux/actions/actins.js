import { ADD_TO_CART, REMOVE_FROM_CARD } from "./types";

export function addToCart(prodactInfo, Quantity) {
  return {
    type: ADD_TO_CART,
    prodactInfo,
    Quantity,
  };
}
export function RemoveFromCard(index) {
  return {
    type: REMOVE_FROM_CARD,
    index,
  };
}
