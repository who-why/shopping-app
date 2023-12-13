import React, {createContext,useState,useEffect} from 'react';

export const CartContext=createContext()



const CartProvider = ({children}) => {
  const [cart,setCart]=useState([])
  const [itemAmount ,setItemAmount]=useState(0)
  const [total,settotal]=useState(0)

   useEffect(()=>{
      const total=cart.reduce((accumulator,currentItem)=>{
         return accumulator+currentItem.price*currentItem.amount;
      },0)
      settotal(total);
   })

   useEffect(()=>{
      if(cart){
        const amount=cart.reduce((accumulator,currentItem)=>{
                return accumulator+currentItem.amount;
        },0)
        setItemAmount(amount)
      }
    
   },[cart])

  const addToCart=(product,id)=>{
    const newItem={...product,amount:1};
    const cartItem=cart.find((item)=>{
        return item.id===id;
    })
    
    if(cartItem){
      const newCart=[...cart].map((item)=>{
         if(item.id===id){
            return {...item,amount:cartItem.amount+1};
         }else{
          return item;
         }
      });
      setCart(newCart)
    }else{
      setCart([...cart,newItem]);
    }
  };
   
  const removeFromCart=(id)=>{
      const newCart=cart.filter((item)=>{
         return item.id!==id;
      })
      setCart(newCart)
  }
  const setclearcart=()=>{
     setCart([])
  }

  const increase_amount=(id)=>{
        const cartItem=cart.find((item)=>item.id===id);
        addToCart(cartItem,id);
  }

  const dec_amount = (id) => {
   const cartItem = cart.find((item) => item.id === id);
 
   if (cartItem) {
     if (cartItem.amount > 1) {
       const newCart = cart.map((item) => {
         return item.id === id ? { ...item, amount: item.amount - 1 } : item;
       });
       setCart(newCart);
     } else {
       removeFromCart(id);
     }
   }
 };
 



  return <CartContext.Provider value={{cart,addToCart,removeFromCart,setclearcart,increase_amount,dec_amount,itemAmount,total}}>
      {children}
  </CartContext.Provider>;
};

export default CartProvider;
