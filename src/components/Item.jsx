import React from "react";
import Counter from "./counter";
function Item() {
  return <div className="flex w-full justify-around items-center h-16 rounded-sm shadow-md">
   <img src="" alt="" />
   <h3>Product Name</h3>
   <Counter />
   <h2>4</h2>
   <h4>$199.99</h4>
  </div>;
}

export default Item;

