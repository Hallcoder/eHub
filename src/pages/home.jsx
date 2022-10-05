import React from "react";
import Intro from "../components/intro";
import NavBar from "../components/navbar";
import ProductCard from "../components/productCard";
function HomePage() {
  const headerClass = "text-center font-bold text-4xl m-10"
  return (
    <div>
      <NavBar />
      <section className="mt-20">
        <Intro />
      </section>
      <section className="">
        <h1 className={headerClass}>Trending Products</h1>
        <div className="items-center justify-center flex flex-wrap w-11/12 gap-2 m-auto">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
      </section>
      <section>
        <h1 className={headerClass}>Categories</h1>
        <div className="gridCustom shadow-md">
         <ProductCard className='item1 flex flex-col shadow-xl border items-center justify-around'/>
         <ProductCard className='item2 flex flex-col shadow-xl border items-center justify-around'/>
         <ProductCard className='item3 flex flex-col shadow-xl border items-center justify-around'/>
         <ProductCard className='item4 flex flex-col shadow-xl border items-center justify-around'/>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
