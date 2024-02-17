import React, { useEffect, useState } from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import OrderService from "../../../../Service/OrderService";
import { useParams } from "react-router-dom";
function OrderDetail() {
  const [order, setOrder] = useState();
  const { orderHash } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if(orderHash){
      const response = await OrderService.getSingleOrder(orderHash);
    console.log(response[0]);
    setOrder(response[0]);
    }
  };

  return (
    <>
      {order ? (
        <div className="container">
          <div className="row">
            <div className="col-10">
              <div className="sec-title style-two  mt-5">
                <h2 className="center">
                  {order.customer_first_name} {order.customer_last_name}
                </h2>
              </div>
            </div>
            <div className="col-2">
              <div
                className={
                  order.active_order == 0
                    ? "btn btn-primary mt-5"
                    : "btn btn-warning mt-5"
                }>
                {order.active_order == 0 ? "Completed" : "In progress"}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="text m-0 p-0">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                at illo, consequatur tempora iusto recusandae id qui, nostrum ab
                modi eaque vitae iste minus alias a temporibus possimus quod
                maiores! Et delectus explicabo unde nobis, est corrupti tempore
                repellat expedita rem veniam excepturi neque a dicta quas sed
                fugiat deserunt ad doloremque voluptatem. Hic soluta repellendus
                temporibus odio optio quos? Libero repudiandae minima voluptatem
              </p>
            </div>
          </div>
          <div className="row pt-5 pb-5">
            <div className="col-6">
              <div
                className="container mb-2"
                style={{
                  backgroundColor: "white",
                  borderBottom: "5px solid red",
                }}>
                <div className="row">
                  <div className="col-12 p-4">
                    <h5 className="pb-3">
                      <b>
                        {order.customer_first_name} {order.customer_last_name}
                      </b>
                    </h5>
                    <div>
                      <b>Email: </b>{" "}
                      <span className="text"> {order.customer_email}</span>
                    </div>
                    <div>
                      <b>Phone: </b>{" "}
                      <span className="text">
                        {order.customer_phone_number}
                      </span>
                    </div>
                    <div>
                      <b>Active Customer: </b>
                      <span className="text">
                        {order.active_customer_status == 1 ? "Yes" : "No"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div
                className="container mb-2"
                style={{
                  backgroundColor: "white",
                  borderBottom: "5px solid red",
                }}>
                <div className="row">
                  <div className="col-12 p-4">
                    <h5 className="pb-3">
                      <b>{order.vehicle_model}</b>
                    </h5>
                    <div>
                      <b>Vehicle tage: </b>{" "}
                      <span className="text"> {order.vehicle_tag}</span>
                    </div>
                    <div>
                      <b>Vehicle year: </b>{" "}
                      <span className="text">{order.vehicle_year}</span>
                    </div>
                    <div>
                      <b>Vehicle mileage: </b>
                      <span className="text">{order.vehicle_mileage}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2 mb-2">
            <div className="col-12 mb-5">
              <div
                className="container p-5"
                style={{
                  backgroundColor: "white",
                  borderBottom: "5px solid red",
                }}>
                <div className="row">
                  <h5>{order.vehicle_model}</h5>
                </div>
                <div className="row">
                  <h2>
                    <b>Required Service</b>
                  </h2>
                </div>
                {order.services &&
                  order.services.map((singleService) => {
                    return (
                      <div
                        className="row m-2 p-3"
                        style={{ border: "5px solid #fcfcfc" }}>
                        <div className="container">
                          <div className="row">
                            <div className="col-10">
                              <h5>
                                <b>{singleService.service_name}</b>
                              </h5>
                              <p className="text">
                                {singleService.service_description}
                              </p>
                            </div>
                            <div className="col-2">
                              <div
                                className={
                                  singleService.service_completed == 1
                                    ? "btn btn-primary mt-5"
                                    : "btn btn-warning mt-5"
                                }>
                                {singleService.service_completed == 0
                                  ? "In progress"
                                  : "completed"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                <div
                  className="row m-2 p-3"
                  style={{ border: "5px solid #fcfcfc" }}>
                  <div className="container">
                    <div className="row">
                      <div className="col-10">
                        <h5>
                          <b>Additional request</b>
                        </h5>
                        <p className="text">{order.additional_request}</p>
                      </div>
                      <div className="col-2">
                        <div className="btn btn-warning mt-5">In progress</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>No order is found</h1>
      )}
    </>
  );
}

export default OrderDetail;
