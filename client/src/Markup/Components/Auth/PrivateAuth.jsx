import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Context/AuthContext';

function PrivateAuth({ roles, children }) {
  const navigator = useNavigate();
  const { isLogged, setIsLogged, employee, isAdmin, fetchData } = useAuth();
  const [isChecked, setIsChecked] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    checkStatus();
  }, []);

  const checkStatus = async () => {
    try {
      await fetchData();
      // First check authentication
      if (isLogged) {
        // Then check if the user is authorized
        if (roles && roles.length > 0 && roles.includes(employee.employee_role)) {
          setIsAuthorized(true);
        }
      }
      setIsChecked(true);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsChecked(true);
    }
  };

  console.log(isLogged);
  console.log(isChecked);
  console.log(isLogged);

  useEffect(() => {
    if (isChecked) {
      if (!isLogged) {
        navigator('/login');
      } else if (!isAuthorized) {
        navigator('/unauthorized');
      }
    }
  }, [isChecked, isLogged, isAuthorized]);

  if (isChecked && isAuthorized) {
    return children;
  } else {
    return null;
  }
}

export default PrivateAuth;