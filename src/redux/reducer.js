import * as actions from "./actionTypes";

export default function Reducer(state = { products: [] }, action) {
  let cState = { ...state };
  switch (action.type) {
    case actions.ADD_CART:
      action.payLoad.quantity = 0;
      console.log("Added to Cart..");
      +(action.payLoad.quantity)++;
      cState.products.push(action.payLoad);
      console.log(cState);
      return cState;
    case actions.REMOVE_CART:
     console.log("Removed from Cart..");
     console.log(cState.products);
     cState.products = cState.products.filter(c => c._id !== action.payLoad._id);
     console.log('new state',cState);
     return cState;
    case actions.INCREASE:
      console.log("Increasing");
      break;
    case actions.DECREASE:
      console.log("Decreasing");
      break;
  }
}
