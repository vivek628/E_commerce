import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from './context/CartContext'; // 
import CategoryPage from "./pages/Categories";
import All from "./pages/All";
import Header from "./pages/Header";

import Cart from "./pages/Cart";
import MyOrders from "./pages/MyOrders";
import MyAccount from "./pages/MyAccount";
import Auth from "./pages/Auth";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {

  return (
    <Router>
    <CartProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Auth/>}/> 

          <Route element={<ProtectedRoute />}>
            <Route path="/all" element={<All />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path='/cart' element={<Cart></Cart>}/>
            <Route path='/orders' element={<MyOrders/>}/>
            <Route path='/account' element={<MyAccount/>}/>
            <Route path='/guestuser' element={<All/>}/>
         </Route>
         
         
        </Routes>
    </CartProvider>
    </Router>
  );
}

export default App;