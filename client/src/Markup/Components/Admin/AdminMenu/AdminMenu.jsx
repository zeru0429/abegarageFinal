import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../Context/AuthContext";

function AdminMenu() {
  const {
    isLogged,
    setIsLogged,
    employee,
    isAdmin,
    fetchData,
    isManager,
    setIsManager,
  } = useAuth();

 //console.log(isManager);
  return (
    <div className="bg-container">
      <div className="admin-container">
        <h4>
          <a href="/admin">ADMIN MENU</a>
        </h4>
        <div className="list-container">
          <ul className="admin-list">
            {isAdmin && (
              <li>
                <Link to="/admin">Dashbord</Link>
              </li>
            )}
            {isLogged && (
              <li>
                <Link to="/admin/orders">Orders</Link>
              </li>
            )}
            {(isManager || isAdmin) && (
              <li>
                <Link to="/admin/order">New order</Link>
              </li>
            )}
            {isAdmin && (
              <li>
                <Link to="/admin/add-employee">Add employee</Link>
              </li>
            )}
            {isAdmin && (
              <li>
                <Link to="/admin/employees">Employee</Link>
              </li>
            )}
            {(isAdmin || isManager) && (
              <li>
                <Link to="/admin/add-customer">Add customer</Link>
              </li>
            )}
            {(isAdmin || isManager) && (
              <li>
                <Link to="/admin/customers">Customers</Link>
              </li>
            )}
            {isAdmin && (
              <li>
                <Link to="/admin/services">Servies</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminMenu;
