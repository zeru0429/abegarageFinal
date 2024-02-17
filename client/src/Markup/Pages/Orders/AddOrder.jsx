import React, { useEffect, useState } from "react";
import AdminMenu from "../../Components/Admin/AdminMenu/AdminMenu";
import OrderStepOne from "../../Components/Order/OrderStepOne";
import OrderStepTwo from "../../Components/Order/OrderStepTwo";
import OrderStepThree from "../../Components/Order/OrderStepThree";
import OrderStepFour from "../../Components/Order/OrderStepFour";

import SearchIcon from "@mui/icons-material/Search";
import Table from "react-bootstrap/Table";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

import CustomerService from "../../../Service/CustomerService";
import VehicleService from "../../../Service/VehicleService";
import ServicesService from "../../../Service/ServicesService";
import { Checkbox } from "@mui/material";
import AdditionalRequestForm from "../../Components/Commen/Form/AdditionalRequestForm";
import { useAuth } from "../../../Context/AuthContext";
import FormValidator from "../../../Utility/FormValidator";
import OrderService from "../../../Service/OrderService";
import { useNavigate } from "react-router-dom";
import Login from "../Root/Login/Login";
import UnauthorizedPage from "../UnauthorizedPage";
import { useToast } from "../../../Context/ToastContext";
function AddOrder() {
  const { toastData, hideToast, setToastData } = useToast();
  const [form, setForm] = useState({ service: [] });
  const [errors, setErrors] = useState({});
  const [customers, setCustomers] = useState([]);
  const [vehicle, setVehicles] = useState([]);
  const [garageService, setGarageService] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedVehicle, setSelectedVehicles] = useState(null);
  const { isLogged, setIsLogged, employee, isAdmin, fetchData } = useAuth();
  const navigator = useNavigate();

  useEffect(() => {
    handleCustomerSearch();
  }, [form.userInput]);

  useEffect(() => {
    handleVehicleSearch();
  }, [selectedCustomer]);

  useEffect(() => {
    //handleVehicleSearch();
  }, [selectedVehicle]);

  const fetchServices = async () => {
    const response = await ServicesService.getAllService();
    // console.log(response);
    setGarageService(response);
  };

  const handleCustomerSearch = async () => {
    try {
      const response = await CustomerService.searchCustomer(form.userInput);
      setCustomers(response);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const handleVehicleSearch = async () => {
    if (selectedCustomer !== null) {
      const response = await VehicleService.getSingleCustomerVehicle(
        selectedCustomer.customer_id
      );
      setVehicles(response);
    }
    //console.log(selectedVehicle);
  };

  const handleSelectCustomer = (singleCustomer) => {
    // console.log(singleCustomer);
    setSelectedCustomer(singleCustomer);
  };

  const hadleSubmit = async (e) => {
    e.preventDefault();
    const formaData2 = {
      employee_id: employee.employee_id,
      customer_id: selectedCustomer.customer_id,
      vehicle_id: selectedVehicle.vehicle_id,
      order_total_price: form.price,
      additional_request: form.serviceDescription,
      notes_for_internal_use: form.serviceDescription,
      notes_for_customer: form.serviceDescription,
      additional_requests_completed: 0,
      order_service_id: form.service,
    };

    //console.log(formaData2);
    const formData = FormValidator.orderForm(formaData2);
    const isValid = formData.isValid;
    if (!isValid) {
      const errorData = formData.errors;
      //console.log(errorData)
      setErrors(errorData);
      return;
    } else {
      setErrors({});
      const response = await OrderService.register(formaData2);
      setToastData(response);
      // console.log(response.success)
      if (!response.success) {
        setErrors({});
        // http://localhost:5173/admin/orders
      } else {
        setForm({});
        setErrors({});
        navigator("/admin/orders");
      }
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
          <div className="col-8">
            <div className="sec-title style-two">
              <h2 className="p-3">Create new Order</h2>
            </div>

            {/* content one */}
            <div className="contact-form">
              <div className="row clearfix">
                {!selectedCustomer && (
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
                      <SearchIcon onClick={handleCustomerSearch} />
                    </span>
                    {errors.userInput && (
                      <div className="validation-error" role="alert">
                        {errors.userInput}
                      </div>
                    )}
                  </div>
                )}
                {/* content two */}
                {customers.length !== 0 ? (
                  !selectedCustomer && (
                    <Table className="m-3" striped bordered hover>
                      <tbody>
                        {customers &&
                          customers.map((singleCustomer) => {
                            return (
                              <tr key={singleCustomer.customer_id}>
                                <td>{singleCustomer.customer_first_name}</td>
                                <td>{singleCustomer.customer_last_name}</td>
                                <td>{singleCustomer.customer_email}</td>
                                <td>{singleCustomer.customer_phone_number}</td>
                                <td>
                                  <PanToolAltIcon
                                    onClick={() =>
                                      handleSelectCustomer(singleCustomer)
                                    }
                                  />
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </Table>
                  )
                ) : (
                  <div className="form-group col-md-12">
                    <button
                      className="theme-btn btn-style-one"
                      onClick={() => {
                        navigator("/admin/add-customer");
                      }}
                      data-loading-text="Please wait...">
                      <span>Add New Customer</span>
                    </button>
                  </div>
                )}

                {/* content three */}
                {selectedCustomer && (
                  <div
                    className="container mb-2"
                    style={{ backgroundColor: "white" }}>
                    <div className="row">
                      <div className="col-10 p-4">
                        <h5 className="pb-3">
                          <b>
                            {selectedCustomer.customer_first_name}{" "}
                            {selectedCustomer.customer_last_name}
                          </b>
                        </h5>
                        <div>
                          <b>Email: </b>{" "}
                          <span className="text">
                            {" "}
                            {selectedCustomer.customer_email}
                          </span>
                        </div>
                        <div>
                          <b>Phone: </b>{" "}
                          <span className="text">
                            {selectedCustomer.customer_phone_number}
                          </span>
                        </div>
                        <div>
                          <b>Active Customer: </b>
                          <span className="text">
                            {selectedCustomer.active_customer_status == 1
                              ? "Yes"
                              : "No"}
                          </span>
                        </div>
                        <div>
                          <b>Edit Customer info: </b>{" "}
                          <BorderColorOutlinedIcon className="danger" />
                        </div>
                      </div>
                      <div className="col-1 center m-0 mt-5 ">
                        <div className="btn btn-danger">X</div>
                      </div>
                    </div>
                  </div>
                )}

                {vehicle && selectedCustomer && (
                  <div
                    className="container mt-2"
                    style={{ backgroundColor: "white" }}>
                    <div className="row pt-5">
                      <div className="col-12">
                        <h5 className="pb-3">
                          <b>Choose Vehicle d</b>
                        </h5>
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>Year</th>
                              <th>Mark</th>
                              <th>Model</th>
                              <th>Tag</th>
                              <th>Serial</th>
                              <th>Color</th>
                              <th>Mileage</th>
                              <th>Choose</th>
                            </tr>
                          </thead>

                          <tbody>
                            {vehicle.length < 1 && (
                              <tr className="text">
                                {" "}
                                <td> no vehicle found</td>{" "}
                              </tr>
                            )}
                            {vehicle &&
                              vehicle.map((singleVehicle) => {
                                return (
                                  <tr key={singleVehicle.vehicle_id}>
                                    <td>{singleVehicle.vehicle_year}</td>
                                    <td>{singleVehicle.vehicle_make}</td>
                                    <td>{singleVehicle.vehicle_model}</td>
                                    <td>{singleVehicle.vehicle_tag}</td>
                                    <td>{singleVehicle.vehicle_serial}</td>
                                    <td>{singleVehicle.vehicle_color}</td>
                                    <td>{singleVehicle.vehicle_mileage}</td>
                                    <td>
                                      <PanToolAltIcon
                                        onClick={() => {
                                          setSelectedVehicles(singleVehicle);
                                          fetchServices();
                                        }}
                                      />
                                    </td>
                                  </tr>
                                );
                              })}
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                )}

                {/* content four */}
                {selectedVehicle && (
                  <div
                    className="container m-2 p-2"
                    style={{ backgroundColor: "white" }}>
                    <div className="row">
                      <div className="col-10 p-4">
                        <h5 className="pb-3">
                          <b>{selectedVehicle.vehicle_make}</b>
                        </h5>
                        <div>
                          <b>Vehicle color : </b>{" "}
                          <span className="text">
                            {selectedVehicle.vehicle_color}
                          </span>
                        </div>
                        <div>
                          <b>Vehicle tag: </b>{" "}
                          <span className="text">
                            {" "}
                            {selectedVehicle.vehicle_tag}
                          </span>
                        </div>
                        <div>
                          <b>Vehicle year : </b>{" "}
                          <span className="text">
                            {" "}
                            {selectedVehicle.vehicle_year}
                          </span>
                        </div>
                        <div>
                          <b>Vehicle mileage : </b>{" "}
                          <span className="text">
                            {selectedVehicle.vehicle_mileage}{" "}
                          </span>
                        </div>
                        <div>
                          <b>Vehicle serial: </b>{" "}
                          <span className="text">
                            {selectedVehicle.vehicle_serial}
                          </span>
                        </div>

                        <div>
                          <b>Edit Customer info: </b>{" "}
                          <BorderColorOutlinedIcon className="danger" />
                        </div>
                      </div>
                      <div className="col-1 center m-0 mt-5 ">
                        <div className="btn btn-danger">X</div>
                      </div>
                    </div>
                  </div>
                )}

                {garageService &&
                  garageService.map((singleService) => (
                    <div
                      key={singleService.service_id}
                      className="conatainer m-2 p-2"
                      style={{ background: "white" }}>
                      <div className="row  m-0 p-0">
                        <div className="col-12">
                          <h5>
                            <b>{singleService.service_name}</b>
                          </h5>
                        </div>
                      </div>
                      <div className="row m-0 p-0">
                        <div className="col-10">
                          <p className="text">
                            {singleService.service_description}
                          </p>
                        </div>
                        <div className="col-1">
                          <Checkbox
                            onClick={() => {
                              setForm((form) => ({
                                ...form,
                                service: [
                                  ...form.service,
                                  singleService.service_id,
                                ],
                              }));
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                {garageService.length > 0 && (
                  <div
                    className="container mt-2 mb-5 p-5"
                    style={{ background: "white" }}>
                    <AdditionalRequestForm
                      hadleSubmit={hadleSubmit}
                      form={form}
                      setForm={setForm}
                      errors={errors}
                      setErrors={setErrors}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddOrder;
