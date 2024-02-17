export default {
  getEmployeeByEmail: `SELECT * from employee WHERE employee_email = ?`,
  getEmployeeByPassword: `SELECT * from employee_pass WHERE employee_id = ?`,
  getEmployeeRoleById: `SELECT cr.company_role_name
  FROM employee_role er
  JOIN company_roles cr ON er.company_role_id = cr.company_role_id
  WHERE er.employee_id = ?`,
  getEmployeeInfoById: `SELECT * from employee_info WHERE employee_id = ?`,
 
};