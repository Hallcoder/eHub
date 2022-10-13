import React, { useState } from 'react';
import { MdPlusOne } from 'react-icons/md';
function Counter() {
    const [counter,setCounter] = useState(0);
    const buttonClass = 'bg-blue-600 text-white text-xs rounded-md px-3 py-2 m-1'
    return ( 
        <div className='flex items-center text-xs'>
            <button className={buttonClass}>-</button>
            <h2>{counter}</h2>
            <button className={buttonClass}>+</button>
        </div>
     );
}

export default Counter;