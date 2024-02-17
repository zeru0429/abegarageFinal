import React, { useEffect, useState } from 'react'
import { Form } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import OrderStepTwo from './OrderStepTwo';
import CustomerService from '../../../Service/CustomerService';
function OrderStepOne({setSelectedCustomer,selectedCustomer,first,showTable,setShowTable,second, setSecond,firstStep,secondStep,setFirstStep,setSecondStep}) {
  const navigator = useNavigate();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [customers,setCustomers] = useState([]);

  useEffect(()=>{
    handleSearch();

  },[form.userInput]);
 

  const handleSearch =async ()=>{
   try {
    const response = await CustomerService.searchCustomer(form.userInput);
    setCustomers(response);
   } catch (error) {
    console.log(error)
   }finally{
    setFirstStep(false);
    setSecondStep(true);
    setShowTable(true);
   }

  }




  const hadleSubmit = async (e) => {
		e.preventDefault();

		console.log(form) 
  
  }



  return (
    <> 
    <div className="contact-form">
          <div className="row clearfix">
           { <div className="form-group col-md-12 mb-0 pb-0">
              <input
                  type="text"
                  name="userInput"
                  placeholder="Search for customer using first name,last name, email address or phone number"
                  required
                  onChange={(e) => {
                    setForm({
                        ...form,
                        userInput: e.target.value,
                    });
                  }}
              />
              <span id='searchIcon' >
										<SearchIcon onClick={handleSearch}/>
							</span>

              {errors.userInput && (
                  <div className="validation-error" role="alert">
                    {errors.userInput}
                  </div>
              )}
            </div>}
            <div className="form-group col-md-12">
               {secondStep &&  <OrderStepTwo secondStep={secondStep} setSecondStep={setSecondStep} showTable={showTable} setShowTable={setShowTable} customers={customers} setSelectedCustomer={setSelectedCustomer} second={second} setSecond={setSecond} />}
            </div>
          
           {firstStep &&  <div className="form-group col-md-12">
              <button
                className="theme-btn btn-style-one"
                onClick={()=>{navigator('/admin/add-customer')}}
                data-loading-text="Please wait..."
              >
                <span>Add New Customer</span>
              </button>
            </div>}
          </div>                 
    </div>
    </>
  )
}

export default OrderStepOne