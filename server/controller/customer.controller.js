import customerService from "../service/customer.service.js";

import { v4 as uuidv4 } from 'uuid';

const customerController = {
	createCustomer: async (req, res) => {
		// Check all fields are provided

		req.body.active_customer_status = 1;
		req.body.customer_hash = uuidv4();

		const {
			customer_email,
			customer_phone_number,
			customer_first_name,
			customer_last_name,
			customer_hash,
			active_customer_status,
		} = req.body;


		if (
			!customer_email ||
			!customer_first_name ||
			!customer_last_name ||
			!customer_phone_number ||
			!active_customer_status ||
			!customer_hash
		) {
			return res.status(400).json({
				success: false,
				message: "All fields are required",
			});
		}

		// Check email is unique
		const isCustomer = await customerService.getCustomerByEmail(customer_email);

		if (isCustomer.length) {
			return res.status(400).json({
				success: false,
				message: "The email is already in use",
			});
		}

		// Insert data into the database
		const customerIdentifier =
			await customerService.insertIntoCustomerIdentifierTable(req.body);

		req.body.customer_id = customerIdentifier.insertId;

		const customerInfo = await customerService.insertCustomerInfoTable(
			req.body
		);

		// Send a message to confirm success
		return res.status(200).json({
			success: true,
			message: "customer added successfully!",
		});
	},

	updateCustomer: async (req, res) => {
		const customer_id = req.params.id.substring(1);	
		
		const {
			customer_phone_number,
			customer_first_name,
			customer_last_name,
		} = req.body;

		if (
			!customer_id ||
			!customer_phone_number ||
			!customer_first_name ||
			!customer_last_name 
		) {
			return res.status(400).json({
				success: false,
				message: "All fields are required",
			});
		}

		const customer = await customerService.getCustomerByID(customer_id);

		if (!customer.length) {
			return res.status(400).json({
				success: false,
				message: "Customer not found",
			});
		}
		req.body.customer_id = customer_id;

		//Start updating
		const customerPhoneUpdater = await customerService.updateIntoCustomerIdentifierTable(req.body);
		const customerProfileUpdater =await customerService.updateCustomerInfoTable(req.body);
		// console.log(customerPhoneUpdater);
		// console.log(customerProfileUpdater);

		// For now, sending a success message
		return res.status(200).json({
			success: true,
			message: "customer updated successfully!",
		});
	},

	deleteCustomer: async (req, res) => {
		const customer_id  = req.params.id.substring(1);	
		if (!customer_id) {
			return res.status(400).json({
				success: false,
				message: "Customer Id is required",
			});
		}

		const customer = await customerService.getCustomerByID(customer_id);

		if (!customer || customer.length === 0) {
			return res.status(404).json({
				success: false,
				message: "Customer with the provided ID not found",
			});
		}

		// Start deleting
		const isdelatedInfo = await customerService.deleteCustomerData(customer_id);
		

		if(!isdelatedInfo){
			return res.status(404).json({
				success: false,
				message: "error during deleting",
			});
		}
		const isdelated = await customerService.deleteCustomerIdentifier(customer_id);
		
		if(!isdelated){
			return res.status(404).json({
				success: false,
				message: "error during deleting",
			});
		}

		// Send a confirmation message for the successful deletion of the customer account.
		return res.status(200).json({
			success: true,
			message: `Customer with ID ${customer_id} successfully deleted.`,
		});
	},

	allcustomer: async (req, res, next) => {
		const row = await customerService.allcustomer();
		
		res.status(200).json({
			success: true,
			data: row
		});
	},

	seachCustomer:  async (req, res, next) => {
		try {
			const data = req.params.userInput.substring(1);
			const row = await customerService.seachCustomer(data);
				res.status(200).json({
					success: true,
					data: row
				});
			
		} catch (error) {
			res.status(500).json({
				success: false,
				data: error.message
			});
			
		}
	}
};

export default customerController;
