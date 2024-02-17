import React from "react";
import AdminMenu from "../../../Components/Admin/AdminMenu/AdminMenu";
import { useAuth } from "../../../../Context/AuthContext";

function EditVehicle() {
  const { isLogged, setIsLogged, employee, isAdmin,isManager, fetchData } = useAuth();
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
        <div>Edit Vehicle</div>
      </div>
      </div>
    )}
  </>


  );
}

export default EditVehicle;
