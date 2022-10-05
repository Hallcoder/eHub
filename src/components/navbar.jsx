import React, { useEffect, useState } from 'react';
// // import logo from '../assets/images/logo.png';
// import Input from './common/input';
// import algoliasearch from 'algoliasearch';
import {MdMenu,MdOutlineShoppingCart} from 'react-icons/md';
import Input from './input';
// import axios from 'axios';
// import { InstantSearch, SearchBox,Configure ,connectHits} from 'react-instantsearch-dom';
// import Search from './search';
// import { useNavigate } from 'react-router-dom';
// import MobileNav from './mobileNav';
function NavBar({title}) {
const iconClass = 'text-2xl'
    return ( 
        <div className='fixed top-0 z-1 h-[8vh] bg-white flex w-full items-center justify-around border-b shadow-md'>
            <div>
                <h1 className='text-2xl text-blue-600'>eDandaza</h1>
            </div>
            <div>
                <Input placeholder={'Search a product...'}/>
            </div>
            <div className='sm:hidden'>
        <MdMenu className={iconClass}/>
            </div>
            <div className='sm:flex hidden'>
            <MdOutlineShoppingCart className={iconClass}/>
            </div>
        </div>
     );
}

export default NavBar;