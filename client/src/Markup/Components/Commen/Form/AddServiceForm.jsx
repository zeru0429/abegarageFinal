import React, { useState } from "react";
import FormValidator from "../../../../Utility/FormValidator";
import ServicesService from "../../../../Service/ServicesService";
import { useAuth } from "../../../../Context/AuthContext";
import { useToast } from "../../../../Context/ToastContext";
import { useNavigate } from "react-router-dom";
function AddServiceForm(props) {
  const navigator = useNavigate();
  const { toastData, hideToast, setToastData } = useToast();
  const { isLogged, setIsLogged, employee, isAdmin, fetchData } = useAuth();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const hadleSubmit = async (e) => {
    e.preventDefault();

    const formData = FormValidator.ServicesForm(form);
    const isValid = formData.isValid;
    if (!isValid) {
      const errorData = formData.errors;
      console.log(errorData);
      setErrors(errorData);
      return;
    } else {
      setErrors({});
      const response = await ServicesService.register(form);
      //alert(response.message);
      //  console.log(response.success);s
      setToastData(response);
      if (response.success) {
        //console.log("added");
        setForm({}); // Reset the form input fields
        setErrors({});
        props.fetchData();
        navigator("/admin/services");
      } else {
      }
    }
  };

  return (
    <>
    <div className="container m-0">
      <div className="row">
      <div className="sec-title style-two">
        <h2 className="p-3">Add Services</h2>
        <div className="contact-form">
          <form onSubmit={hadleSubmit} id="contact-form">
            <div className="row clearfix">
              <div className="form-group col-md-12">
                <input
                  value={form.serviceName || ""}
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
                  value={form.serviceDescription || ""}
                  name="serviceDescription"
                  placeholder="Service Description"
                  required
                  onChange={(e) => {
                    setForm({
                      ...form,
                      serviceDescription: e.target.value,
                    });
                  }}></textarea>
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
                  data-loading-text="Please wait...">
                  <span>Add Service</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default AddServiceForm;
