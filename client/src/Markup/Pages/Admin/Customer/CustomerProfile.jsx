import React from "react";
import AdminMenu from "../../../Components/Admin/AdminMenu/AdminMenu";
import CustomerDetail from "../../../Components/Customer/CustomerDetail";
import UnauthorizedPage from "../../UnauthorizedPage";
import Login from "../../Root/Login/Login";
import { useAuth } from "../../../../Context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
function CustomerProfile() {
  const navigator = useNavigate();
  const location = useLocation();
  const { data } = location.state || {};
  const {
    isLogged,
    setIsLogged,
    employee,
    isAdmin,
    fetchData,
    isManager,
    setIsManager,
  } = useAuth();

  console.log(data);

  return (
    <>
      {!isLogged ? (
        <Login />
      ) : !isAdmin && !isManager ? (
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

export default CustomerProfile;
