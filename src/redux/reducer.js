import * as actions from "./actionTypes";

export default function Reducer(state = { products: [], newItems: 0 }, action) {
  let cState = { ...state };
  let product;
  switch (action.type) {
    case actions.ADD_CART:
      cState.newItems++;
      action.payLoad.quantity = 0;
      action.payLoad.isInCart = true;
      console.log("Added to Cart..");
      +action.payLoad.quantity++;
      cState.products.push(action.payLoad);

      return cState;

    case actions.REMOVE_CART:
      cState.newItems--;
      console.log("Removed from Cart..");
      console.log(cState.products);
      cState.products = cState.products.filter(
        c => c._id !== action.payLoad._id
      );
      return cState;

    case actions.INCREASE:
      console.log("Increasing");
      product = cState.products.find(p => p.product._id == action.payLoad.id);
      product.quantity++;
      return cState;

    case actions.DECREASE:
      console.log("Decreasing");
      product = cState.products.find(p => p.product._id == action.payLoad.id);
      product.quantity--;
      return cState;

    case actions.RESET_NEW_ITEMS:
      console.log('reset')
      cState.newItems = 0;
      return cState;

    default:
      return cState;
  }
}
