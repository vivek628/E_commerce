import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../firebase/firebase-config'; 
import { useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
  let user = auth.currentUser;
   const location = useLocation(); 
   const isGuestUser = location.pathname === '/guestuser';
  if(isGuestUser){
    user="guestuser"
  }
  if(user==="guestuser"){
    return <Outlet />; 
  }
  return <Outlet />;  
};

export default ProtectedRoute;