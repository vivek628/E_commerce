import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const navigate=useNavigate()
  const [cart, setCart] = useState([]);
  const [orders,setOrders]=useState([])

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const checkout = () => {
    console.log("Order Created:", cart);
    setOrders([...cart])
    setCart([]); // Clear cart after checkout

    
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, checkout,orders}}
    >
      {children}
    </CartContext.Provider>
  );
};
