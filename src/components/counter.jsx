import React, { useState } from 'react';
import { MdPlusOne } from 'react-icons/md';
function Counter() {
    const [counter,setCounter] = useState(0);
    const buttonClass = 'bg-blue-600 text-white text-xs rounded-md p-2 m-1'
    return ( 
        <div className='flex items-center text-xs'>
            <button className={buttonClass}>-1</button>
            <h2>{counter}</h2>
            <button className={buttonClass}>+1</button>
        </div>
     );
}

export default Counter;