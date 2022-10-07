import React from "react";
import img from '../assets/images/5th.jfif'
import NavBar from "../components/navbar";
function ProductPage() {
    const buttonClass = 'bg-blue-600 p-2 text-white m-1 rounded-sm font-bold'
  return (
    <div className="min-h-screen">
        <NavBar /> 
      <div className="sm:flex sm:flex-row flex-col w-11/12 border mt-[10vh] shadow-xl min-h-[40vh
    ] rounded-md m-auto">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="w-full">
          <h1 className="font-bold m-4">Product Name</h1>
          <h5 className="text-gray-600 m-4">Details</h5>
          <div></div>
           <div className="m-auto w-10/12 flex justify-center">
            <button className={buttonClass}>Add Cart</button>
            <button className={buttonClass}>Order</button>
           </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
