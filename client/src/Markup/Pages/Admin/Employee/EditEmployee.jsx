import React, { useEffect, useState } from "react";
import AdminMenu from "../../../Components/Admin/AdminMenu/AdminMenu";
import { useNavigate, useLocation } from "react-router-dom";
import EditEmployeeForm from "../../../Components/Commen/Form/EditEmployeeForm";
import EmployeeService from "../../../../Service/Employee.service";
import { useAuth } from "../../../../Context/AuthContext";
import UnauthorizedPage from "../../UnauthorizedPage";
import Login from "../../Root/Login/Login";

function EditEmployees() {
  const { isLogged, setIsLogged, employee, isAdmin, fetchData } = useAuth();
  const navigator = useNavigate();
  const location = useLocation();
  const { data } = location.state || {};
  // console.log(data);

  const [roles, setRoles] = useState([]);
  useEffect(() => {
    fetchRole();
    // data.company_role_id(getRoleId(data.company_role_name));
  }, []);

  const fetchRole = async () => {
    const roles = await EmployeeService.getRoles();
    setRoles(roles);
  };

  const getRoleId = (role) => {
    roles.map((single) => {
      if (single.company_role_name == role) {
        // console.log(single.company_role_id)
        return single.company_role_id;
      }
    });
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
              <div className="inner-column">
                <div className="contact-form sec-title style-two">
                  <div className="sec-title style-two">
                    <h2>
                      Edit: {data.firstname} {data.lastname}
                    </h2>
                    <p className="font-weight-bold pt-0 mt-0">
                      Empployee email: {data.email}
                    </p>
                  </div>
                </div>

                <div className="contact-form">
                  <div>
                    <EditEmployeeForm data={data} roles={roles} />
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

export default EditEmployees;
