import React from "react";
import AdminMenu from "../../Components/Admin/AdminMenu/AdminMenu";
import OrdersTable from "../../Components/Commen/DataTable/OrdersTable";
import { useAuth } from "../../../Context/AuthContext";
import Login from "../../Components/Commen/Form/LoginForm";
import UnauthorizedPage from "../../Pages/UnauthorizedPage";

function Orders() {
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
      ) : (
        <div className="row">
          <div className="col-4">
            <AdminMenu />
          </div>
          <div className="col-8">
            <div className="sec-title style-two">
              <h2 className="m-5">Orders</h2>
              <OrdersTable />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Orders;
