import React from 'react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

function Cart() {
  const { cart,checkout } = useCart(); 
  const products = cart;

  return (
    <div className="p-6 space-y-6">
      {/* Cart Products */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              productData={product} 
              openProductDetailModal={() => openProductDetailModal(product)} 
            />
            
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No products in your cart</p>
      )}
      {
        products.length>0?(
      <div className="flex justify-between items-center mt-8">
         
        <p className="text-lg font-semibold text-gray-700">
          Total: $
          {products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}
        </p>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition" onClick={checkout}>
          Place Order
        </button>
      </div>):(
        ""
      )
      } 
    </div>
  );
}

export default Cart;
