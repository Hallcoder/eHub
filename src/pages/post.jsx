import React, { useEffect, useState } from "react";
import Input from "../components/input";
import NavBar from "../components/navbar";
import { handleChange } from "../../lib/handleChange";
import { MdCabin, MdCamera, MdEdit, MdOutlineCameraAlt } from "react-icons/md";
function PostProduct() {
  const [image, setimage] = useState('');
  const setImage = e => {
    let file = e.target.files[0];
    console.log(file)
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
  return (
    <div>
      <NavBar />
      <form className="w-10/12 m-auto mt-[10vh] sm:flex flex items-center sm:flex-col justify-center border">
        <Input
          name={"productName"}
          placeholder={"Enter the product name..."}
          value={product.productName}
          onChange={e => handleChange(e, setProduct, product)}
          label="Product Name"
          className={
            "border border-gray-400 w-7/12 indent-4 m-2 focus:outline-blue-400 rounded-md h-[5vh]"
          }
          type="text"
        />
        <Input
          name={"productPrice"}
          placeholder={"Enter the product price..."}
          value={product.productPrice}
          onChange={e => handleChange(e, setProduct, product)}
          label="Price"
          className={
            "border border-gray-400 w-7/12 indent-4 m-2 focus:outline-blue-400 rounded-md h-[5vh]"
          }
          type="number"
        />
        <Input
          name={"productDescription"}
          placeholder={"Enter a short description about the product..."}
          value={product.productDescription}
          onChange={e => handleChange(e, setProduct, product)}
          label="Description"
          className={
            "border border-gray-400 w-7/12 indent-2 m-2 focus:outline-blue-400 rounded-md h-[14vh]"
          }
          type="text"
        />
        <div
          id="image"
          style={{ backgroundImage: `url(${image})` }}
          className="rounded-full bg-cover bg-no-repeat flex justify-center m-2 h-[12vh] w-[12vw] items-center  bg-gray-200 text-white"
        >
          {!image && <MdOutlineCameraAlt className="text-9xl" />}
          <label htmlFor="profileImage">
            <MdEdit className="text-black relative border border-black rounded-md top-12  ml-4 text-lg cursor-pointer left-10" />
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
          className="bg-blue-600 text-white w-2/12 p-3 rounded-sm m-auto mt-2 mb-2"
          onClick={handleSubmit}
        >
          Post Product
        </button>
      </form>
    </div>
  );
}

export default PostProduct;
