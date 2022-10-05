import React from "react";
import Intro from "../components/intro";
import NavBar from "../components/navbar";
import ProductCard from "../components/productCard";
function HomePage() {
  return (
    <div>
      <NavBar />
      <section className="mt-20">
        <Intro />
      </section>
      <section className="">
        <h1 className="text-center font-bold text-4xl m-10">Trending Products</h1>
        <div className="items-center justify-center flex flex-wrap w-11/12 gap-2 m-auto">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
      </section>
      <section>
        <h1>Categories</h1>
        <div className="grid border-2 border-gray-400 m-2">
         <ProductCard className='item1'/>
         <ProductCard className='item2'/>
         <ProductCard className='item3'/>
         <ProductCard className='item4'/>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
