import React, { useEffect, useState } from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import Avator from "../../Components/Commen/Avator/Avator";
import AddVehicleForm from "../../Components/Commen/Form/AddVehicleForm";
import AddEmployeeForm from "../Commen/Form/AddEmployeeForm";
import { Link } from "react-router-dom";
import VehicleService from "../../../Service/VehicleService";
import { Table } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import OrderService from "../../../Service/OrderService";

function CustomerDetail({ data }) {
  const [popUp, setPopUp] = useState(true);
  const [showVehicleFom, setVehicleForm] = useState(false);
  const [vehicle, setVehicles] = useState([]);
  const [orders, setOrders] = useState([{}]);

  const handleClick = () => {
    console.log("kkk");
    setVehicleForm(!showVehicleFom);
    //setPopUp(false);
  };

  const handleClickVehicleForm = () => {
    setVehicleForm(true);
  };

  useEffect(() => {
    handleVehicleSearch();
    handleOrderSearch();
  }, []);

  const handleVehicleSearch = async () => {
    if (data !== null) {
      const response = await VehicleService.getSingleCustomerVehicle(
        data.customer_id
      );
      //console.log(response);
      setVehicles(response);
    }
    //console.log(singleVehicle);
  };

  const handleOrderSearch = async () => {
    // console.log(data.customer_id);
    if (data !== null) {
      const response = await OrderService.getSingleCustomerOrder(
        data.customer_id
      );
     // console.log(response);
      setOrders(response);
    }
    //console.log(singleVehicle);
  };

  return (
    <div className="pt-5 pb-5 pl-1 pr-5">
      <div className="container p-4">
        <div className="row p-0 m-0">
          <div className="col-4">
            <Avator data="Info" />
          </div>
          <div className="col-8">
            <h5 className="pb-3">
              <b>
                Customer: {data.firstName} {data.lastName}
              </b>
            </h5>
            <div>
              <b>Email: </b> {data.email}{" "}
            </div>
            <div>
              <b>Phone: </b>
              {data.phoneNumber}{" "}
            </div>
            <div>
              <b>Active Customer: </b>
              {data.active == 0 ? "No" : "Yes"}{" "}
            </div>
            <div>
              <b>Edit Customer info: </b>
              <Link to="/admin/customer/edit/:id" state={{ data: data }}>
                <BorderColorOutlinedIcon />
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>

      {vehicle &&
        vehicle.map((singleVehicle) => {
          // console.log(singleVehicle);
          return (
            <div className="container p-4">
              <div className="row p-0 m-0">
                <div className="col-4">
                  <Avator data="Car" />
                </div>
                <div className="col-8">
                  <h5 className="pb-3">
                    <b>Vehicle for: {data.firstName} </b>
                  </h5>
                  <div>
                    <b>Vehicle color : </b>{" "}
                    <span className="text">{singleVehicle.vehicle_color}</span>
                  </div>
                  <div>
                    <b>Vehicle tag: </b>{" "}
                    <span className="text"> {singleVehicle.vehicle_tag}</span>
                  </div>
                  <div>
                    <b>Vehicle year : </b>{" "}
                    <span className="text"> {singleVehicle.vehicle_year}</span>
                  </div>
                  <div>
                    <b>Vehicle mileage : </b>{" "}
                    <span className="text">
                      {singleVehicle.vehicle_mileage}{" "}
                    </span>
                  </div>
                  <div>
                    <b>Vehicle serial: </b>{" "}
                    <span className="text">{singleVehicle.vehicle_serial}</span>
                  </div>
                  <div>
                    <b>Edit Customer info: </b>
                    <Link
                      to="/admin/vehicle/edit/:id"
                      state={{ data: singleVehicle }}>
                      <BorderColorOutlinedIcon />
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      {
        <div className="container p-4">
          <div className="row p-0 m-0">
            <div className="col-4">
              <Avator data="Cars" />
            </div>
            <div className="col-8">
              <h5 className="pb-3">
                <b>
                  Vehicle for {data.firstName} {data.lastName}{" "}
                </b>
              </h5>
              {vehicle.length == 0 && (
                <input type="text" value="" placeholder="No vehicle found" />
              )}
              <br />
              <br />
              <div
                className="theme-btn btn-style-one"
                onClick={handleClickVehicleForm}>
                ADD NEW VEHICLE
              </div>
            </div>
          </div>
        </div>
      }

      {showVehicleFom && (
        <div className="container p-4">
          <div className="row">
            <div className="col-12">
            <button
                onClick={handleClick}
                className="float-right btn btn-danger">
                X
              </button>
            </div>
            <div className="col-12">
             
              <AddVehicleForm data={data}  showVehicleFom={showVehicleFom} setVehicleForm={setVehicleForm}  handleVehicleSearch={handleVehicleSearch}/>
            </div>
          </div>
        </div>
      )}

      <div className="container p-4">
        <div className="row p-0 m-0">
          <div className="col-md-4">
            <Avator data="Orders" />
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <h5 className="card-title">
                  <b>Order of {data.firstName}</b>
                </h5>
              </div>

              {orders.length > 0 ? (
                orders.map((singleOrder) => {   {console.log(singleOrder)}
                  return (
                    <div
                      key={singleOrder.orderId}
                      className="container m-2 p-3"
                      style={{ background: "white" }}>
                      <div className="row">
                        <div className="col-8 pb-0">
                          <h5>
                            <b>{singleOrder.vehicle_model}</b>
                          </h5>
                          {singleOrder.services_information &&
                            singleOrder.services_information.map(
                              (singleService) => {
                                return (
                                  <div className="col-8">
                                    <p className="text">
                                      {singleService.service_name}.
                                    </p>
                                  </div>
                                );
                              }
                            )}
                        </div>
                        <div className="col-4">
                          <p className="text">
                            {singleOrder.order_total_price}
                          </p>
                        
                          <div
                            className={
                              singleOrder.order_status === 0
                                ? "btn btn-primary mt-5"
                                : "btn btn-warning mt-5"
                            }>
                            {singleOrder.order_status === 0
                              ? "In progress"
                              : "completed"}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="card">
                  <div className="card-body">
                    <p className="text"> No Orders Found</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetail;
