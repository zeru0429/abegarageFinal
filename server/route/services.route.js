import express from "express";
import servicesController from "../controller/services.contoller.js";
const servicesRoute = express.Router();

import {auth,isAdmin,isManagerOrAdmin} from "../auth/auth.js";

servicesRoute.post("/api/services",[auth,isAdmin], servicesController.insertCommonService);
servicesRoute.put("/api/services/:id",[auth,isAdmin], servicesController.updateCommonService);
servicesRoute.delete("/api/services/:id",[auth,isAdmin], servicesController.deleteCommonService);
servicesRoute.get("/api/services/:id",[auth,isAdmin], servicesController.getCommonServiceById);
servicesRoute.get("/api/services",[auth,isAdmin], servicesController.getAllCommonServices);

export default servicesRoute;
