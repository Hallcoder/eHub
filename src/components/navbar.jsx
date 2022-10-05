import {MdMenu,MdOutlineShoppingCart} from 'react-icons/md';
import Input from './input';
function NavBar() {
const iconClass = 'text-2xl'
    return ( 
        <div className='fixed top-0 z-1 h-[8vh] bg-white flex w-full items-center justify-between border-b shadow-md'>
            <div>
                <h1 className='text-2xl m-2 text-blue-600'>eDandaza</h1>
            </div>
            <div>
                <Input placeholder={'Search a product...'}/>
            </div>
            <div className='sm:hidden'>
        <MdMenu className={iconClass}/>
            </div>
            <div>
                <button className='bg-blue-600 px-4 py-2 rounded-ms text-white'>Post</button>
            </div>
            <div className='sm:flex hidden'>
            <MdOutlineShoppingCart className={iconClass}/>
            </div>
        </div>
     );
}

export default NavBar;