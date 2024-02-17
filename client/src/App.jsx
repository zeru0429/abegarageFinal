import { Route, Routes } from "react-router-dom";

//import styls
import "./assets/template_assets/css/bootstrap.css";
import "./assets/template_assets/css/style.css";
import "./assets/template_assets/css/color.css";
import "./assets/styles/custom.css";
import "./App.css";
import "./assets/template_assets/css/responsive.css";

// --------------- pages ------------------------ //
//root
import Home from "./Markup/Pages/Root/Home/Home";
import About from "./Markup/Pages/Root/About/About";
import Contact from "./Markup/Pages/Root/Contact/Contact";
import OrderDetail from "./Markup/Pages/Root/OrderDetail/OrderDetail";
import Login from "./Markup/Pages/Root/Login/Login";
import Services from "./Markup/Pages/Root/Services/Services";

//order
import Orders from "./Markup/Pages/Orders/Orders";
import AddOrder from "./Markup/Pages/Orders/AddOrder";
import EditOrder from "./Markup/Pages/Orders/EditOrder";
//admin
import Admin from "./Markup/Pages/Admin/Admin";
import AddCustomer from "./Markup/Pages/Admin/Customer/AddCustomer";
import EditCustomer from "./Markup/Pages/Admin/Customer/EditCustomer";
import Customers from "./Markup/Pages/Admin/Customer/Customers";
import CustomerProfile from "./Markup/Pages/Admin/Customer/CustomerProfile";
import AddEmployee from "./Markup/Pages/Admin/Employee/AddEmployee";
import EditEmployee from "./Markup/Pages/Admin/Employee/EditEmployee";
import Employees from "./Markup/Pages/Admin/Employee/Employees";
import AddVehicle from "./Markup/Pages/Admin/Vehicle/AddVehicle";
import EditVehicle from "./Markup/Pages/Admin/Vehicle/EditVehicle";
import Service from "./Markup/Pages/Admin/Services/ServicesManage";
import AddService from "./Markup/Pages/Admin/Services/AddServices";
import Four04 from "./Markup/Pages/Four04";
import UnauthorizedPage from "./Markup/Pages/UnauthorizedPage";
// !------------------ pages --------------------------! //

// ------------------ components   -----------------------//
import Header from "./Markup/Components/Commen/Header/Header";
import Footer from "./Markup/Components/Commen/Footer/Footer";
import CustomeAlert from "./Markup/Components/Commen/Alerts/Alert";
import ConfirmationDialog from "./Markup/Components/Commen/Dialog/ConfirmationDialog";
import PrivateAuth from "./Markup/Components/Auth/PrivateAuth";

// ---!------------- components   ---------------!-------//

import { useAuth } from "./Context/AuthContext";
import ToastNotification from "./Markup/Components/Commen/Toast/Toast";

function App() {
  const { isLogged, setIsLogged, employee, isAdmin, fetchData } = useAuth();
  //console.log(isAdmin);

  return (
    <div className="App">
      <Header />
      <div className="conatiner">
        <div className="row">
          <div className="col-12">
            <div className="">
              <ToastNotification />
              <Routes basename='/abegarage'>
                {/* Root pages anyone */}
                <Route
                  path="/"
                  element={
                    <>
                      <Home />
                    </>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <>
                      <About />
                    </>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <>
                      <Contact />
                    </>
                  }
                />
                <Route
                  path="/order-detail/:orderHash"
                  element={
                    <>
                      <OrderDetail />
                    </>
                  }
                />
                <Route
                  path="/services"
                  element={
                    <>
                      <Services />
                    </>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <>
                      <Login />
                    </>
                  }
                />
                <Route
                  path="/unauthorized"
                  element={
                    <>
                      <UnauthorizedPage />
                    </>
                  }
                />
                <Route
                  path="/admin/order/{orderHash}/edit"
                  element={
                    <>
                      <EditOrder />
                    </>
                  }
                />
                <Route
                  path="*"
                  element={
                    <>
                      <Four04 />
                    </>
                  }
                />
                {/* order pages any employee */}
                <Route
                  path="/admin/orders"
                  element={
                    <>
                      <Orders />
                    </>
                  }
                />
                <Route
                  path="/admin/order"
                  element={
                    <>
                      <AddOrder />
                    </>
                  }
                />
                {/* Admin pages admin only*/}
                <Route
                  path="/admin"
                  element={
                    <>
                      <Admin style={{ width: "100vw" }} />
                    </>
                  }
                />
                <Route
                  path="/admin/employees"
                  element={
                    <>
                      <Employees />
                    </>
                  }
                />
                <Route
                  path="/admin/employee/edit/:id"
                  element={
                    <>
                      <EditEmployee />
                    </>
                  }
                />
                <Route
                  path="/admin/add-employee"
                  element={
                    <>
                      <AddEmployee />
                    </>
                  }
                />
                {/* manager and admins */}
                <Route
                  path="/admin/add-customer"
                  element={
                    <>
                      <AddCustomer />
                    </>
                  }
                />
                <Route
                  path="/admin/customers"
                  element={
                    <>
                      <Customers />
                    </>
                  }
                />
                <Route
                  path="/admin/customer/:{customerId}"
                  element={
                    <>
                      <CustomerProfile />
                    </>
                  }
                />
                <Route
                  path="/admin/customer/edit/:id"
                  element={
                    <>
                      <EditCustomer />
                    </>
                  }
                />
                <Route
                  path="/admin/customer/{customerId}"
                  element={
                    <>
                      <AddVehicle />
                    </>
                  }
                />
                   <Route
                  path="/admin/vehicle/edit/:id"
                  element={
                    <>
                      <EditVehicle />
                    </>
                  }
                />
                <Route
                  path="/admin/services"
                  element={
                    <>
                      <Service />
                    </>
                  }
                />
                <Route
                  path="/admin/add-service"
                  element={
                    <>
                      <AddService />
                    </>
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
