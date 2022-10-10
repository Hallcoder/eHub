import React, { useEffect, useState } from "react";
import Intro from "../components/intro";
import NavBar from "../components/navbar";
import sanityClient from "@sanity/client";
import ProductCard from "../components/productCard";

function HomePage() {
  const headerClass = "text-center font-bold text-4xl m-10";
  const  [products,setProducts] = useState();
  useEffect(() =>{
    const client = sanityClient({
      projectId: "gh8jlhht",
      dataset: "production",
      apiVersion: 1,
      token:
        "skmaNHDkHW2IJm5vBl7SHnnG9Xmh4I8WlZXDNb2gjSrWMYrc14quhXVV7v3R686l6FqhpPxGHkrkROLFfh8i1J2XXU9TOxASs8Yg1RS6ybQkfZVyWiaRYsjOIxy1WfiLcKjihuLrgyZnFVFKhCJWFrBy60V0QY7eziyER2CywUhxUlqAZlBY",
      useCdn: false,
    });
    const query = '*[_type == "product" ]'
    client.fetch(query,{})
    .then(res => {
      console.log(res);
      if(res.length !== 0){
        localStorage.setItem('products',JSON.stringify(res));
        consoleognsnsd=n
        setProducts(res);
      }
    })
    },[]);
  return (
    <div>
      <NavBar />
      <section className="mt-20">
        <Intro />
      </section>
      <section className="">
        <h1 className={headerClass}>Trending Products</h1>
        <div className="items-center justify-center flex flex-wrap w-11/12 gap-4 m-auto">
            { JSON.parse(localStorage.getItem('products')).map(prod => {
              return <ProductCard  productName={prod.productName} image={prod.productImage.asset._ref}/>
            })}
        </div>
      </section>
      <section>
        <h1 className={headerClass}>Categories</h1>
        <div className="sm:gridCustom flex flex-col gap-4  justify-center">
         <ProductCard className='item1 flex flex-col shadow-xl border  justify-around'/>
         <ProductCard className='item2 flex flex-col shadow-xl border  justify-around'/>
         <ProductCard className='item3 flex flex-col shadow-xl border  justify-around'/>
         <ProductCard className='item4 flex flex-col shadow-xl border  justify-around'/>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
