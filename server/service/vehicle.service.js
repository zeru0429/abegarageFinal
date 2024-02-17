import { query } from "../config/pool.js";
import vehicleQuery from "../query/vehicle.query.js";

const vehicleService = {
    insertVehicle: async (data) => {
        try {
            console.log(data)
            console.log(vehicleQuery.insertVehicle)
            const row = await query(vehicleQuery.insertVehicle, [
                data.customer_id,
                data.vehicle_year,
                data.vehicle_make,
                data.vehicle_model,
                data.vehicle_type,
                data.vehicle_mileage,
                data.vehicle_tag,
                data.vehicle_serial,
                data.vehicle_color
            ]);
           return row;
          
        } catch (error) {
            console.log(error);
            throw new Error("Error inserting vehicle");
        }
    },

    updateVehicle: async (data, id) => {
        try {
            const row = await query(vehicleQuery.updateVehicle, [
                data.vehicle_year,
                data.vehicle_make,
                data.vehicle_model,
                data.vehicle_type,
                data.vehicle_mileage,
                data.vehicle_tag,
                data.vehicle_serial,
                data.vehicle_color,
                id
            ]);
            return row;
        } catch (error) {
            console.log(error);
            throw new Error("Error updating vehicle");
        }
    },

    deleteVehicle: async (id) => {
        try {
            const row = await query(vehicleQuery.deleteVehicle, [id]);
            return row;
        } catch (error) {
            console.log(error);
            throw new Error("Error deleting vehicle");
        }
    },

    getVehicleById: async (id) => {
        try {
            const rows = await query(vehicleQuery.getVehicleById, [id]);
            return rows;
        } catch (error) {
            console.log(error);
            throw new Error("Error getting vehicle by ID");
        }
    },

    getAllVehicles: async () => {
        try {
            const rows = await query(vehicleQuery.getAllVehicles);
            return rows;
        } catch (error) {
            console.log(error);
            throw new Error("Error getting all vehicles");
        }
    },

    getVehicleByCustomerId: async (id) => {
        try {
            const rows = await query(vehicleQuery.getVehicleCustomerId, [id]);
            return rows;
        } catch (error) {
            console.log(error);
            throw new Error("Error getting vehicle by ID");
        }
    },

};

export default vehicleService;
