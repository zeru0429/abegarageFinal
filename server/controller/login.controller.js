import loginService from "../service/login.service.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

const loginController = {
	login: async (req, res) => {
		//check all fields are submitted
		const { employee_email, employee_password } = req.body;

		if (!employee_email || !employee_password) {
			return res.status(400).json({
				success: false,
				message: "All fields are required",
			});
		}
		//Check if an account exists with the same email address
		const isEmployee = await loginService.getEmployeeByEmail(employee_email);
		if (!isEmployee.length) {
			return res.status(400).json({
				success: false,
				message: "No account exists with this email address",
			});
		}
		//Chcek password and email
		else {
			const employee_id = isEmployee[0].employee_id;

			const isPassword = await loginService.getEmployeePassByID(employee_id);
			const employee_password_hashed = isPassword[0].employee_password_hashed;

			// compare
			const isMatch = bcrypt.compareSync(
				employee_password,
				employee_password_hashed
			);
			if (!isMatch) {
				return res.status(400).json({
					success: false,
					message: "Incorrect password",
				});
			} else {
				//get other infos for preparing token
				const employeeRole = await loginService.getEmployeeRoleById(
					employee_id
				);
				//console.log(employeeRole);
				const employee_role = employeeRole[0].company_role_name;
				//get first name
				const employeeInfo = await loginService.getEmployeeInfoById(
					employee_id
				);
				const employee_first_name = employeeInfo[0].employee_first_name;

				//Prepare JWT Token
				const token = jwt.sign(
					{
						employee_id,
						employee_first_name,
						employee_role,
					},
					process.env.JWT_SECRET
					// { expiresIn: "1h" }
				);

				return res.status(200).json({
					success: true,
					employee_role,
					message: "Logged-in successfully",
					token,
					//Token sent successfully
				});
			}
		}
	},
};

export default loginController;

// employee.employee_role = decodedToken.employee_role;
// employee.employee_id = decodedToken.employee_id;
// employee.employee_first_name = decodedToken.employee_first_name;
