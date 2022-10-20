import * as actions from "../redux/actionTypes";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Audio } from "react-loader-spinner";
import NavBar from "../components/navbar";
import { AllQuery, buildImage, client, headerClass } from "../constants";
import ProductCard from "./../components/productCard";
import { useDispatch } from "react-redux";
import { createAction } from "../redux/actionCreator";
import OrderPopup from "../components/Order";
function ProductPage() {
  const buttonClass = "bg-blue-600 p-2 text-white m-1 font-bold";
  const params = useParams();
  const dispatch = useDispatch();
  const [isInCart, setIsInCart] = useState(false);
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [popupVisible, setPopupVisible] = useState({
    display: "none",
  });

  useEffect(() => {
    const query = `*[_type == "product" && _id == "${params.id}" ]`;
    client.fetch(query, {}).then(res => {
      setProduct(res[0]);
      setIsInCart(product.isInCart);
    });
    client.fetch(AllQuery).then(res => {
      console.log(res);
      setProducts(res);
    });
  }, []);
  const handleAddToCart = () => {
    dispatch(
      createAction(actions.ADD_CART, {
        product,
      })
    );
    setIsInCart(!isInCart);
  };
  const handleShowPopup = () => {

    if (popupVisible.display == "none") {
      setPopupVisible({ display: "flex" });
    } else {
      setPopupVisible({ display: "none" });
    }
  };
  const handleRemoveCart = () => {
    dispatch(
      createAction(actions.REMOVE_CART, {
        product,
      })
    );
    setIsInCart(!isInCart);
  };
  {
    return Object.values(product).length !== 0 ? (
      <div className="min-h-screen">
        <NavBar />
        <div
          className="sm:flex sm:flex-row flex-col w-11/12 border mt-[10vh] shadow-xl min-h-[40vh
 ] rounded-md m-auto"
        >
          <div>
            <img
              src={product.productImage.asset ? buildImage(product.productImage.asset._ref).url():product.productImage}
              alt=""
              className="ml-2 mt-2"
            />
          </div>
          <div className="w-full m-4 flex flex-col justify-start">
            <h1 className="font-bold m-2">
              {Object.values(product).length !== 0
                ? product.productName
                : "Product Name"}
            </h1>
            <h5 className="text-gray-600 m-4 font-bold">Details</h5>
            <div>
              <h3 className="indent-4">
                {" "}
                {Object.values(product).length !== 0
                  ? product.productDescription
                  : "Some Description"}
              </h3>
              <h3 className="font-semibold indent-4">
                {"$".concat(product.productPrice)}
              </h3>
            </div>
            <div className="m-auto w-10/12 flex justify-center">
              {!isInCart ? (
                <button
                  className={buttonClass}
                  onClick={() => handleAddToCart()}
                >
                  Add Cart
                </button>
              ) : (
                <button
                  className={"bg-red-600 p-2 text-white m-1 font-bold"}
                  onClick={() => handleRemoveCart()}
                >
                  Remove
                </button>
              )}
              <button className={buttonClass} onClick={handleShowPopup}>Order</button>
            </div>
          </div>
        </div>
        <div>
          <h1 className={headerClass}>Related Products</h1>
          {products.length !== 0 ? (
            <div className="flex flex-wrap gap-4 sm:flex-row flex-col justify-center items-center">
              {products
                .filter(p => p._id !== params.id)
                .map(prod => {
                  return (
                    <ProductCard
                      key={prod._id}
                      productName={prod.productName}
                      image={prod.productImage.asset ? buildImage(prod.productImage.asset._ref).url(): prod.productImage}
                      id={prod._id}
                      manufacturer={prod.manufacturer}
                    />
                  );
                })}
            </div>
          ) : (
            <Audio
              height="80"
              width="80"
              radius="9"
              color="blue"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
          )}
        </div>
        <div style={popupVisible} className="h-screen w-full  items-center justify-center fixed bg-black bg-opacity-60 top-0 p-28  shadow-xl shadow-black">
          <OrderPopup close={handleShowPopup}  image={product.productImage.asset ? buildImage(product.productImage.asset._ref).url():product.productImage} name={product.productName} price={product.productPrice} desc={product.productDescription}/>
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