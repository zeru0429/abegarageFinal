import React from "react";
import AdminMenu from "../../../Components/Admin/AdminMenu/AdminMenu";
import { useAuth } from "../../../../Context/AuthContext";

function AddServices() {
  const { isLogged, setIsLogged, employee, isAdmin } = useAuth();
  return (

    <>
    {!isLogged ? (
      <Login />
    ) : !isAdmin ? (
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
        <div>Add Service</div>
      </div>
      </div>
    )}
  </>

  );
}

export default AddServices;
