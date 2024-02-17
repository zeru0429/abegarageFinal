import customerService from "../service/customer.service.js";
import vehicleService from "../service/vehicle.service.js";

const vehicleController = {
    createVehicle: async (req, res) => {
        try {
            const {customer_id,vehicle_year, vehicle_make, vehicle_model, vehicle_type, vehicle_mileage, vehicle_tag, vehicle_serial, vehicle_color } = req.body;
            
            if (!customer_id,!vehicle_year || !vehicle_make || !vehicle_model || !vehicle_type || !vehicle_mileage || !vehicle_tag || !vehicle_serial || !vehicle_color) {
                return res.status(400).json({
                    success: false,
                    message: "All fields are required",
                });
            }

            //check customer exists
            const isCustomer = await customerService.getCustomerByID(customer_id);

            if (!isCustomer.length) {
                return res.status(400).json({
                    success: false,
                    message: "no register customer is found",
                });
            }

            const isInserted = await vehicleService.insertVehicle(req.body);
            if (!isInserted) {
                return res.status(500).json({
                    success: false,
                    message: "Error during vehicle creation",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Vehicle added successfully",
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },

    updateVehicle: async (req, res) => {
        try {
            const id = req.params.id.substring(1);
            const { vehicle_year, vehicle_make, vehicle_model, vehicle_type, vehicle_mileage, vehicle_tag, vehicle_serial, vehicle_color } = req.body;

            if (!id || !vehicle_year || !vehicle_make || !vehicle_model || !vehicle_type || !vehicle_mileage || !vehicle_tag || !vehicle_serial || !vehicle_color) {
                return res.status(400).json({
                    success: false,
                    message: "All fields are required",
                });
            }

            const isUpdated = await vehicleService.updateVehicle(req.body, id);
            if (!isUpdated) {
                return res.status(500).json({
                    success: false,
                    message: "Error during vehicle updating",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Vehicle updated successfully",
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },

    deleteVehicle: async (req, res) => {
        try {
            const id = req.params.id.substring(1);
            const isDeleted = await vehicleService.deleteVehicle(id);
            if (!isDeleted) {
                return res.status(500).json({
                    success: false,
                    message: "Error during vehicle deletion",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Vehicle deleted successfully",
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },

    getVehicleById: async (req, res) => {
        try {
            const id = req.params.id.substring(1);
            const vehicle = await vehicleService.getVehicleById(id);
            if (!vehicle) {
                return res.status(404).json({
                    success: false,
                    message: "Vehicle not found",
                });
            }

            return res.status(200).json({
                success: true,
                data: vehicle,
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },

    getAllVehicles: async (req, res) => {
        try {
            const vehicles = await vehicleService.getAllVehicles();
            return res.status(200).json({
                success: true,
                data: vehicles,
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },

    getVehicleByCustomerId: async (req, res) => {
        try {
            const id = req.params.id.substring(1);
            const vehicle = await vehicleService.getVehicleByCustomerId(id);
            if (!vehicle) {
                return res.status(404).json({
                    success: false,
                    message: "Vehicle not found",
                });
            }

            return res.status(200).json({
                success: true,
                data: vehicle,
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
};

export default vehicleController;
