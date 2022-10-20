import React, { useEffect, useState } from "react";
import Intro from "../components/intro";
import { Audio } from "react-loader-spinner";
import NavBar from "../components/navbar";
import ProductCard from "../components/productCard";
import CategoryCard from "../components/CategoryCard";
import {buildImage, client, headerClass} from '../constants';
function HomePage() {
  const  [products,setProducts] = useState();
  const  [categories,setCategories] = useState();
  const [isloading,setLoading] = useState(true);
  useEffect(() =>{
    const Pquery = '*[_type == "product" ]';
    const Cquery= '*[_type == "category" ]';
    client.fetch(Pquery,{})
    .then(res => {
      if(res.length !== 0){
        localStorage.setItem('products',JSON.stringify(res));
        setProducts(res);
        setLoading(false);
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
   {
    return isloading ? <div className="ml-[48vw] mt-[40vh] ">
    <Audio
    height="80"
    width="80"
    radius="9"
    color="blue"
    ariaLabel="loading"
    wrapperStyle
    wrapperClass
  />
  </div>:
   <div>
   <NavBar />
   <section className="mt-20">
     <Intro />
   </section>
   <section className="">
     <h1 className={headerClass}>Trending Products</h1>
     <div className="items-center justify-center flex flex-wrap w-11/12 gap-4 m-auto">
         {JSON.parse(localStorage.getItem('products')).length !== 0 && JSON.parse(localStorage.getItem('products')).map(prod => {
           return <ProductCard  productName={prod.productName} image={prod.productImage.asset ? buildImage(prod.productImage.asset._ref).url(): prod.productImage} id={prod._id} manufacturer={prod.manufacturer}/>
         })}
     </div>
   </section>
   <section>
     <h1 className={headerClass}>Categories</h1>
     <div className=" flex  gap-4 justify-center mb-20">
     { JSON.parse(localStorage.getItem('categories')).map((cat,i) => {
           return <CategoryCard  categoryName={cat.categoryName} image={buildImage(cat.categoryImage.asset._ref).url()} />
         })}
     </div>
   </section>
 </div>

        }
}

export default HomePage;
