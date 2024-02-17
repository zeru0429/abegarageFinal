export default {
   
   getAllVehicles: `SELECT * FROM customer_vehicle_info;`,
   getVehicleById: `SELECT * FROM customer_vehicle_info WHERE vehicle_id = ?;`,
   getVehicleCustomerId: `SELECT * FROM customer_vehicle_info WHERE customer_id = ?;`,
   deleteVehicle: `DELETE FROM customer_vehicle_info WHERE vehicle_id = ?;`,
   updateVehicle: `UPDATE customer_vehicle_info SET vehicle_year=?, vehicle_make=?, vehicle_model=?, vehicle_type=?, vehicle_mileage=?, vehicle_tag=?, vehicle_serial=?, vehicle_color=? WHERE vehicle_id = ?;`,
   insertVehicle: `INSERT INTO customer_vehicle_info(customer_id,vehicle_year, vehicle_make, vehicle_model, vehicle_type, vehicle_mileage, vehicle_tag, vehicle_serial, vehicle_color) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?);`
};
