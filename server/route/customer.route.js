import express from "express";
import customerController from "../controller/customer.controller.js";
const customerRoute = express.Router();
import {auth,isAdmin,isManagerOrAdmin} from "../auth/auth.js";

customerRoute.post("/api/customer",[auth,isManagerOrAdmin], customerController.createCustomer);
customerRoute.put("/api/customer/:id",[auth,isManagerOrAdmin] ,customerController.updateCustomer);
customerRoute.delete("/api/customer/:id",[auth,isManagerOrAdmin], customerController.deleteCustomer);
customerRoute.get("/api/customer",[auth,isManagerOrAdmin], customerController.allcustomer);
customerRoute.get("/api/customer/:userInput", [auth,isManagerOrAdmin],customerController.seachCustomer);

// customerRoute.delete("/api/customer/:customerId", customerController.deleteCustomer);

export default customerRoute;
