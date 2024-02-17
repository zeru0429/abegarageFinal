export default {
	getCustomerByEmail: `SELECT * FROM customer_identifier WHERE customer_email = ?;`,
	insertIntoCustomerIdentifierTable: `INSERT INTO customer_identifier (customer_email, customer_phone_number, customer_added_date, customer_hash) VALUES (?, ?,NOW(),?)`,
	insertCustomerInfoTable: `INSERT INTO customer_info (customer_id, customer_first_name, customer_last_name, active_customer_status)VALUES (?,?,?,?);`,
	insertCustomerVehicleInfoTable: `INSERT INTO customer_vehicle_info (customer_id, vehicle_year, vehicle_make, vehicle_model, vehicle_type, vehicle_mileage, vehicle_tag, vehicle_serial, vehicle_color) VALUES (?,?,?,?,?,?,?,?,?);`,
	getCustomerByID: `SELECT * FROM customer_identifier WHERE customer_id = ?;`,

	//update
	updateCustomerInfoTable: `UPDATE customer_info SET customer_first_name = ?,  customer_last_name = ?,  active_customer_status = ?  WHERE customer_id =?`,
	updateCustomerPhoneNumber: `UPDATE customer_identifier SET customer_phone_number = ?  WHERE customer_id = ?`,

	// Update customer vehicle information
	updateCustomerVehicleInfoTable: `UPDATE customer_vehicle_info
            SET 
            vehicle_year = ?,
            vehicle_make = ?,
            vehicle_model = ?,
            vehicle_type = ?,
            vehicle_mileage = ?,
            vehicle_tag = ?,
            vehicle_serial = ?,
            vehicle_color = ?
            WHERE customer_id = ?;`,

deleteCustomer: `DELETE FROM customer_info WHERE customer_id = ?;`,
deleteCustomerIdentifier: `DELETE FROM customer_identifier WHERE customer_id = ?;`,
allCustomers_data: `SELECT
    customer_info.customer_id,
    customer_info.customer_first_name AS firstName,
    customer_info.customer_last_name AS lastName,
    customer_identifier.customer_email AS email,
    customer_identifier.customer_phone_number AS phoneNumber,
    customer_identifier.customer_added_date AS addedDate,
    customer_info.active_customer_status AS active
FROM
    customer_info
JOIN
    customer_identifier
ON
    customer_info.customer_id = customer_identifier.customer_id;`,

seachCustomer:`SELECT * FROM customer_identifier ci JOIN customer_info cinfo ON ci.customer_id = cinfo.customer_id
        WHERE cinfo.customer_first_name LIKE CONCAT('%', ?, '%')
        OR cinfo.customer_last_name LIKE CONCAT('%', ?, '%')
        OR ci.customer_email LIKE CONCAT('%', ?, '%')
        OR ci.customer_phone_number LIKE CONCAT('%', ?, '%');`





};