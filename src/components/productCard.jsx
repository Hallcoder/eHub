import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ED from "../assets/images/ED.png";
function ProductCard({className,productName,image,id}){
  const navigate = useNavigate();
  useEffect(() => {
   
  },[])
  return(
    <div className={className ? className :"rounded-md w-[20vw] hover:scale-105  bg-white border justify-around min-h-[50vh] shadow-2xl flex flex-col" }>
      <div className="w-full h-full"><img src={image} alt="product" className="w-10/12 h-full m-auto mt-4" /></div>
      <h1 className="font-bold text-center text-black">{productName}</h1>

      <div className="flex border w-11/12 m-auto  items-center justify-between">
        <div className='flex justify-around'>
          <img src={ED} alt="" className="h-10 w-10 rounded-full" />
          <div className="flex flex-col">
            <h1 className="text-sm font-bold">Apple</h1>
            <h5 className="text-xs text-gray-400">Posted on Sat 18th</h5>
          </div>
        </div>
        <div>
          <h4 className="text-red-500 line-through">Sold</h4>
          </div>
        <div>
          <button onClick={() => {
            navigate(`/product/${id}`)
            window.location.reload();
            }} className="bg-blue-600 text-white p-2 rounded-sm">Show Deal</button>
          </div>
      </div>
    </div>
  );
}

export default ProductCard;
