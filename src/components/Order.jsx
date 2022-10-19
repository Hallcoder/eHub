import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { headerClass } from '../constants';
import Counter from './counter';
function OrderPopup({image,desc,price,name,close}) {
    let [count,setCount] = useState(0);
    let [buy,setBuyStatus] = useState(true);
    const changeqty = (action) => {
        if(action == 'inc'){
            setCount(++count);
        }else{
           setCount(--count);
        }
    };

    const changeStatus = () => {
        setBuyStatus(!buy);
    }
        return ( 
            <div className="  min-h-fit min-w-fit w-9/12 sm:w-7/12 sm:ml-40  border-blue-500 p-1 rounded-md bg-white  border ">
              <div className='flex justify-between '>
                {buy && <h1 className={headerClass}>Order details</h1>}
                {!buy && <h1 className={headerClass}>Payment Details</h1>}
                <MdClose className='m-4 border-2 p-1 text-4xl rounded-full' onClick={() => close()}/>
              </div>
            {buy && <div>
                <div className='w-full flex items-center flex-col p-2'>
                    <img src={image} alt="Product"></img>
                     <h1 className={headerClass}>{name}</h1>
                     <h3>{count * price}</h3>
                     <Counter qty={count} increase={() => changeqty('inc')} decrease={() => changeqty('decr')}/>
                     <p>{desc}</p>
                     <button className={'bg-blue-600 m-auto px-4 py-2 text-white rounded-sm'} onClick={changeStatus}>Buy</button>
                </div>
            </div>}
            {!buy && <div>
                
                
                </div>}
            </div>
         );
}

export default OrderPopup;