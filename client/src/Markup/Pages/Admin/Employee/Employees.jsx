import React, { useEffect, useState } from "react";
import AdminMenu from "../../../Components/Admin/AdminMenu/AdminMenu";
import EmployeeTable from "../../../Components/Commen/DataTable/EmployeeTable";
import axios from "../../../../Utility/axios";
import CustomeAlert from "../../../Components/Commen/Alerts/Alert";
import EmployeeService from "../../../../Service/Employee.service";
import BootstrapTable from "../../../Components/Commen/DataTable/BootstrapTable";
import { format } from "date-fns";
import { useAuth } from "../../../../Context/AuthContext";
import UnauthorizedPage from "../../UnauthorizedPage";
import Login from "../../Root/Login/Login";
import { Table, Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";

function Employees() {
  const { isLogged, setIsLogged, employee, isAdmin } = useAuth();
  const [employees, setEmployees] = useState([]);
  const [displayAlert, setDisplayAlert] = React.useState(false);
  const [displayMessage, setDisplayMessage] = React.useState({
    message: "",
    type: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await EmployeeService.getAllEmployee();
      // console.log(response.data.data);
      setEmployees(response);
    } catch (error) {
      console.log(error);
    }
  };

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
          <div className="col-8 pt-5">
            <div className="container">
              <div className="mt-4">
                <div className="sec-title style-two">
                  <h2 className="mb-3">Employee</h2>
                </div>
              </div>
              <EmployeeTable
                className="m-0 p-0"
                data={employees}
                fetchData={fetchData}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Employees;
