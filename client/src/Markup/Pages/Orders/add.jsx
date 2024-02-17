import React, { useEffect, useState } from 'react'
import AdminMenu from '../../Components/Admin/AdminMenu/AdminMenu'
import OrderStepOne from '../../Components/Order/OrderStepOne'
import OrderStepTwo from '../../Components/Order/OrderStepTwo'
import OrderStepThree from '../../Components/Order/OrderStepThree'
import OrderStepFour from '../../Components/Order/OrderStepFour'
import VehicleService from '../../../Service/VehicleService'
function AddOrder() {
  const [selectedCustomer,setSelectedCustomer] = useState({});
  const [vehicle,setVehicles] = useState([]);
  const [selectedVehicle,setSelectedVehicles] = useState({});
  const [showTable,setShowTable] = useState(false);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [firstStep, setFirstStep] = useState(true);
  const [secondStep, setSecondStep] = useState(false);
  const [thirdStep, setThirdStep] = useState(false);
  const [fourthStep, setFourthStep] = useState(false);


  
  useEffect(()=>{
    fetchData();
  },[selectedCustomer]);

  const fetchData = async () =>{
    const response = await VehicleService.getSingleCustomerVehicle(selectedCustomer.customer_id);
    setVehicles(response);

  }

  return (
    <div className="container m-0 p-0">
    <div className="row">
      <div className="col-4">
      <AdminMenu  />
      </div>
      <div className="col-8 pt-4">
      <div className="sec-title style-two">
        <h2 className='p-3'>Create new Order</h2>
      </div>
        { <OrderStepOne firstStep={firstStep} setFirstStep={setFirstStep} secondStep={secondStep} setSecondStep={setSecondStep} second={second} setSecond={setSecond} showTable={showTable} setShowTable={setShowTable} first={first} selectedCustomer={selectedCustomer} setSelectedCustomer={setSelectedCustomer}/>}
        { <OrderStepThree selectedCustomer={selectedCustomer} vehicle={vehicle} setSelectedVehicles={setSelectedVehicles} />  } 
       { <OrderStepFour selectedVehicle={selectedVehicle} /> }
      </div>
    </div>
  </div> 
  )
}

export default AddOrder