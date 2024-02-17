import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FormValidator from '../../../../Utility/FormValidator';
import CustomerService from '../../../../Service/CustomerService';
import { useToast } from "../../../../Context/ToastContext";

function EditCustomerForm(props) {
  const { toastData, hideToast,setToastData } = useToast();
  const navigator = useNavigate();
	const [form, setForm] = useState({
		customer_id: props.data.customer_id, 
		customer_first_name: props.data.firstName,
		customer_last_name: props.data.lastName,
		customer_phone_number: props.data.phoneNumber,
		active_customer_status: props.data.active,
	});


	const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
		e.preventDefault();
		form.active_customer_status = form.active_customer_status ? 1 : 0;
    const formData = FormValidator.customerEditForm(form);
		const isValid = formData.isValid;
      if(!isValid){
        const errorData = formData.errors;
        setErrors(errorData)
        return;
      }
      else{
        setErrors({})
        const response = await CustomerService.updateCustomer(form,form.customer_id);
       // alert(response.message);
       // console.log(response);
       setToastData(response);
          if(!response.success){
            setForm({});
          }
          else{
            setForm({})
            setErrors({})
            navigator('/admin/customers');

          }
      }
  };

	// Function to update the customer in the form state
	const updateCustomer = (updatedData) => {
		setForm((prevForm) => ({
			...prevForm,
			...updatedData,
		}));
	};

  return (
    <div>
      <div className="form-column col-lg-7">
        <div className="inner-column">
          <div className="contact-form sec-title style-two pt-5">
            <h2>Edit: {props.data.firstName + " " + props.data.lastName} </h2>
            <p className="font-weight-bold pt-3 pb-3">Customer email: {props.data.email}</p>
            <form onSubmit={handleSubmit} id="contact-form">
              <div className="row clearfix">
               
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="customer_first_name"
                    placeholder="customer First Name"
                    required
                    value={form.customer_first_name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        customer_first_name: e.target.value,
                      })
                    }
                  />
                  {errors.customer_first_name && (
                    <p className="error-message">
                      {errors.customer_first_name}
                    </p>
                  )}
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="customer_last_name"
                    placeholder="customer last Name"
                    required
                    value={form.customer_last_name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        customer_last_name: e.target.value,
                      })
                    }
                  />
                  {errors.customer_last_name && (
                    <p className="error-message">
                      {errors.customer_last_name}
                    </p>
                  )}
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="customer_phone"
                    placeholder="customer phone"
                    required
                    value={form.customer_phone_number}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        customer_phone_number: e.target.value,
                      })
                    }
                  />
                  {errors.customer_phone_number && (
                    <p className="error-message">{errors.customer_phone_number}</p>
                  )}
                </div>
                <div className="form-group col-md-12">
                  <label>
                    <input
                      type="checkbox"
                      name="is_active"
                      checked={form.active_customer_status}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          active_customer_status: e.target.checked,
                        })
                      }
                    />
                    Is active customer
                  </label>
                </div>
                <div className="form-group col-md-12">
                  <button
                    className="theme-btn btn-style-one"
                    type="submit"
                    data-loading-text="Please wait..."
                  >
                    <span>UPDATE</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default EditCustomerForm