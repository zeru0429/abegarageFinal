import employeeService from "../service/employee.service.js";
import bcrypt from "bcrypt";

const employeeController = {
	createEmployee: async (req, res) => {
		// check if the user have privilage

	//	Check all fields are provided
		req.body.active_employee = 1;
		const {
			employee_email,
			employee_first_name,
			employee_last_name,
			employee_phone,
			active_employee,
			employee_password,
			company_role_id,
		} = req.body;
		
		if (
			!employee_email ||
			!employee_first_name ||
			!employee_last_name ||
			!employee_phone ||
			!active_employee ||
			!employee_password ||
			!company_role_id
		) {
			return res.status(400).json({
				success: false,
				message: "All fields are required",
			});
		}

		//Check email is unique
		const isEmployee = await employeeService.getEmployeeByEmail(employee_email);

		if (isEmployee.length) {
			return res.status(400).json({
				success: false,
				message: "The email is already in use",
			});
		}
		// console.log(isEmployee);
		//check if password is encrypted
		const salt = bcrypt.genSaltSync(10);
		req.body.employee_password_hashed = bcrypt.hashSync(
			employee_password,
			salt
		);

		//check to insert data into database
		const employee = await employeeService.insertIntoEmployee(req.body);

		req.body.employee_id = employee.insertId;

		const employeeInfo = await employeeService.insertIntoEmployeeInfo(req.body);

		const employeePassword = await employeeService.insertIntoEmployeePassword(
			req.body
		);
		// add role
		const employeeRole = await employeeService.insertIntoEmployeeRole({
			employee_id: req.body.employee_id,
			company_role_id: company_role_id,
		});

		//send a message to confirm sucess
		return res.status(200).json({
			success: true,
			message: "Employee added successfully!",
		});
},

	updateEmployeeInfo: async (req, res) => {
		const employee_id = req.params.id.substring(1);	
		req.body.employee_id = employee_id;	
		//Check all fields are provided
		const {
			employee_email,
			employee_first_name,
			employee_last_name,
			employee_phone,
			active_employee,
			company_role_id
		} = req.body;
		if (
			!employee_email ||
			!employee_first_name ||
			!employee_last_name ||
			!employee_phone ||
			!active_employee ,
			!company_role_id
			
		) {
			return res.status(400).json({
				success: false,
				message: "All fields are required",
			});
		}
		// Check email is unique
		const EmployeeInfo = await employeeService.getEmployeeByEmail(
			employee_email
		);
		if (!EmployeeInfo || EmployeeInfo.length === 0) {
			return res.status(400).json({
				success: false,
				message: "Employee not found",
			});
		}
		//Start updating
		const employee = await employeeService.updateEmployeeTable(req.body);
		const employeeInfo = await employeeService.updateEmployeeInfoTable(req.body);
		const employeeRole = await employeeService.updateEmployeeRoleTable(req.body);
		
		// console.log(employeeInfo);
		// console.log(employeeRole);
		
		// send a message to confirm sucess
		return res.status(200).json({
			success: true,
			message: "Employee updated successfully!",
		});
	},

	deleteEmployeeInfo: async (req, res) => {
		const employee_id = req.params.id.substring(1);
		if (!employee_id) {
			return res.status(400).json({
				success: false,
				message: "Employee Id is required",
			});
		}

		const employee = await employeeService.getEmployeeById(employee_id);
		if (!employee || employee.length === 0) {
			return res.status(404).json({
				success: false,
				message: "Employee with the provided ID not found",
			});
		}

		// Start deleting
	 const isdelatedinfo =	await employeeService.deleteEmployeeInfo(employee_id);
	 const isdelatedrole =	await employeeService.deleteEmployeeRole(employee_id);
	 const isdelatedPass =	await employeeService.deleteEmployeePass(employee_id);
	 const isdelated =	await employeeService.deleteEmployeeData(employee_id);
		// Send a confirmation message for the successful deletion of the employee account.
		return res.status(200).json({
			success: true,
			message: `Employee with ID ${employee_id} successfully deleted.`,
		});

	},

	getEmployeeList: async (req, res) => {
		const employees = await employeeService.getEmployeeList();
		return res.status(200).json({
			success: true,
			data:  employees
		});
	},
	getEmployeeRoles:  async (req, res) => {
		const roles = await employeeService.getEmployeeRoles();
		return res.status(200).json({
			success: true,
			data:  roles
		});
	},
	
};

export default employeeController;
