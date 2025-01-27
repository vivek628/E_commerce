import React from 'react';

const Modal = ({ productData, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-500 text-xl"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <img
            src={productData.images && productData.images[0] ? productData.images[0] : 'https://www.beyours.in/cdn/shop/files/old-rose-hoodie-5.jpg?v=1695620690'}
            alt={productData.title}
            className="w-full h-64 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">{productData.title}</h2>
          <p className="text-gray-600 mt-2">{productData.description}</p>
          <div className="mt-4 text-lg font-semibold text-gray-900">${productData.price}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
