import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Counter from "./counter";
import * as actions from '../redux/actionTypes';
import { createAction } from './../redux/actionCreator';
function Item({name,quantity,price,id}) {
  const [qty,setQuantity] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
      setQuantity(quantity);
  },[])
  const increase  = () => {
    setQuantity(++quantity);
    dispatch(createAction(actions.INCREASE,{id}));
  }
  const decrease  = () => {
    if(quantity <= 0) return;
    setQuantity(--quantity);
    dispatch(createAction(actions.DECREASE,{id}));
  }
  return <div className="flex w-full justify-between items-center h-16 rounded-sm shadow-md">
   <img src="" alt="" />
   <h3>{name}</h3>
   <Counter increase={increase} decrease={decrease} qty={qty}/>
   <h4>{price * qty}</h4>
  </div>;
}

export default Item;

