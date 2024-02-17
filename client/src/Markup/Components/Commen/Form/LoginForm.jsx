import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoginService from "../../../../Service/LoginService";
import FormValidator from "../../../../Utility/FormValidator";
//icons
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useAuth } from "../../../../Context/AuthContext";
import { useToast } from "../../../../Context/ToastContext";
//import { ToastNotification  } from "../Toast/Toast";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  const { toastData, hideToast,setToastData } = useToast();
  const { isLogged, setIsLogged, employee, isAdmin, fetchData } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({
    employee_email: "",
    employee_password: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setServerError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(form);
    const formData = FormValidator.loginForm(form);
    const isValid = formData.isValid;
    //console.log(formData);
    if (!isValid) {
      setPasswordError(formData.errors.employee_password);
      setEmailError(formData.errors.employee_email);
      return;
    } else {
      setEmailError("");
      setPasswordError("");
      const loginEmployee = await LoginService.login(form);
      //tost message
      // console.log(loginEmployee);
     // notify(loginEmployee.message, loginEmployee.success);
      setToastData(loginEmployee);
      if (loginEmployee.success) {
        localStorage.setItem(
          "employee",
          JSON.stringify({ employee_token: loginEmployee.token })
        );
        fetchData();
      } else {
      }
    }
  };

  return (
    <>
    
      <section className="contact-section">
        <div className="auto-container">
          <div className="contact-title">
            <h2>Login to your account</h2>
          </div>
          <div className="row clearfix">
            <div className="form-column col-lg-7">
              <div className="inner-column">
                <div className="contact-form">
                  <form onSubmit={handleSubmit}>
                    <div className="row clearfix">
                      <div className="form-group col-md-12">
                        {serverError && (
                          <div className="validation-error" role="alert">
                            {serverError}
                          </div>
                        )}
                        <input
                          type="email"
                          name="employee_email"
                          value={form.employee_email}
                          onChange={handleFormChange}
                          placeholder="Email"
                        />
                        {emailError && (
                          <div className="validation-error" role="alert">
                            {emailError}
                          </div>
                        )}
                      </div>

                      <div className="form-group col-md-12">
                        <input
                          type={visible ? "text" : "password"}
                          name="employee_password"
                          value={form.employee_password}
                          onChange={handleFormChange}
                          placeholder="Password"
                        />
                        <span id="searchIcon">
                          {visible ? (
                            <VisibilityIcon
                              onClick={() => setVisible(!visible)}
                            />
                          ) : (
                            <VisibilityOffIcon
                              onClick={() => setVisible(!visible)}
                            />
                          )}
                        </span>
                        {passwordError && (
                          <div className="validation-error" role="alert">
                            {passwordError}
                          </div>
                        )}
                      </div>

                      <div className="form-group col-md-12">
                        <button
                          className="theme-btn btn-style-one"
                          type="submit"
                          data-loading-text="Please wait...">
                          <span>Login</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginForm;
