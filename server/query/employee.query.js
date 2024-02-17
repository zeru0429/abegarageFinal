export default {
	getEmployeeRoles : `SELECT * from company_roles`,
	getEmployeeRoleeByEmployeeId : `SELECT employee_role.*, company_roles.company_role_name FROM employee_role JOIN company_roles ON employee_role.company_role_id = company_roles.company_role_id WHERE employee_role.employee_id = ?`,
	getEmployee: `SELECT * from employee`,
	getEmployeeByEmail: `SELECT * from employee WHERE employee_email = ?`,
	getEmployeeById: `SELECT * FROM employee WHERE employee_id = ?;`,
	insertIntoEmployeeTable: `INSERT INTO employee (employee_email, active_employee, added_date) VALUES (?, ?, NOW());`,
	insertEmployeeInfoTable: `INSERT INTO employee_info (employee_id, employee_first_name, employee_last_name, employee_phone) VALUES (?,?, ?, ?);`,

	insertEmployeePasswordTable: `INSERT INTO employee_pass (employee_id, employee_password_hashed) VALUES (?, ?);`,

	insertEmployeeRoleTable: `INSERT INTO employee_role (employee_id, company_role_id) VALUES (?, ?);`,

	updateEmployeeInfo: `UPDATE employee_info SET employee_first_name = ?, employee_last_name = ?, employee_phone = ?    WHERE employee_id = ?;`,
	updateEmployeeRole: `UPDATE employee_role SET company_role_id = ? WHERE employee_id = ?;`,
	updateEmployee: `UPDATE  employee SET active_employee = ? WHERE employee_id = ?;`,


	deleteEmployeeInfo: `DELETE FROM employee_info WHERE employee_id = ?;`,
	deleteEmployeeData: `DELETE FROM employee WHERE employee_id = ?;`,
	deleteEmployeePass: `DELETE FROM employee_pass  WHERE employee_id = ?;`,
	deleteEmployeeRole: `DELETE FROM employee_role  WHERE employee_id = ?;`, 

	getEmployeeList: `SELECT 
	e.employee_id,
	e.active_employee AS active_employee,
	ei.employee_first_name AS firstname,
	ei.employee_last_name AS lastname,
	e.employee_email AS email,
	ei.employee_phone AS phone,
	e.added_date AS added_date,
	cr.company_role_name AS company_role_name,
	er.company_role_id
FROM 
	employee e
JOIN 
	employee_info ei ON e.employee_id = ei.employee_id
JOIN 
	employee_role er ON e.employee_id = er.employee_id
JOIN 
	company_roles cr ON er.company_role_id = cr.company_role_id;`
};
