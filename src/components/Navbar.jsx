import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { auth } from '../firebase/firebase-config';

function Header() {
  const { cart } = useCart();
  const [user,setUser]=useState(null)
  useEffect(()=>{
    if(auth.currentUser)
      {
        console.log(auth.currentUser.email)
        setUser(auth.currentUser.email)
      }
  })

  function logoutHandler(){
    alert(" Are you sure you want to logout?")
    
  }
  

  const getLinkClassName = ({ isActive }) => 
    `text-gray-800 hover:text-black ${isActive ? 'border-b-2 border-blue-500' : ''}`;

  return (
    <nav className="bg-white shadow-md border-b-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-2xl font-bold text-black">
          <NavLink to="/">My E-Commerce</NavLink>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <NavLink to="/all" className={getLinkClassName}>{auth.currentUser ? "All Products" :" "}</NavLink>
          <NavLink to="/category/1" className={getLinkClassName}>{auth.currentUser ? "Clothings" :" "}</NavLink>
          <NavLink to="/category/2" className={getLinkClassName}>{auth.currentUser ? "Electronics" :" "}</NavLink>
          <NavLink to="/category/3" className={getLinkClassName}>{auth.currentUser ? "Furniture" :" "}</NavLink>
          <NavLink to="/category/4" className={getLinkClassName}>{auth.currentUser ? "Toys" :" "}</NavLink>
        </div>

        {/* User Account / Orders Section */}
        <div className="flex space-x-6">
          <h1 className='text-red-500'>{auth.currentUser ? user :" "} </h1>
          <NavLink to="/orders" className={getLinkClassName}>{auth.currentUser ? "My Orders" :" "}</NavLink>
          <NavLink to="/account" className={getLinkClassName}>{auth.currentUser ? "Account":""}</NavLink>
          <NavLink to="/" className={getLinkClassName} onClick={() => auth.currentUser ? auth.signOut() : null}>{
            auth.currentUser ? "Logout" : "Login"
          } 
          </NavLink>


          {auth.currentUser ?(
            <NavLink to="/cart" className="relative text-gray-800 hover:text-black">
            <i className="ri-shopping-cart-fill text-5xl"></i>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
              {cart.length}
            </span>
          </NavLink>):null
}
         
        </div>
      </div>
    </nav>
  );
}

export default Header;
