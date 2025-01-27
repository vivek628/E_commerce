import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { auth } from '../firebase/firebase-config';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation(); 

 
  const isHomePage = location.pathname === '/';
  const isGuestUser = location.pathname === '/guestuser';
  const { cart } = useCart();
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  useEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser.email);
    }
  }, []);

  const logoutHandler = () => {

     if (auth.currentUser) {
    
      auth.signOut();
      navigate('/');
    }
  };
  const loginHandler = () => {
    if (isGuestUser) {
      navigate('/');
    }
  }

  const getLinkClassName = ({ isActive }) =>
    `text-gray-800 hover:text-black ${isActive ? 'border-b-2 border-blue-500' : ''}`;

  return (
    <nav className="bg-white shadow-md border-b-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-black">
          <NavLink to="/">My E-Commerce</NavLink>
        </div>
       
        <div className="hidden md:flex space-x-8">
          <NavLink to="/all" className={getLinkClassName}>{!isHomePage ? "All-Products":"" }</NavLink>
          <NavLink to="/category/1" className={getLinkClassName}>{!isHomePage ? "Clothings":" "}</NavLink>
          <NavLink to="/category/2" className={getLinkClassName}>{!isHomePage ? "Electronics":" "} </NavLink>
          <NavLink to="/category/3" className={getLinkClassName}>{!isHomePage ? "Furnitures":" "}</NavLink>
          <NavLink to="/category/4" className={getLinkClassName}>{!isHomePage ? "Toys":" "}</NavLink>
        </div>

        <div className="hidden md:flex space-x-6">
          <h1 className="text-red-500">{auth.currentUser ? user : ""}</h1>
          <NavLink to="/orders" className={getLinkClassName}>{!isHomePage ? "My Orders" : ""}</NavLink>
          
          <NavLink to="/account" className={getLinkClassName}>{!isHomePage ? "Account" : ""}</NavLink>
      
          {!isHomePage && ( 
  <>
    {/* Render the Logout/Login button if the user is not a guest */}
    {!isGuestUser && (
      <NavLink to="/" className={getLinkClassName} onClick={logoutHandler}>
        {auth.currentUser ? "Logout" : "Login"}
      </NavLink>
    )}

    {/* When user is a guest, show Login and redirect to '/' */}
    {isGuestUser && (
      <NavLink to="/" className={getLinkClassName} onClick={loginHandler}>
        Login
      </NavLink>
    )}
  </>
)}


          
            <NavLink to="/cart" className="relative text-gray-800 hover:text-black">
              <i className="ri-shopping-cart-fill text-5xl"></i>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {cart.length}
              </span>
            </NavLink>
          
        </div>

        {/* Mobile Menu Button */}
        {!isHomePage && ( 
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-800 hover:text-black focus:outline-none focus:text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
            >
              <i className="ri-menu-line text-3xl"></i>
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {!isHomePage && ( 
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-100 py-4 px-6 rounded-b-lg shadow-lg transition-all ease-in-out duration-300`}>
          <NavLink to="/all" className={`${getLinkClassName} block py-2`}>{!isHomePage ? "All Products" : ""}</NavLink>
          <NavLink to="/category/1" className={`${getLinkClassName} block py-2`}>{!isHomePage ? "Clothings" : ""}</NavLink>
          <NavLink to="/category/2" className={`${getLinkClassName} block py-2`}>{!isHomePage ? "Electronics" : ""}</NavLink>
          <NavLink to="/category/3" className={`${getLinkClassName} block py-2`}>{!isHomePage ? "Furniture" : ""}</NavLink>
          <NavLink to="/category/4" className={`${getLinkClassName} block py-2`}>{!isHomePage ? "Toys" : ""}</NavLink>
          <h2 className='text-red-500'>{user}</h2>
          <NavLink to="/orders" className={`${getLinkClassName} block py-2`}>{!isHomePage ? "My Orders" : ""}</NavLink>
          
          <NavLink to="/account" className={`${getLinkClassName} block py-2`}>{!isHomePage ? "Account" : ""}</NavLink>
         
          <NavLink to="/" className={`${getLinkClassName} block py-2`} onClick={logoutHandler}>
            {auth.currentUser ? "Logout" : "Login"}
          </NavLink>

         
            <NavLink to="/cart" className="relative text-gray-800 hover:text-black block py-2">
              <i className="ri-shopping-cart-fill text-3xl"></i>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {cart.length}
              </span>
            </NavLink>
          
        </div>
      )}
    </nav>
  );
}

export default Header;
