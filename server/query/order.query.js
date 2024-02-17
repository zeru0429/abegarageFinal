export default {
   insertOrder: `INSERT INTO orders (employee_id, customer_id, vehicle_id, order_date, active_order, order_hash) VALUES (?, ?, ?, now(), ?, ?);`,
   updateOrder: `UPDATE orders SET  customer_id=?, vehicle_id=?, active_order=?, WHERE order_id = ?;`,
   deleteOrder: `DELETE FROM orders WHERE order_id = ?;`,
   getOrderById: `SELECT * FROM orders WHERE order_id = ?;`,
   getAllOrders: `SELECT o.order_id,
                cinfo.customer_first_name,
                cinfo.customer_last_name,
                cid.customer_email,
                cid.customer_phone_number,
                cvi.vehicle_model,
                cvi.vehicle_tag,
                cvi.vehicle_year,
                o.order_date,
                einfo.employee_first_name,
                einfo.employee_last_name,
                os.order_status
            FROM
                orders o
                INNER JOIN customer_identifier cid ON o.customer_id = cid.customer_id
                INNER JOIN customer_info cinfo ON o.customer_id = cinfo.customer_id
                INNER JOIN customer_vehicle_info cvi ON o.vehicle_id = cvi.vehicle_id
                INNER JOIN employee_info einfo ON o.employee_id = einfo.employee_id
                INNER JOIN order_status os ON o.order_id = os.order_id;`,
   insertOrderInfo: `INSERT INTO order_info (order_id, order_total_price, additional_request,additional_requests_completed) VALUES (?, ?, ?,?);`,
   insertOrderService: `INSERT INTO order_services (order_id, service_id,service_completed) VALUES (?, ?,?);`,
   insertOrderStatus: `INSERT INTO order_status (order_id, order_status) VALUES (?, ?);`,
  
  /*`vehicle_year` int(11) NOT NULL,
  `vehicle_make` varchar(255) NOT NULL,
  `vehicle_model` varchar(255) NOT NULL,
  `vehicle_type` varchar(255) NOT NULL,
  `vehicle_mileage` int(11) NOT NULL,  */
  
   getSingleCustomerOrderById : `SELECT
   orders.order_id AS orderId,
   customer_vehicle_info.vehicle_year AS vehicle_year,
   customer_vehicle_info.vehicle_make AS vehicle_make,
   customer_vehicle_info.vehicle_type AS vehicle_type,
   customer_vehicle_info.vehicle_model AS vehicle_model,
   order_info.order_total_price AS order_total_price,
   order_info.additional_requests_completed AS additional_requests_completed,
   customer_info.customer_first_name AS customer_first_name,
   customer_info.customer_last_name AS customer_last_name,
   order_info.estimated_completion_date AS estimated_completion_date,
   order_info.completion_date AS completion_date,
   order_info.additional_request AS additional_request,
   order_info.notes_for_internal_use AS notes_for_internal_use,
   order_info.notes_for_customer AS notes_for_customer,
   order_status.order_status AS order_status,
   JSON_ARRAYAGG(
       JSON_OBJECT(
           'service_id', common_services.service_id,
           'service_name', common_services.service_name,
           'service_description', common_services.service_description
       )
   ) AS services_information
FROM
   orders
JOIN
   customer_vehicle_info ON orders.vehicle_id = customer_vehicle_info.vehicle_id
JOIN
   order_info ON orders.order_id = order_info.order_id
JOIN
   customer_info ON orders.customer_id = customer_info.customer_id
JOIN
   order_services ON orders.order_id = order_services.order_id
JOIN
   common_services ON order_services.service_id = common_services.service_id
JOIN
   order_status ON orders.order_id = order_status.order_id
WHERE
   orders.customer_id = ?
GROUP BY
   orders.order_id,
   vehicle_year,
   vehicle_make,
   vehicle_model,
   order_total_price,
   additional_requests_completed,
   customer_first_name,
   customer_last_name,
   estimated_completion_date,
   completion_date,
   additional_request,
   notes_for_internal_use,
   notes_for_customer,
   order_status;
`,

   getOrdersByOrder_hash: `SELECT 
   oi.order_id,
   o.active_order,
   oi.order_total_price,
   oi.estimated_completion_date,
   oi.completion_date,
   oi.additional_request,
   oi.notes_for_internal_use,
   oi.notes_for_customer,
   oi.additional_requests_completed,
   ci.customer_first_name,
   ci.customer_last_name,
   ci.active_customer_status,
   cvi.vehicle_year,
   cvi.vehicle_make,
   cvi.vehicle_model,
   cvi.vehicle_type,
   cvi.vehicle_mileage,
   cvi.vehicle_tag,
   cvi.vehicle_serial,
   JSON_ARRAYAGG(
     JSON_OBJECT(
       'service_name', cs.service_name,
       'service_description', cs.service_description,
       'service_completed', os.service_completed
     )
   ) AS services
 FROM 
   orders o
   INNER JOIN order_info oi ON o.order_id = oi.order_id
   INNER JOIN customer_info ci ON o.customer_id = ci.customer_id
   INNER JOIN customer_vehicle_info cvi ON o.vehicle_id = cvi.vehicle_id
   INNER JOIN order_services os ON o.order_id = os.order_id
   INNER JOIN common_services cs ON os.service_id = cs.service_id
 WHERE 
   o.order_hash = ? 
 GROUP BY 
   oi.order_id,
   oi.order_total_price,
   oi.estimated_completion_date,
   oi.completion_date,
   oi.additional_request,
   oi.notes_for_internal_use,
   oi.notes_for_customer,
   oi.additional_requests_completed,
   ci.customer_first_name,
   ci.customer_last_name,
   ci.active_customer_status,
   cvi.vehicle_year,
   cvi.vehicle_make,
   cvi.vehicle_model,
   cvi.vehicle_type,
   cvi.vehicle_mileage,
   cvi.vehicle_tag,
   cvi.vehicle_serial;`
};
