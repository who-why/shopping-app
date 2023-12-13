import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';
import { CiShoppingCart } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";


import { CartContext } from '../contexts/CartContext';
import Logo from '../img/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isactive, setactive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setactive(true) : setactive(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 w-full z-10 ${isactive ? 'bg-pink-400' : 'bg-blue-400'} transition-all`}>
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={'/'}>
          <div className="m-2">
            <img className="w-[40px]" src={Logo} alt="" />
          </div>
        </Link>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative max-w-[50px] mr-8"
        >
          <FaShoppingBag className="text-3xl text-white" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
