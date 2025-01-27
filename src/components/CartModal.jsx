
import React from 'react';
import { useCart } from '../context/CartContext';

function CartModal({ closeCartModal }) {  
  const { cart, removeFromCart, updateQuantity, checkout } = useCart();

  const handleQuantityChange = (productId, change) => {
    const product = cart.find((item) => item.id === productId);
    if (product) {
      const newQuantity = product.quantity + change;
      if (newQuantity >= 1) {
        updateQuantity(productId, newQuantity);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-10">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={closeCartModal}  // Call closeCartModal to close the modal
          className="absolute top-2 right-2 text-gray-500 text-xl"
        >
          close
        </button>

        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-12 h-12 object-cover"
                />
                <div>
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="text-gray-500">${item.price}</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-lg"
              >
                &times;
              </button>
            </div>
          ))}
        </div>

        {/* Checkout Button */}
        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={checkout}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Checkout
          </button>
          <p className="font-semibold">
            Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
