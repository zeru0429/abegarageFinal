import React from "react";
import LoginForm from "../../../Components/Commen/Form/LoginForm";
import { useAuth } from "../../../../Context/AuthContext";
import { useNavigate}  from 'react-router-dom'
function Login() {
  const { isLogged, setIsLogged, employee, isAdmin, fetchData } = useAuth();
  const navigator = useNavigate();

  if (!isLogged)
    return (
      <div>
        <LoginForm />
      </div>
    );
  else{
    navigator('/');
    
  }
}

export default Login;
