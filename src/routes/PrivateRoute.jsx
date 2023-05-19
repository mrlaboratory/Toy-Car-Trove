import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Spinner from '../components/Spinner';
import { useEffect } from 'react';
import { AuthContext } from '../auth/AuthProvider';

const PrivateRoute = ({ children }) => {
   const { user, loading, setPath } = useContext(AuthContext)
   const location = useLocation()
   useEffect(() => {
      setPath(location.pathname)
   }, [location.pathname])

   if (loading) {
      return <Spinner></Spinner>
   }
   if (user) {
      return <>{children}</>
   } else {
      return <Navigate to='/login' state={location}></Navigate>
   }
};



export default PrivateRoute;