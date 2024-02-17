import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import employeeService from "../service/employee.service.js";
dotenv.config();

const auth = (req, res, next) => {
    try {
      const token = req.headers['x-access-token'];
        if (!token)
            return res
                .status(401)
                .json({ success: false, message: "No authentication token, authorization denied." });

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified)
            return res
                .status(401)
                .json({ msg: "Token verification failed, authorization denied." });
                
        req.userRole=(verified. employee_role)
        req.id =verified.employee_id;
        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const isAdmin = async (req, res, next) => {
    try {
       const id = req.id;
      const userRole = await employeeService.getEmployeeRoleeByEmployeeId(req.id);
      console.log(userRole);
		if(!userRole || !userRole.length > 0 || !(userRole[0]. company_role_name ==='admin')){
			return res.status(403).json({
				success: false,
				message: 'you have no privilage'
			})
		}
        next();
    } catch (err) {
        res.status(500).json({ success: false,
            message: err.message });
    }
};

const isManagerOrAdmin = async (req, res, next) => {
    try {
       const id = req.id;
      const userRole = await employeeService.getEmployeeRoleeByEmployeeId(req.id);
		if(!userRole || !userRole.length > 0 || (userRole[0]. company_role_name !=='manager' && userRole[0]. company_role_name !=='admin')){
			return res.status(403).json({
				success: false,
				message: 'you have no privilage'
			})
		}
        next();
    } catch (err) {
        res.status(500).json({ success: false,
            message: err.message });
    }
};


export{ auth,isAdmin,isManagerOrAdmin};