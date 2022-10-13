import React, { useState } from 'react';
import { MdPlusOne } from 'react-icons/md';
function Counter({increase,decrease,qty}) {
    const [counter,setCounter] = useState(0);
    const buttonClass = 'bg-blue-600 text-white text-xs rounded-md px-3 py-2 m-1'
    return ( 
        <div className='flex items-center text-xs'>
            <button className={buttonClass} onClick={() => decrease()}>-</button>
            <h2>{qty}</h2>
            <button className={buttonClass} onClick={() => increase()}>+</button>
        </div>
     );
}

export default Counter;