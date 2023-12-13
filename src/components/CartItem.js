import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {IoMdClose,IoMdRemove,IoMdAdd} from 'react-icons/io'
import { CartContext } from '../contexts/CartContext';



const CartItem = ({item}) => {

  const {removeFromCart,increase_amount,dec_amount}=useContext(CartContext)
  const {id,title,image,price,amount}=item;

  return (
    <div className="flex flex-col gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500 ">
       <div className="w-full min-h-[150px] flex items-center gap-x-4">
          <Link to={`/product/${id}`}>
             <img src={image} className="max-w-[80px]" />
          </Link>

       <div className="w-full flex flex-col">

       <div className="flex justify-between mb-2">

          <Link to={`/product/${id}`}
          className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
          >{title}</Link>

          <div onClick={()=>removeFromCart(id)} className="text-xl cursor-pointer">
            <IoMdClose className=" cursor-pointer text-gray-500 hover:text-red-500 transition"/>
          </div>

       </div>
         

         <div className="flex gap-x-2 h-[36px] text-sm">
                      <div className="flex flex-1 max-w-[100px]  items-center h-full border text-primary font-medium">
                          <div onClick={()=>dec_amount(id)}  className="flex-1 h-full flex justify-center items-center cursor-pointer">
                          <IoMdRemove/>
                          </div>
                          <div className="h-full flex justify-center items-center px-2">{amount}</div>

                          <div onClick={()=>increase_amount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer"><IoMdAdd/></div>
                      </div>
                      <div className="flex-1 flex justify-end items-center text-primary font-semibold">$ {price}</div>
                      <div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${item.price * amount}`}</div>
         </div>
       </div>
       </div>
      
      
    </div>
  )
}

export default CartItem
