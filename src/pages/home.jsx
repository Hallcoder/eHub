import React, { useEffect, useState } from "react";
import Intro from "../components/intro";
import NavBar from "../components/navbar";
import ProductCard from "../components/productCard";
import CategoryCard from "../components/CategoryCard";
import {buildImage, client} from '../constants';
function HomePage() {
  const headerClass = "text-center font-bold text-4xl m-10";
  const  [products,setProducts] = useState();
  const  [categories,setCategories] = useState();

  useEffect(() =>{
    const Pquery = '*[_type == "product" ]';
    const Cquery= '*[_type == "category" ]';
    client.fetch(Pquery,{})
    .then(res => {
      if(res.length !== 0){
        localStorage.setItem('products',JSON.stringify(res));
        setProducts(res);
      }
    })

    client.fetch(Cquery,{})
    .then(res => {
      if(res.length !== 0 ){
        localStorage.setItem('categories',JSON.stringify(res));
        setCategories(res);
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
              return <ProductCard  productName={prod.productName} image={buildImage(prod.productImage.asset._ref).url()} id={prod._id}/>
            })}
        </div>
      </section>
      <section>
        <h1 className={headerClass}>Categories</h1>
        <div className=" flex  gap-4 justify-center mb-20">
        { JSON.parse(localStorage.getItem('categories')).map((cat,i) => {
              return <CategoryCard  categoryName={cat.categoryName} image={buildImage(cat.categoryImage.asset._ref).url()}/>
            })}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
