import React from 'react';
import Item from './Item';
function Cart() {
    return ( 
        <div className='w-full flex flex-col text-xs bg-white h-full overflow-scroll'>
            <h1 className='text-lg  text-center font-bold'>My Cart</h1>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
     );
}

export default Cart; 