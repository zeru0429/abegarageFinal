import React, { useEffect, useState } from 'react'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import { Checkbox } from '@mui/material';
import AdditionalRequestForm from '../Commen/Form/AdditionalRequestForm';
import ServicesService from '../../../Service/ServicesService';
import ServiceCard from '../Services/ServiceCard';

function OrderStepFour(props) {
  const [garageService, setGarageService] = useState([]);
  const [selectedService, setSelectedService] = useState({});
  const [open, setOpen] = useState(false);

  const fetchData = async () => {
    const response = await ServicesService.getAllService();
    console.log(response);
    setGarageService(response);
  };

  useEffect(() => {
    fetchData();
  }, []);



  return (
   
   <div>
        <div className="container m-2 p-2" style={{backgroundColor: 'white'}}>
          <div className="row">
          <div className="col-10 p-4">
              <h5 className='pb-3'>
                <b>{props.selectedVehicle.vehicle_make}</b>
              </h5>
              <div>
                <b>Vehicle color : </b> <span className='text'>{props.selectedVehicle.vehicle_color}</span>
              </div>
              <div>
                <b>Vehicle tag: </b> <span className='text'> {props.selectedVehicle.vehicle_tag}</span>
              </div>
              <div>
                <b>Vehicle year : </b> <span className='text'> {props.selectedVehicle.vehicle_year}</span>
              </div>
              <div>
                <b>Vehicle mileage : </b> <span className='text'>{props.selectedVehicle.vehicle_mileage} </span>
              </div>
              <div>
                <b>Vehicle serial: </b> <span className='text'>{props.selectedVehicle.vehicle_serial}</span>
              </div>
              
              <div>
                <b>Edit Customer info: </b> <BorderColorOutlinedIcon  className='danger' /> 
              </div>
          </div>
          <div className="col-1 center m-0 mt-5 " >
            <div className="btn btn-danger">X</div>
          </div>
          </div>
        </div> 
        {garageService && garageService.map((single) => (
             <div className="conatainer m-2 p-2" style={{background: 'white'}} >
             <div className="row  m-0 p-0">
                 <div className="col-12">
                   <h5><b>{single.service_name}</b></h5>
                 </div>
               </div>
               <div className="row m-0 p-0">
                   <div className="col-10">
                     <p className='text'>{single.service_description}</p>
                   </div>
                   <div className="col-1">
                   <Checkbox />
                   </div>
                 </div>
             </div>
            ))}

        
     <div className="container mt-5 mb-5 p-5" style={{background: 'white'}} >

          <AdditionalRequestForm />

        </div>
        



   </div>
  )
}

export default OrderStepFour