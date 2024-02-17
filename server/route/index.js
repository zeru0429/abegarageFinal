import express from "express";
import employeeRoute from "./employee.route.js";
import customerRoute from "./customer.route.js";
import vehicleRoute from "./vehicle.route.js";
import loginRoute from "./login.route.js";
import servicesRoute from "./services.route.js";
import orderRoute from "./order.route.js";
import installRoute from "./install.route.js";
/*All routes will be imported here */

const appRoute = express.Router();
appRoute.use(employeeRoute);
appRoute.use(customerRoute);
appRoute.use(vehicleRoute);
appRoute.use(loginRoute);
appRoute.use(servicesRoute);
appRoute.use(orderRoute);
appRoute.use(installRoute);

/*Mounts the routes here */

export default appRoute;
