import { Switch, TextField } from "@mui/material";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { headerClass } from "../constants";
import Counter from "./counter";
import visa from '../assets/images/visa.png'
// import default from './../../eDandaza/schemas/product';

function OrderPopup({ image, desc, price, name, close }) {
  let [count, setCount] = useState(0);
  let [buy, setBuyStatus] = useState(true);
  const changeqty = action => {
    if (action == "inc") {
      setCount(++count);
    } else {
      setCount(--count);
    }
  };

  const changeStatus = () => {
    setBuyStatus(!buy);
  };
  return (
    <div className="min-h-fit min-w-fit w-9/12 sm:h-[75vh] sm:w-5/12 sm:ml-40  border-blue-500 p-1 rounded-md bg-white border ">
      <div className="flex justify-between items-center">
        {buy && <h1 className={headerClass}>Order details</h1>}
        {!buy && <h1 className={headerClass}>Payment Details</h1>}
        <MdClose
          className="m-4 border-2 p-1 text-4xl rounded-full"
          onClick={() => close()}
        />
      </div>
      {buy && (
        <div>
          <div className="w-full flex items-center flex-col p-2">
            <img src={image} alt="Product"></img>
            <h1 className={headerClass}>{name}</h1>
            <h3>{count * price}</h3>
            <Counter
              qty={count}
              increase={() => changeqty("inc")}
              decrease={() => changeqty("decr")}
            />
            <p>{desc}</p>
            <button
              className={"bg-blue-600 m-auto px-4 py-2 text-white rounded-sm"}
              onClick={changeStatus}
            >
              Buy
            </button>
          </div>
        </div>
      )}
      {!buy && (
        <div>
          <h3 className="text-3xl font-bold text-center">Add a Credit Card</h3>
          <hr />
          <div className="flex flex-col items-center ">
            <span className="w-full flex justify-center m-2">
              <TextField
                label={"Card Number"}
                type="text"
                placeholder="*** **** *** ***** 8302"
                className="w-10/12 "
                variant={"outlined"}
              />
              <img src={visa} className='h-14 w-20 p-2' alt="bank card"></img>
            </span>
            <span className="w-full flex justify-center m-2">
              <TextField
                label={"Card Holder"}
                type="text"
                variant={"outlined"}
                className="w-10/12"
              />
            </span>
            <div className="flex justify-start w-10/12 ">
              <div className="flex">
                <span className="m-2">
                  <TextField
                    label={"Expiration Month"}
                    type="text"
                    placeholder="01"
                    variant={"outlined"}
                  />
                </span>
                <span className="m-2">
                  <TextField label={"Expiration Year"} placeholder='2023' variant={"outlined"} />
                </span>
              </div>
              <div className="mt-2">
                <span className="m-2">
                <TextField label={"CVC"} placeholder='8456' variant={"outlined"} />
                </span>
              </div>
            </div>
          </div>

          <div className="ml-12 flex items-center">
            <Switch />
            <h2>Mark Card as default Card</h2>
          </div>
          <div className="w-full flex justify-center mt-4">
            <button className="bg-blue-500 text-white w-11/12 py-2 px-2">Add Card</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderPopup;
