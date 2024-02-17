export default {
   employeeForm: (form)=>{
      let isValid = true;
		const errors = {}; 
		// Validate employee email
		if (
			!form.employee_email ||
			!form.employee_email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
		) {
			errors.employee_email = "Invalid employee email";
			isValid = false;
		}
		// Validate employee first name
		if (
			!form.employee_first_name ||
			!form.employee_first_name.match(/^[a-zA-Z]+$/)
		) {
			errors.employee_first_name = "Invalid employee first name";
			isValid = false;
		}

		// Validate employee last name
		if (
			!form.employee_last_name ||
			!form.employee_last_name.match(/^[a-zA-Z]+$/)
		) {
			errors.employee_last_name = "Invalid employee last name";
			isValid = false;
		}

		// Validate employee phone
		if (!form.employee_phone) {
			errors.employee_phone = "Employee phone is required";
			isValid = false;
		}

		// Validate user role
		// if (!form.userRole) {
		// 	errors.userRole = "User role is required";
		// 	isValid = false;
		// }

		// Validate employee password
		if (!form.employee_password) {
			errors.employee_password = "Employee password is required";
			isValid = false;
		}
      // Validate employee phone
      if (
         !form.employee_phone ||
         form.employee_phone.length < 10 || // Check if the length is less than 10
         !/^\d+$/.test(form.employee_phone) // Check if the content contains only numbers
      ) {
         errors.employee_phone = "Invalid employee phone number";
         isValid = false;
      }

		return { isValid, errors };
	},
	employeeForm: (form,token)=>{
      let isValid = true;
		const errors = {}; 
		// Validate employee email
		if (
			!form.employee_email ||
			!form.employee_email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
		) {
			errors.employee_email = "Invalid employee email";
			isValid = false;
		}
		// Validate employee first name
		if (
			!form.employee_first_name ||
			!form.employee_first_name.match(/^[a-zA-Z]+$/)
		) {
			errors.employee_first_name = "Invalid employee first name";
			isValid = false;
		}

		// Validate employee last name
		if (
			!form.employee_last_name ||
			!form.employee_last_name.match(/^[a-zA-Z]+$/)
		) {
			errors.employee_last_name = "Invalid employee last name";
			isValid = false;
		}

		// Validate employee phone
		if (!form.employee_phone) {
			errors.employee_phone = "Employee phone is required";
			isValid = false;
		}

		//Validate user role
		// if (!form.company_role_id) {
		// 	errors.company_role_id= "User role is required";
		// 	isValid = false;
		// }

		
      // Validate employee phone
      if (
         !form.employee_phone ||
         form.employee_phone.length < 10 || // Check if the length is less than 10
         !/^\d+$/.test(form.employee_phone) // Check if the content contains only numbers
      ) {
         errors.employee_phone = "Invalid employee phone number";
         isValid = false;
      }

		return { isValid, errors };
	},

	customerForm: (form)=>{
		let isValid = true;
		const errors = {}; 
		// Validate employee email
		if (
			!form.customer_email ||
			!form.customer_email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
		) {
			errors.customer_email = "Invalid customer email";
			isValid = false;
		}
		// Validate customer first name
		if (
			!form.customer_first_name ||
			!form.customer_first_name.match(/^[a-zA-Z]+$/)
		) {
			errors.customer_first_name = "Invalid customer first name";
			isValid = false;
		}

		// Validate customer last name
		if (
			!form.customer_last_name ||
			!form.customer_last_name.match(/^[a-zA-Z]+$/)
		) {
			errors.customer_last_name = "Invalid customer last name";
			isValid = false;
		}

		// Validate customer phone
		if (!form.customer_phone_number) {
			errors.customer_phone_number = "customer phone is required";
			isValid = false;
		}
		      // Validate Customer phone
		if (
			!form.customer_phone_number ||
			form.customer_phone_number.length < 10 || // Check if the length is less than 10
			!/^\d+$/.test(form.customer_phone_number) // Check if the content contains only numbers
		) {
			errors.customer_phone_number = "Invalid customer phone number";
			isValid = false;
		}

		return { isValid, errors };
	},
	customerEditForm: (form)=>{
		let isValid = true;
		const errors = {}; 
		// Validate customer first name
		if (
			!form.customer_first_name ||
			!form.customer_first_name.match(/^[a-zA-Z]+$/)
		) {
			errors.customer_first_name = "Invalid customer first name";
			isValid = false;
		}

		// Validate customer last name
		if (
			!form.customer_last_name ||
			!form.customer_last_name.match(/^[a-zA-Z]+$/)
		) {
			errors.customer_last_name = "Invalid customer last name";
			isValid = false;
		}

		// Validate customer phone
		if (!form.customer_phone_number) {
			errors.customer_phone_number = "customer phone is required";
			isValid = false;
		}
		      // Validate Customer phone
		if (
			!form.customer_phone_number ||
			form.customer_phone_number.length < 10 || // Check if the length is less than 10
			!/^\d+$/.test(form.customer_phone_number) // Check if the content contains only numbers
		) {
			errors.customer_phone_number = "Invalid customer phone number";
			isValid = false;
		}

		return { isValid, errors };
	},
	loginForm: (form)=>{
      let isValid = true;
		const errors = {}; 
		// Validate employee email
		if (
			!form.employee_email ||
			!form.employee_email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
		) {
			errors.employee_email = "Invalid employee email";
			isValid = false;
		}
		// Validate employee password
		if (!form.employee_password) {
			errors.employee_password = "Employee password is required";
			isValid = false;
		}
		return { isValid, errors };
	},

	vehicleForm: (form)=>{
      let isValid = true;
		const errors = {};  

		return { isValid, errors };
	
	},

	ServicesForm: (form) => {
		let isValid = true;
		const errors = {};
	 
		// Validate user role
		if (!form.serviceName) {
		  errors.serviceName = "Service name is required";
		  isValid = false;
		}
	 
		if (!form.serviceDescription) {
		  errors.serviceDescription = "Service description is required";
		  isValid = false;
		}
	 
		// Check other conditions
		if (form.serviceName && form.serviceName.length < 3) {
		  errors.serviceName = "Service name should be at least 3 characters long";
		  isValid = false;
		}
	 
		if (form.serviceDescription && form.serviceDescription.length > 400) {
		  errors.serviceDescription = "Service description should not exceed 400 characters";
		  isValid = false;
		}
	 
		return { isValid, errors };
	 },
	
	 orderForm: (form) => {
		let isValid = true;
		const errors = {};
		return { isValid, errors };
	 }

}