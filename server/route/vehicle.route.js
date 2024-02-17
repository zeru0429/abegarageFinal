import express from "express";
import vehicleController from "../controller/vehicle.controller.js";
const vehicleRoute = express.Router();
import {auth,isAdmin,isManagerOrAdmin} from "../auth/auth.js";

vehicleRoute.post("/api/vehicles", [auth,isManagerOrAdmin],vehicleController.createVehicle);
vehicleRoute.put("/api/vehicles/:id", [auth,isManagerOrAdmin],vehicleController.updateVehicle);
vehicleRoute.delete("/api/vehicles/:id",[auth,isManagerOrAdmin], vehicleController.deleteVehicle);
vehicleRoute.get("/api/vehicles/:id",[auth,isManagerOrAdmin], vehicleController.getVehicleById);
vehicleRoute.get("/api/vehicles/customer/:id",[auth,isManagerOrAdmin], vehicleController.getVehicleByCustomerId);
vehicleRoute.get("/api/vehicles",[auth,isManagerOrAdmin], vehicleController.getAllVehicles);

export default vehicleRoute;
