import { useEffect, useState } from "react";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import Cart from "./Cart";
import Input from "./input";
import Search from "./search";
function NavBar() {
  const [style, setStyle] = useState({
    display: "none",
  });
  const [showSearch,setShowSearch] = useState({
    display: "none",
  });
  const handleShowSearch = () => {
    console.log('show search');
    if(showSearch.display == 'none'){
      setShowSearch({display:'flex'});
      return;
    }
    setShowSearch({display:'none'})
    return;
      }
  const handleShowCart = () => {
    if (sh.display == "none") {
      setStyle({ display: "flex" });
      return;
    }
    setStyle({ display: "none" });
    return;
  };
const navigate = useNavigate();
  const iconClass = "text-2xl";
  return (
    <div className="fixed top-0 z-1 h-[8vh] bg-white hover:cursor-pointer flex w-full items-center justify-between border-b shadow-md">
      <div>
        <h1 className="text-2xl m-2 text-blue-600" onClick={() => navigate('/') }>eDandaza</h1>
      </div>
      <div>
        <Input placeholder={"Search a product..."} onFocus={() => handleShowSearch()} />
      </div>
      <div className="sm:hidden">
        <MdMenu className={iconClass} />
      </div>
      <div className="sm:flex hidden">
        <MdOutlineShoppingCart className={iconClass} onClick={handleShowCart} />
      </div>
      <div style={style} className="absolute right-0 top-14 w-4/12 h-screen">
        <Cart />
      </div>
      <div style={showSearch} className='h-screen w-full  items-center justify-center absolute bg-black bg-opacity-60 top-0 p-24  shadow-xl shadow-black'>
           <Search hide={handleShowSearch}/>
           </div>
    </div>
  );
}

export default NavBar;
