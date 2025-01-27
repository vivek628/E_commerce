import React from 'react';
import { useCart } from '../context/CartContext';

function ProductCard({ productData, showAddToCartButton = true }) {  // Default is true, meaning the button is shown
  const { addToCart } = useCart();

  return (
    <div className="relative border border-gray-200 rounded-lg overflow-hidden shadow-lg">
      <img
        src={productData.images[0]} // Use the first image of the product
        alt={productData.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 flex justify-between items-center">
        <div className="text-lg font-semibold text-gray-800">{productData.title}</div>
        <div className="text-lg font-semibold text-gray-900">${productData.price}</div>

      </div>

      {/* Conditionally render the button based on the prop passed */}
      {showAddToCartButton && (
        <button
          onClick={() => addToCart(productData)} // Add product to cart on click
          className="absolute top-2 right-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
        >
          <i className="ri-add-line text-xl"></i>
        </button>
      )}
    </div>
  );
}

export default ProductCard;
