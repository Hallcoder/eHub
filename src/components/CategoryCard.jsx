import React from "react";
function CategoryCard({className,categoryName,image}){

  return(
    <div className={className ? className :"rounded-md w-[22vw] hover:scale-105  bg-white border justify-around min-h-[55vh] shadow-2xl flex flex-col" }>
      <h1 className="font-bold text-center text-black">{categoryName}</h1>
      <div className="w-full h-full"><img src={image} alt="product" className="w-10/12 h-full m-auto mt-4" /></div>
      <div className="flex  w-11/12 m-auto  items-center justify-between mt-6 ml-2">
        <a href="#" className="text-xs text-gray-500 hover:underline cursor-pointer">Explore</a>
      </div>
    </div>
  );
  
}

export default CategoryCard;