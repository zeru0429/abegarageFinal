import React, { useEffect, useRef, useState } from 'react'
import FormValidator from '../../../../Utility/FormValidator';
import EmployeeService from '../../../../Service/Employee.service'
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../../../../Context/AuthContext'
import { useToast } from "../../../../Context/ToastContext";
//import { Toast, notify } from "../Toast/Toast";
function AddEmployeeForm() {
	const { isLogged, setIsLogged, employee,isAdmin, fetchData } = useAuth();
	const { toastData, hideToast,setToastData } = useToast();
	const [form, setForm] = useState({});
	const [roles,setRoles] = useState([]);
	const [errors, setErrors] = useState({});
	const navigator = useNavigate();

	useEffect(()=>{
		fetchRole();
	},[]);

	const fetchRole = async () => {
		const roles =  await EmployeeService.getRoles();
		setRoles(roles);
	}


	const hadleSubmit = async (e) => {
		e.preventDefault();
	//	console.log(form)
		const formData = FormValidator.employeeForm(form);
		const isValid = formData.isValid;
		if(!isValid){
			const errorData = formData.errors;
		//	console.log(errorData)
			setErrors(errorData)
			return;
		}
		else{
		setErrors({})
		const response = await EmployeeService.register(form,employee.employee_token);
		console.log(response);
		setToastData(response);
		//alert(response.message);
		if(response.success){
			//notify(response.message, response.sucess);
			//console.log("added");
			setForm({})
			setErrors({})
			navigator('/admin/employees');
		}
		else{
			//notify(response.message, response.sucess);s
		}

		}
	
		

	};


  return (
    <div className="contact-form">
		<form onSubmit={hadleSubmit} id="contact-form">
			<div className="row clearfix">
				<div className="form-group col-md-12">
					<input
						type="email"
						name="employee_email"
						placeholder="Employee Email"
						required
						onChange={(e) => {
							setForm({
								...form,
								employee_email: e.target.value,
							});
						}}
					/>
					{errors.employee_email && (
						<div className="validation-error" role="alert">
							{errors.employee_email}
						</div>
					)}
				</div>
				<div className="form-group col-md-12">
					<input
						type="text"
						name="employee_first_name"
						placeholder="Employee First Name"
						required
						onChange={(e) => {
							setForm({
								...form,
								employee_first_name: e.target.value,
							});
						}}
					/>
					{errors.employee_first_name && (
						<div className="validation-error" role="alert">
							{errors.employee_first_name}
						</div>
					)}
				</div>
				<div className="form-group col-md-12">
					<input
						type="text"
						name="employee_last_name"
						placeholder="Employee last  Name"
						required
						onChange={(e) => {
							setForm({
								...form,
								employee_last_name: e.target.value,
							});
						}}
					/>
					{errors.employee_last_name && (
						<div className="validation-error" role="alert">
							{errors.employee_last_name}
						</div>
					)}
				</div>
				<div className="form-group col-md-12">
					<input
						type="text"
						name="employee_phone"
						placeholder="Employee phone"
						required
						onChange={(e) => {
							setForm({
								...form,
								employee_phone: e.target.value,
							});
						}}
					/>
					{errors.employee_phone && (
						<div className="validation-error" role="alert">
							{errors.employee_phone}
						</div>
					)}
				</div>
				<div className="form-group col-md-12">
						<select
						name="company_role_id"
						id="roleId"
						required
						onChange={(e) => {
						setForm({
						...form,
						company_role_id: e.target.value,
						});
						}}
						>
						<option value="">Select a role</option> {/* Add a default option */}
						{roles &&
						roles.map((single) => {
						return (
						<option value={single.company_role_id} key={single.company_role_id}>
						{single.company_role_name}
						</option>
						);
						})}
						</select>
					{errors.company_role_id && (
						<div className="validation-error" role="alert">
							{errors.company_role_id}
						</div>
					)}
				</div>
				<div className="form-group col-md-8">
					<input
						type="password"
						name="employee_password"
						placeholder="Your password"
						required
						onChange={(e) => {
							setForm({
								...form,
								employee_password: e.target.value,
							});
						}}
					/>
					{errors.employee_password && (
						<div className="validation-error" role="alert">
							{errors.employee_password}
						</div>
					)}
				</div>
				<div className="form-group col-md-12">
					<input
						id="form_botcheck"
						name="form_botcheck"
						className="form-control"
						type="hidden"
					/>
					<button
						className="theme-btn btn-style-one"
						type="submit"
					
						data-loading-text="Please wait..."
					>
						<span>Add employee</span>
					</button>
				</div>
			</div>
		</form>
	</div>
  )
}

export default AddEmployeeForm