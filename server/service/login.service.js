import { query } from "../config/pool.js";
import loginQuery from "../query/login.query.js";

const loginService = {
	getEmployeeByEmail: async (data) => {
		try {
			const row = await query(loginQuery.getEmployeeByEmail, [data]);
			return row;
		} catch (error) {
			console.log(error);
		}
	},
	getEmployeePassByID: async (data) => {
		try {
			const row = await query(loginQuery.getEmployeeByPassword, [data]);
			return row;
		} catch (error) {
			console.log(error);
		}
	},

	getEmployeeRoleById: async (data) => {
		try {
			const row = await query(loginQuery.getEmployeeRoleById, [data]);
			return row;
		} catch (error) {
			console.log(error);
		}
	},

	getEmployeeInfoById: async (data) => {
		try {
			const row = await query(loginQuery.getEmployeeInfoById, [data]);
			return row;
		} catch (error) {
			console.log(error);
		}
	},
};

export default loginService;
