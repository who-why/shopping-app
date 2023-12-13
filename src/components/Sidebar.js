import React, { useContext } from 'react';
import { IoArrowForward } from "react-icons/io5";
import { BsFillTrash2Fill } from 'react-icons/bs';

import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const { cart, clearCart,setclearcart, total, itemAmount } = useContext(CartContext);
  const { isOpen, handleClose } = useContext(SidebarContext);

  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 text-black z-20 px-4 lg:px-[35]`}>

      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag ({itemAmount})</div>
        <div onClick={handleClose} className="cursor-pointer w-8 h-8 flex justify-center items-center">
          <IoArrowForward className="text-2xl" />
        </div>
      </div>

      <div className="flex flex-col gap-y-2 h-[calc(100% - 112px)] lg:h-[calc(100% - 140px)] overflow-y-auto overflow-x-hidden border-b">
        {cart.map(item => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>

      <div className="flex items-center justify-between py-4">
        <div className="text-sm font-semibold">Total: ${total.toFixed(2)}</div>
        <button onClick={setclearcart} className="flex items-center text-sm text-red-500">
          <BsFillTrash2Fill className="mr-1" />
          Delete All
        </button>
      </div>

    </div>
  );
};

export default Sidebar;
