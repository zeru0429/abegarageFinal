import React from 'react'
import { useAuth } from '../../Context/AuthContext';

function UnauthorizedPage() {
  const { isLogged, setIsLogged, employee, isAdmin } = useAuth();

  return (
   
    <div className="col-5">
      <h1 className='m-5 p-5'>You don't have the authorization to access the page you requested</h1>
    </div>
 
  )
}

export default UnauthorizedPage