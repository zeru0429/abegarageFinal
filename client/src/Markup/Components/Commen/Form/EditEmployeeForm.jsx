import { useNavigate } from 'react-router-dom';
import EmployeeService from '../../../../Service/Employee.service';
import axios from '../../../../Utility/axios';
import React, { useEffect, useState } from 'react'
import FormValidator from '../../../../Utility/FormValidator';
import { useToast } from "../../../../Context/ToastContext";

function EditEmployeeForm({data,roles}) {
   const { toastData, hideToast,setToastData } = useToast();
   const navigator = useNavigate();
   //console.log(data);
  
   const [form,setForm] = useState({
      active_employee: 1,
      employee_id: data.employee_id,
      employee_email: data.email,
      employee_phone: data.phone,
      userRole: data.company_role_id,
      employee_first_name: data.firstname,
      employee_last_name: data.lastname ,
      active_employee: data.active_employee,
    });
   //  console.log(data.company_role_name);
	const [errors, setErrors] = useState({});

	const hadleSubmit = async (e) => {
		e.preventDefault();
      
    form.active_employee = form.active_employee ? 1 : 0;
    const formData = FormValidator.employeeForm(form);
		const isValid = formData.isValid;
      if(!isValid){
        const errorData = formData.errors;
        setErrors(errorData)
        return;
      }
      else{
        setErrors({})
       // console.log(form.employee_id);
      const response = await EmployeeService.updateEmployee(form,form.employee_id);
      //alert(response.message);
      setToastData(response);
      if(response.success){
         setForm({})
         setErrors({})
         navigator('/admin/employees');
         }
      else{

      } 

      }
	
   

	};


  return (
    <>
      <form onSubmit={hadleSubmit} id="contact-form">
         <div className="row clearfix">
            <div className="form-group col-md-12">
               <input type="text"
                  name="employee_first_name"
                  placeholder="Employee First Name"
                  required
                  value={form.employee_first_name}
                  onChange={(e) => {
                  setForm({
                  ...form,
                  employee_first_name: e.target.value,
                  });
                  }}
               />
            </div>
            <div className="form-group col-md-12">
               <input type="text"
                     name="employee_last_name"
                     placeholder="Employee last  Name"
                     required
                     value={form.employee_last_name}
                     onChange={(e) => {
                     setForm({
                     ...form,
                     employee_last_name: e.target.value,
                     });
                  }}
               />
            </div>
            <div className="form-group col-md-12">
               <input type="text"
                  name="employee_phone"
                  placeholder="Employee phone"
                  value={form.employee_phone}
                  required
                  onChange={(e) => {
                  setForm({
                  ...form,
                  employee_phone: e.target.value,
                  });
                  }}
               />
            </div>
            <div className="form-group col-md-12">
               <select
                  name="userRole"
                  id="roleId"
                  required
                  value={form.userRole}
                  onChange={(e) => {
                  setForm({
                  ...form,
                  userRole: e.target.value,
                  });
                  }}
               >
               {roles && roles.map((single) => {
						return (
						<option value={single.company_role_id} key={single.company_role_id}>
						{single.company_role_name}
						</option>
						);
                  }
               )};
               </select>

            </div>
            <div className="form-group col-md-12">
                  <label>
                    <input
                      type="checkbox"
                      name="is_active"
                      checked={form.active_employee}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          active_employee: e.target.checked,
                        })
                      }
                    />
                    Is active customer
                  </label>
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
						<span>Update employee</span>
					</button>
            </div>
         </div>
      </form>
    </>
  )
}

export default EditEmployeeForm