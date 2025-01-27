import React from 'react';
import { useCart } from '../context/CartContext';

function ProductCard({ productData, showAddToCartButton = true, onProductClick }) {  // Default is true, meaning the button is shown
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent the click from propagating to the parent div
    addToCart(productData); // Add product to cart
  };

  return (
    <div
      className="relative border border-gray-200 rounded-lg overflow-hidden shadow-lg"
      onClick={() => onProductClick(productData)} // Only open modal when product is clicked
    >
      <img
        src={productData.images && productData.images[0] ? productData.images[0] : 'https://www.beyours.in/cdn/shop/files/old-rose-hoodie-5.jpg?v=1695620690'}
        alt={productData.title}
        className="your-image-class"
      />
      <div className="p-4 flex justify-between items-center">
        <div className="text-lg font-semibold text-gray-800">{productData.title}</div>
        <div className="text-lg font-semibold text-gray-900">${productData.price}</div>
      </div>

      {/* Conditionally render the button based on the prop passed */}
      {showAddToCartButton && (
        <button
          onClick={handleAddToCart} // Handle click for add to cart
          className="absolute top-2 right-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
        >
          <i className="ri-add-line text-xl"></i>
        </button>
      )}
    </div>
  );
}

export default ProductCard;
