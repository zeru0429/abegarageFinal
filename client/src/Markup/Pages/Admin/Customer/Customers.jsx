import React, { useEffect, useState } from "react";
import AdminMenu from "../../../Components/Admin/AdminMenu/AdminMenu";
import CustomerTable from "../../../Components/Commen/DataTable/CustomerTable";
import CustomerService from "../../../../Service/CustomerService";
import Login from "../../Root/Login/Login";
import { useAuth } from "../../../../Context/AuthContext";
import SearchIcon from "@mui/icons-material/Search";
import { isValid } from "date-fns";

function Customers() {
  const { isLogged, isAdmin, isManager } = useAuth();
  const [form, setForm] = useState({
    userInput: ""
  });
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
   //handleCustomerSearch();
  }, [form.userInput]);

  const fetchData = async () => {
    try {
      const response = await CustomerService.getAllCustomers();
      setCustomer(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCustomerSearch = async () => {
    try {
      const response = await CustomerService.searchCustomer(form.userInput);
     // console.log(response);
     setCustomer(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await CustomerService.searchCustomer(form.userInput);
      setCustomer(response);
    } catch (error) {
      console.error(error);
    }
  };


  console.log(customer);

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
              <div className="mt-4">
                <div className="sec-title style-two">
                  <h2 className="">Customer</h2>
                </div>
                <div className="contact-form mb-4">
                  <div className="row clearfix">
                    <div className="form-group col-md-12 mb-0 pb-0">
                      <input
                        type="text"
                        name="userInput"
                        placeholder="Search for customer using first name, last name, email address, or phone number"
                        required
                        onChange={(e) => {
                          setForm({
                            ...form,
                            userInput: e.target.value,
                          });
                        }}
                      />
                      <span id="searchIcon">
                        <SearchIcon onClick={handleSearch} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {customer && <CustomerTable
                className="m-0 p-0"
                data={customer}
                setCustomer = {setCustomer}
                fetchData={fetchData}
              />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Customers;
