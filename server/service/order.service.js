import { query } from "../config/pool.js";
import orderQuery from "../query/order.query.js";

const orderService = {
    insertOrder: async (data) => {
        try { //employee_id, customer_id, vehicle_id,order_total_price, additional_request,order_service_id 
            console.log(data.employee_id,
                data.customer_id,
                data.vehicle_id,
                data.active_order,
                data.order_hash);
            const row = await query(orderQuery.insertOrder, [
                data.employee_id,
                data.customer_id,
                data.vehicle_id,
                data.active_order,
                data.order_hash
            ]);
            return row;
        } catch (error) {
            console.log(error);
            throw new Error("Error inserting order");
        }
    },

    updateOrder: async (data, id) => {
        try {
            const row = await query(orderQuery.updateOrder, [
                data.customer_id,
                data.vehicle_id,
                data.active_order,
                id
            ]);
            return row;
        } catch (error) {
            console.log(error);
            throw new Error("Error updating order");
        }
    },

    deleteOrder: async (id) => {
        try {
            const row = await query(orderQuery.deleteOrder, [id]);
            return row;
        } catch (error) {
            console.log(error);
            throw new Error("Error deleting order");
        }
    },

    getOrderById: async (id) => {
        try {
            const rows = await query(orderQuery.getOrderById, [id]);
            return rows;
        } catch (error) {
            console.log(error);
            throw new Error("Error getting order by ID");
        }
    },

    getOrdersByOrder_hash: async (order_hash) => {
        try {
            const rows = await query(orderQuery.getOrdersByOrder_hash, [order_hash]);
            return rows;
        } catch (error) {
            console.log(error);
            throw new Error("Error getting order by ID");
        }
    },


    getSingleCustomerOrderById: async (id) => {
        try {
            const rows = await query(orderQuery.getSingleCustomerOrderById, [id]);
            return rows;
        } catch (error) {
            console.log(error);
            throw new Error("Error getting order by ID");
        }
    },

    getAllOrders: async () => {
        try {
            const rows = await query(orderQuery.getAllOrders);
            return rows;
        } catch (error) {
            console.log(error);
            throw new Error("Error getting all orders");
        }
    },

    insertOrderInfo: async (data) => {
        try {// employee_id, customer_id, vehicle_id,order_total_price, additional_request,order_service_id 
            const row = await query(orderQuery.insertOrderInfo, [
                data.order_id,
                data.order_total_price,
                data.additional_request,
                " "
            ]);
            return row;
        } catch (error) {
            console.log(error);
            throw new Error("Error inserting order info");
        }
    },

    insertOrderService: async (data) => {
        try {
            const row = await query(orderQuery.insertOrderService, [
                data.order_id,
                data.element_id,
                0
            ]);
            return row;
        } catch (error) {
            console.log(error);
            throw new Error("Error inserting order service");
        }
    },

    insertOrderStatus: async (data) => {
        try {
            const row = await query(orderQuery.insertOrderStatus, [
                data.order_id,
                data.order_status
            ]);
            return row;
        } catch (error) {
            console.log(error);
            throw new Error("Error inserting order status");
        }
    }



};

export default orderService;
