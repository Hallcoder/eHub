import builder from "@sanity/image-url";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Audio } from "react-loader-spinner";
import NavBar from "../components/navbar";
import { AllQuery, buildImage, client, headerClass } from "../constants";
import ProductCard from './../components/productCard';
function ProductPage() {
  const buttonClass = "bg-blue-600 p-2 text-white m-1 font-bold";
  const params = useParams();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const query = `*[_type == "product" && _id == "${params.id}" ]`;
     client.fetch(query, {}).then(res => {
      setProduct(res[0]);
    });
    client.fetch(AllQuery).then(res => {
    console.log(res)
    setProducts(res);
    }
    )
  },[]);
  {
    return Object.values(product).length !== 0 ? (
      <div className="min-h-screen">
        <NavBar />
        <div
          className="sm:flex sm:flex-row flex-col w-11/12 border mt-[10vh] shadow-xl min-h-[40vh
 ] rounded-md m-auto"
        >
          <div>
            <img src={buildImage(product.productImage.asset._ref).url()} alt="" />
          </div>
          <div className="w-full m-4 flex flex-col justify-start">
            <h1 className="font-bold m-2">
              {Object.values(product).length !== 0
                ? product.productName
                : "Product Name"}
            </h1>
            <h5 className="text-gray-600 m-4 font-bold">Details</h5>
            <div>
             <h3 className="indent-4"> {Object.values(product).length !== 0
                ? product.productDescription
                : "Some Description"}</h3>
                <h3 className="font-semibold indent-4">{'$'.concat(product.productPrice)}</h3>
            </div>
            <div className="m-auto w-10/12 flex justify-center">
              <button className={buttonClass}>Add Cart</button>
              <button className={buttonClass}>Order</button>
            </div>
          </div>
        </div>
        <div>
          <h1 className={headerClass}>Related Products</h1>
         {
          products.length !== 0 ? <div className="flex gap-4 sm:flex-row flex-col justify-center items-center">
            {products.map(prod => {
            return   <ProductCard key={prod._id} productName={prod.productName} productImage={buildImage(prod.productImage.asset._ref)} id={prod._id}/>
            })}
          </div>:  <Audio
          height="80"
          width="80"
          radius="9"
          color="blue"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
         }
        </div>
      </div>
    ) : (
      <div className="ml-[48vw] mt-[40vh] ">
        <Audio
        height="80"
        width="80"
        radius="9"
        color="blue"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
      </div>
    );
  }
}

export default ProductPage;
