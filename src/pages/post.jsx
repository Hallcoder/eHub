import React, { useEffect, useState } from "react";
import Input from "../components/input";
import NavBar from "../components/navbar";
import { handleChange } from "../../lib/handleChange";
import { MdEdit, MdOutlineCameraAlt } from "react-icons/md";
import sanityClient from "@sanity/client";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { headerClass } from "../constants";
function PostProduct() {
  const [image, setimage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const setImage = e => {
    let file = e.target.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setimage(reader.result);
    };
  };
  const [product, setProduct] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
  });

  const client = sanityClient({
    projectId: "gh8jlhht",
    dataset: "production",
    apiVersion: 1,
    token:
      "skmaNHDkHW2IJm5vBl7SHnnG9Xmh4I8WlZXDNb2gjSrWMYrc14quhXVV7v3R686l6FqhpPxGHkrkROLFfh8i1J2XXU9TOxASs8Yg1RS6ybQkfZVyWiaRYsjOIxy1WfiLcKjihuLrgyZnFVFKhCJWFrBy60V0QY7eziyER2CywUhxUlqAZlBY",
    useCdn: false,
  });

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const doc = {
      _type: "product",
      productName: product.productName,
      productPrice: product.productPrice,
      productDescription: product.productDescription,
      productImage: image,
    };
    client.create(doc).then(res => {
      console.log(res);
      setLoading(false);
      navigate(`/product/${res._id}`);
    });
  };
  return (
    <div>
      <NavBar />
      <form className="w-4/12 m-auto mt-[10vh] sm:flex flex-col flex justify-center border ">
        <h1 className={headerClass}>Upload and sell your product</h1>
        <div className="w-full m-4">
          <TextField
            name={"productName"}
            placeholder={"Enter the product name..."}
            value={product.productName}
            onChange={e => handleChange(e, setProduct, product)}
            label="Product Name"
            className={" w-9/12 indent-4 focus:outline-blue-400 rounded-md "}
            type="text"
          />
        </div>
        <div className="w-full m-4">
          <TextField
            name={"productPrice"}
            placeholder={"Enter the product price..."}
            value={product.productPrice}
            onChange={e => handleChange(e, setProduct, product)}
            label="Price"
            className={
              "border w-9/12 indent-4 m-2 focus:outline-blue-400 rounded-md h-[5vh]"
            }
            type="number"
          />
        </div>
        <div className="w-full m-4">
          <TextField
            name={"productDescription"}
            placeholder={"Enter a short description about the product..."}
            value={product.productDescription}
            onChange={e => handleChange(e, setProduct, product)}
            label="Description"
            className={
              "border w-9/12 indent-2 m-2 focus:outline-blue-400 rounded-md h-[14vh]"
            }
            type="text"
          />
        </div>
        <h1 className="font-bold text-2xl text-center">Add an Image</h1>
        <div
          id="image"
          style={{ backgroundImage: `url(${image})` }}
          className="rounded-full flex m-auto max-w-fit bg-gray-200 text-white"
        >
          {!image && <MdOutlineCameraAlt className="text-9xl p-4 ml-6" />}
          <label htmlFor="profileImage">
            <MdEdit className="text-black relative border border-black rounded-md top-28  ml-2 text-lg cursor-pointer left-2" />
          </label>
          <input
            type="file"
            name="file"
            id="profileImage"
            onChange={e => setImage(e)}
            className="hidden"
          />
        </div>
        <button
          className="bg-blue-600 text-white w-4/12 p-3 rounded-sm m-auto mt-2 mb-2"
          onClick={handleSubmit}
        >
          {loading ? "..." : "Post"}
        </button>
      </form>
    </div>
  );
}

export default PostProduct;
