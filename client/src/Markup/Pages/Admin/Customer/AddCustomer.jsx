import React from "react";
import AdminMenu from "../../../Components/Admin/AdminMenu//AdminMenu";
import AddCustomerForm from "../../../Components/Commen/Form/AddCustomerForm";
import Login from "../../Root/Login/Login";
import UnauthorizedPage from "../../UnauthorizedPage";
import { useAuth } from "../../../../Context/AuthContext";
function AddCustomer() {
  const {
    isLogged,
    setIsLogged,
    employee,
    isAdmin,
    fetchData,
    isManager,
    setIsManager,
  } = useAuth();
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
          <div className="col-8 pt-5">
            <div className="container">
              <div className="form-column col-lg-7">
                <div className="sec-title style-two">
                  <h2 className="pb-3">Add new Customer</h2>
                </div>
                <div className="inner-column">
                  <div className="contact-form">
                    <div>
                      <AddCustomerForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddCustomer;
