import React, { useEffect, useState } from 'react';
import OrderService from '../../../../Service/OrderService';
import { format } from 'date-fns';
import { useAuth } from '../../../../Context/AuthContext';
import { Table, Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

function OrdersTable({ data }) {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const response = await OrderService.getAllOrders();
    setOrderList(response);
  };

  //console.log(orderList);

  const getOrderStatusColor = (status) => {
    if (status === 0) {
      return 'grey';
    } else if (status === 1) {
      return 'yellow';
    } else {
      return 'green';
    }
  };

  return (
    <>
      <Table striped bordered hover className='m-0 p-0'>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Customer</th>
            <th>Vehicle</th>
            <th>Order Date</th>
            <th>Received By</th>
            <th>Order Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orderList &&
            orderList.map((singleOrder) => {
              return (
                <tr key={singleOrder.order_id}>
                  <td>{singleOrder.order_id}</td>
                  <td>
                    {singleOrder.customer_first_name} {singleOrder.customer_last_name} <br />
                    {singleOrder.customer_email} <br />
                    {singleOrder.customer_phone_number}
                  </td>
                  <td>
                    {singleOrder.vehicle_model} <br />
                    {singleOrder.vehicle_year} <br />
                    {singleOrder.vehicle_tag}
                  </td>
                  <td>{singleOrder.order_date}</td>
                  <td>
                    {singleOrder.employee_first_name} {singleOrder.employee_last_name}
                  </td>
                  <td
                    className="status-cell"
                    style={{ backgroundColor: getOrderStatusColor(singleOrder.order_status) }}
                  >
                    {singleOrder.order_status === 0
                      ? 'Received'
                      : singleOrder.order_status === 1
                      ? 'Progress'
                      : 'Completed'}
                  </td>
                  <td>
                    <Button variant="light" className="action-button">
                      <FaEdit />
                    </Button>
                    <Button variant="light" className="action-button">
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
}

export default OrdersTable;