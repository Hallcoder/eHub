import React from "react";
import prof from "../assets/images/4th.jfif";
function ProductCard({className}){
  console.log(className);
  return(
    <div className={className ? className.concat("rounded-sm border justify-between min-h-[50vh] shadow-md flex flex-col") :"rounded-sm border justify-between min-h-[50vh] shadow-md flex flex-col" }>
      <h1>Product Name</h1>
      <div className="w-full"><img src={prof} alt="" /></div>
      <div className="flex border justify-between items-center">
        <div className='flex'>
          <img src={prof} alt="" className="h-10 w-10 rounded-full" />
          <div className="flex flex-col border">
            <h1 className="text-sm font-bold">UserName</h1>
            <h5 className="text-xs text-gray-400">Posted on Sat 18th</h5>
          </div>
        </div>
        <div>Sold</div>
        <div>Show Deal</div>
      </div>
    </div>
  );
}

export default ProductCard;
