import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
function Cart() {
  let cart = useSelector(state => state);
  console.log(cart.products);
  return (
    <div className="w-full flex flex-col text-xs bg-white h-full shadow-2xl z-[1] overflow-scroll">
      <h1 className="text-lg  text-center font-bold">My Cart</h1>
      {cart &&
        cart.products.length !== 0 &&
        cart.products.map(pr => {
          console.log(pr);
          return (
            <Item
              price={pr.product.productPrice}
              name={pr.product.productName}
              quantity={pr.quantity}
              id={pr.product._id}
            />
          );
        })}
      {cart.products.length == 0 && (
        <h3 className="mt-[50%] m-auto text-xl">No items are in the Cart!</h3>
      )}
    </div>
  );
}

export default Cart;
