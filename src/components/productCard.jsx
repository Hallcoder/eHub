import React from "react";
import { useNavigate } from "react-router-dom";
import prof from "../assets/images/4th.jfif";
function ProductCard({className}){
  const navigate = useNavigate();
  console.log(className);
  return(
    <div className={className ? className :"rounded-md hover:scale-105 bg-white border justify-around min-h-[50vh] shadow-2xl flex flex-col" }>
      <h1 className="font-bold text-center text-black">Product Name</h1>
      <div className="w-full"><img src={prof} alt="" /></div>
      <div className="flex border w-11/12 m-auto  items-center justify-between">
        <div className='flex justify-around'>
          <img src={prof} alt="" className="h-10 w-10 rounded-full" />
          <div className="flex flex-col">
            <h1 className="text-sm font-bold">UserName</h1>
            <h5 className="text-xs text-gray-400">Posted on Sat 18th</h5>
          </div>
        </div>
        <div>
          <h4 className="text-red-500 line-through">Sold</h4>
          </div>
        <div>
          <button onClick={() => navigate('/product/13dch')} className="bg-blue-600 text-white p-2 rounded-sm">Show Deal</button>
          </div>
      </div>
    </div>
  );
}

export default ProductCard;
