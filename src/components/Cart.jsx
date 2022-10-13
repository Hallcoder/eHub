import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
function Cart() {
  let cart = useSelector(state => state.products);
  console.log(cart);

  return (
    <div className="w-full flex flex-col text-xs bg-white h-full overflow-scroll">
      <h1 className="text-lg  text-center font-bold">My Cart</h1>
      {cart.products.length !== 0 &&
        cart.products.map(pr => {
          return <Item />;
        })}
      <h3>No items are in the Cart!</h3>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default Cart;
