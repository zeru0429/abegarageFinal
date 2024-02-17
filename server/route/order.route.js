import express from "express";
import orderController from "../controller/order.controller.js";

const orderRoute = express.Router();
import {auth,isAdmin,isManagerOrAdmin} from "../auth/auth.js";

orderRoute.post("/api/order",[auth,isManagerOrAdmin], orderController.createOrder);
orderRoute.put("/api/orders/:id", [auth,isManagerOrAdmin],orderController.updateOrder);
orderRoute.delete("/api/orders/:id",[auth,isManagerOrAdmin], orderController.deleteOrder);
orderRoute.get("/api/orders/:id",[auth], orderController.getOrderById);
orderRoute.get("/api/orders",[auth], orderController.getAllOrders);
orderRoute.get("/api/order/:order_hash", orderController.getOrdersByOrder_hash);
//api/orders/customer/:${id}
orderRoute.get("/api/orders/customer/:id", orderController.getSingleCustomerOrders);

export default orderRoute;
