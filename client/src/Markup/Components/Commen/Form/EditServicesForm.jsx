import React, { useState } from 'react'
import FormValidator from '../../../../Utility/FormValidator';
import ServicesService from '../../../../Service/ServicesService'
import { useAuth } from '../../../../Context/AuthContext';
import {useNavigate} from 'react-router-dom'
import { useToast } from "../../../../Context/ToastContext";
function EditServiceForm(props) {
   const { toastData, hideToast,setToastData } = useToast();
  
   const navigator = useNavigate();
   const { isLogged, setIsLogged, employee,isAdmin, fetchData } = useAuth();
   const [form, setForm] = useState({
      serviceName: props.data.service_name,
      serviceDescription: props.data.service_description
   });
   const [errors, setErrors] = useState({});

   const hadleSubmit = async (e) => {
		e.preventDefault();
      console.log(form);
    
      
		const formData = FormValidator.ServicesForm(form);
		const isValid = formData.isValid;
		if(!isValid){
			const errorData = formData.errors;
			console.log(errorData)
			setErrors(errorData)
			return;
		}
		else{
		setErrors({})
      //console.log(props.data.service_id);
		const response = await ServicesService.updateService(form,props.data.service_id);
		//alert(response.message);
      setToastData(response);
    //  console.log(response.success);
		if(response.success){
			//console.log("added");
         setForm({}); // Reset the form input fields
         setErrors({});
         props.fetchData();
         props.setOpen(false);
         props.setSelectedService({});
			// navigator('/admin/services');
		}
		else{

		}

		}


  }


  return (
   <>
      <div className="container">
         <div className="sec-title style-two">
               <h2 className='p-3'>Edite Services</h2>
            <div className="contact-form">
               <form onSubmit={hadleSubmit} id="contact-form">
                  <div className="row clearfix">
                     <div className="form-group col-md-12">
                        <input
                           value={form.serviceName || ''}
                           type="text"
                           name="serviceName"
                           placeholder="Service Name"
                           required
                           onChange={(e) => {
                              setForm({
                                 ...form,
                                 serviceName: e.target.value,
                              });
                           }}
                        />
                        {errors.serviceName && (
                           <div className="validation-error" role="alert">
                              {errors.serviceName}
                           </div>
                        )}
                     </div>
                     <div className="form-group col-md-12">
                        <textarea
                           value={form.serviceDescription || ''}
                           name="serviceDescription"
                           placeholder="Service Description"
                           required
                           onChange={(e) => {
                              setForm({
                                 ...form,
                                 serviceDescription: e.target.value,
                              });
                           }}
                        ></textarea>
                        {errors.serviceDescription && (
                           <div className="validation-error" role="alert">
                              {errors.serviceDescription}
                           </div>
                        )}
                     </div>
                     <div className="form-group col-md-12">
                     <button
                        className="theme-btn btn-style-one"
                        type="submit"
                     
                        data-loading-text="Please wait..."
                     >
                        <span>Update Service</span>
                     </button>
                     </div>

                  </div>
               </form>
            </div>
         </div>
      </div>
   </>
  )
}

export default EditServiceForm