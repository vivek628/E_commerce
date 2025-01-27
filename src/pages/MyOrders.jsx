import React from 'react'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

  function MyOrders(){
    const {orders}=useCart()
    console.log(orders)
  return (
   <>
   
  <h2 className="text-2xl font-semibold mb-4 text-center">Your Orders</h2>


   
      {orders.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {orders.map((product) => (
            <ProductCard 
              key={product.id} 
              productData={product} 
              showAddToCartButton={false} 
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No products in your cart</p>
      )}
   </>
  )
}
 export default MyOrders
