import React from "react";
import AdminMenu from "../../../Components/Admin/AdminMenu/AdminMenu";
import CustomerDetail from "../../../Components/Customer/CustomerDetail";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../../../Context/AuthContext";
import Login from "../../Root/Login/Login";
import UnauthorizedPage from "../../UnauthorizedPage";

function AddVehicle() {
  const { isLogged, setIsLogged, employee, isAdmin,isManager, fetchData } = useAuth();
  const location = useLocation();
  const { data } = location.state || {};
  console.log(data);
  return (
    <>
    {!isLogged ? (
      <Login />
    ) :  (!isAdmin && !isManager) ? (
      <div className="row">
        <div className="col-4">
          <AdminMenu />
        </div>
        <UnauthorizedPage />
      </div>
    ) : (
      <div className="row">
        <div className="col-4">
          <AdminMenu />
        </div>
        <div className="col-8">
        <CustomerDetail data={data} />
      </div>
      </div>
    )}
  </>


  );
}

export default AddVehicle;
