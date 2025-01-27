import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../firebase/firebase-config'; // Firebase auth

const ProtectedRoute = () => {
  const user = auth.currentUser;
  
  if (!user) {
    alert('You must be logged in to view this page!');
    return <Navigate to="/" />;
  }

  return <Outlet />;  
};

export default ProtectedRoute;
