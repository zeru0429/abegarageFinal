import { query } from "../config/pool.js";
import employeeQuery from "../query/employee.query.js";
// import employeeQuery from "../query/employee.query.js";

const employeeService = {
	getEmployeeByEmail: async (data) => {
		try {
			const row = await query(employeeQuery.getEmployeeByEmail, [data]);
			return row;
		} catch (error) {
			console.log(error);
		}
	},
	getEmployeeById: async (data) => {
		try {
			const row = await query(employeeQuery.getEmployeeById, [data]);
			return row;
		} catch (error) {
			console.log(error);
		}
	},

	insertIntoEmployee: async (data) => {
		try {
			const row = await query(employeeQuery.insertIntoEmployeeTable, [
				data.employee_email,
				data.active_employee,
			]);
			return row;
		} catch (error) {
			console.log(error);
		}
	},

	insertIntoEmployeeInfo: async (data) => {
		try {
			const row = await query(employeeQuery.insertEmployeeInfoTable, [
				data.employee_id,
				data.employee_first_name,
				data.employee_last_name,
				data.employee_phone,
			]);
			return row;
		} catch (error) {
			console.log(error);
		}
	},

	insertIntoEmployeePassword: async (data) => {
		//console.log(employeeQuery.insertEmployeePasswordTable);
		//console.log(data);
		try {
			const row = await query(employeeQuery.insertEmployeePasswordTable, [
				data.employee_id,
				data.employee_password_hashed,
			]);
			return row;
		} catch (error) {
			console.log(error);
		}
	},

	createEmployee: async (data) => {
		try {
			const row = await query(employeeQuery.getEmployee);
			return row;
		} catch (error) {
			console.log(error);
		}
	},

	insertIntoEmployeeRole: async (data) => {
		try {
			const row = await query(employeeQuery.insertEmployeeRoleTable, [
				data.employee_id,
				data.company_role_id,
			]);
			return row;
		} catch (error) {
			console.log(error);
		}
	},
	//updateEmployee
	updateEmployeeTable: async (data) => {
		try {
			const row = await query(employeeQuery.updateEmployee, [
				data.active_employee,
				data.employee_id,
			]);

			return row;
		} catch (error) {
			console.log(error);
		}
	},

	updateEmployeeInfoTable: async (data) => {
	
		try {
			const row = await query(employeeQuery.updateEmployeeInfo, [
				data.employee_first_name,
				data.employee_last_name,
				data.employee_phone,
				data.employee_id,
			]);

			return row;
		} catch (error) {
			console.log(error);
		}
	},
	updateEmployeeRoleTable: async (data) => {
		try {
			const row = await query(employeeQuery.updateEmployeeRole, [
				data.company_role_id,
				data.employee_id,
			]);

			return row;
		} catch (error) {
			console.log(error);
		}
	},

	deleteEmployeePass: async (data) => {
		try {
			//console.log(employeeQuery.deleteEmployeePass)
			const row = await query(employeeQuery.deleteEmployeePass, [
				data
			]);
			return row;
		} catch (error) {
			console.log(error);
		}
	},
	deleteEmployeeRole: async (data) => {
		try {
			//console.log(employeeQuery.deleteEmployeeRole)
			const row = await query(employeeQuery.deleteEmployeeRole, [
				data
			]);
			return row;
		} catch (error) {
			console.log(error);
		}
	},

	deleteEmployeeInfo: async (data) => {
		try {
			//console.log(employeeQuery.deleteEmployeeInfo)
			const row = await query(employeeQuery.deleteEmployeeInfo, [
				data
			]);
			return row;
		} catch (error) {
			console.log(error);
		}
	},
	deleteEmployeeData: async (data) => {
		try {
			//console.log(employeeQuery.deleteEmployeeData)
			const row = await query(employeeQuery.deleteEmployeeData, [
				data
			]);
			return row;
		} catch (error) {
			console.log(error);
		}
	},

	getEmployeeList: async ()=>{
		try {
			const rows = await query(employeeQuery.getEmployeeList);
			return rows;
		} catch (error) {
			console.log(error);
		}

	},

	getEmployeeRoleeByEmployeeId: async (id)=>{
		try {
			const rows = await query(employeeQuery.getEmployeeRoleeByEmployeeId,[id]);
			return rows;
		} catch (error) {
			console.log(error);
		}

	},

	getEmployeeRoles: async ()=>{
		try {
			const rows = await query(employeeQuery.getEmployeeRoles);
			return rows;
		} catch (error) {
			console.log(error);
		}

	},
	
};

export default employeeService;
