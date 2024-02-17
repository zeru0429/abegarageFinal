import orderService from "../service/order.service.js";
import { v4 as uuidv4 } from 'uuid';

const orderController = {
    createOrder: async (req, res) => {
        try {      
          const { employee_id, customer_id, vehicle_id,order_total_price, additional_request,order_service_id } = req.body;

            if (!employee_id || !customer_id || !vehicle_id || !order_total_price || !additional_request || !order_service_id ) {
                return res.status(400).json({
                    success: false,
                    message: "All fields are required",
                });
            }
            
            req.body.order_hash = uuidv4();
            req.body.order_status = 0;
            req.body.active_order = 1;
           const isOrderInserted = await orderService.insertOrder(req.body);
            if (!isOrderInserted) {
                return res.status(500).json({
                    success: false,
                    message: "Error during order creation",
                });
            }

            req.body.order_id = isOrderInserted.insertId;
            const order_id = req.body.order_id;
            console.log(req.body.insertId);

            const isOrderInfoInserted = await orderService.insertOrderInfo(req.body);
            if (!isOrderInfoInserted) {
                return res.status(500).json({
                    success: false,
                    message: "Error during order creation",
                });
            }
            let  isOrderServiceInserted;
            order_service_id.forEach(async element_id => {
             isOrderServiceInserted = await orderService.insertOrderService({order_id,element_id});
             if (!isOrderServiceInserted) {
                return res.status(500).json({
                    success: false,
                    message: "Error during order creation",
                });
            } 
            });

            const isOrderStatusInserted = await orderService.insertOrderStatus(req.body);

            if (!isOrderStatusInserted) {
                return res.status(500).json({
                    success: false,
                    message: "Error during order creation",
                });
            } 

            return res.status(200).json({
                success: true,
                message: "Order created successfully",
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },

    updateOrder: async (req, res) => {
        try {
            const id = req.params.id.substring(1);
            const { customer_id, vehicle_id, active_order} = req.body;

            if (!id || !customer_id || !vehicle_id ||!active_order ) {
                return res.status(400).json({
                    success: false,
                    message: "All fields are required",
                });
            }

            const isUpdated = await orderService.updateOrder(req.body, id);
            if (!isUpdated) {
                return res.status(500).json({
                    success: false,
                    message: "Error during order update",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Order updated successfully",
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },

    deleteOrder: async (req, res) => {
        try {
            const id = req.params.id.substring(1);
            const isDeleted = await orderService.deleteOrder(id);
            if (!isDeleted) {
                return res.status(500).json({
                    success: false,
                    message: "Error during order deletion",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Order deleted successfully",
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },

    getOrderById: async (req, res) => {
        try {
            const id = req.params.id.substring(1);
            const order = await orderService.getOrderById(id);
            if (!order) {
                return res.status(404).json({
                    success: false,
                    message: "Order not found",
                });
            }

            return res.status(200).json({
                success: true,
                data: order,
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },

    getSingleCustomerOrders: async (req, res) => {
        try {
            const id = req.params.id.substring(1);
            const order = await orderService.getSingleCustomerOrderById(id);
            if (!order) {
                return res.status(404).json({
                    success: false,
                    message: "Order not found",
                });
            }

            return res.status(200).json({
                success: true,
                data: order,
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },

    getAllOrders: async (req, res) => {
        try {
            const orders = await orderService.getAllOrders();
            return res.status(200).json({
                success: true,
                data: orders,
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },

    getOrdersByOrder_hash: async (req, res) => {
        try {
            const order_hash = req.params.order_hash.substring(1);
            const order = await orderService.getOrdersByOrder_hash(order_hash);
            if (!order) {
                return res.status(404).json({
                    success: false,
                    message: "Order not found",
                });
            }

            return res.status(200).json({
                success: true,
                data: order,
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },


};

export default orderController;
