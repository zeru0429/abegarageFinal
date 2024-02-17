import React from "react";
import AdminMenu from "../../Components/Admin/AdminMenu//AdminMenu";
import DashBordCard from "../../Components/Admin/Dashbord/DashBordCard";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../Context/AuthContext";
import LoginForm from "../../Components/Commen/Form/LoginForm";
import Login from "../Root/Login/Login";
import UnauthorizedPage from "../UnauthorizedPage";
function Admin() {
  const navigator = useNavigate();
  const { isLogged, setIsLogged, employee, isAdmin, fetchData } = useAuth();

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
              <section className="admin-single style-three">
                <div className="auto-container">
                  <br />
                  <div className="sec-title style-two">
                    <h2>Admin Dashbord</h2>
                    <div className="text">
                      Bring to the table win-win survival strategies to ensure
                      proactive domination. At the end of the day, going
                      forward, a new normal that has evolved from generation X
                      is on the runway heading towards a streamlined cloud
                      solution.{" "}
                    </div>
                  </div>
                  <div className="row">
                    <DashBordCard
                      title="OPEN FOR All"
                      subTitile="All Oreders"
                      thrirdTitile="LIST ORDER +"
                      iconClass="flaticon-power"
                      linkPath="/admin/orders"
                    />
                    <DashBordCard
                      title="OPEN FOR LEADERS"
                      subTitile="NEW ORDERS"
                      thrirdTitile="ADD ORDER +"
                      iconClass="flaticon-power"
                      linkPath="/admin/order"
                    />

                    <DashBordCard
                      title="OPEN FOR ADMINS"
                      subTitile="EMPLOYEES"
                      thrirdTitile="LIST OF EMPLOYEE +"
                      iconClass="flaticon-power"
                      linkPath="/admin/employees"
                    />
                    <DashBordCard
                      title="OPEN FOR ADMINS"
                      subTitile="ADD EMPLOYEES"
                      thrirdTitile="READ MORE +"
                      iconClass="flaticon-power"
                      linkPath="/admin/add-employee"
                    />
                    <DashBordCard
                      title="SERVICE AND REPAIRS"
                      subTitile="ENGINE SERVICE AND REPAIRS"
                      thrirdTitile="READ MORE +"
                      iconClass="flaticon-power"
                      linkPath="/admin/services"
                    />
                    <DashBordCard
                      title="SERVICE AND REPAIRS"
                      subTitile="TYRE AND WHEELS"
                      thrirdTitile="READ MORE +"
                      iconClass="flaticon-power"
                      linkPath="/admin/services"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
       
      )}
    </>
  );
}

export default Admin;
