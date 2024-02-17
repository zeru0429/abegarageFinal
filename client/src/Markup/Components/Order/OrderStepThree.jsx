import React, { useEffect } from 'react'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import Table from 'react-bootstrap/Table';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';


function OrderStepThree(props) {


  
  return (
    <>
   
    {props.selectedCustomer && <div className="container mb-2" style={{backgroundColor: 'white'}}>
      <div className="row">
       <div className="col-10 p-4">
          <h5 className='pb-3'>
            <b>{props.selectedCustomer.customer_first_name} {props.selectedCustomer.customer_last_name}</b>
          </h5>
          <div>
            <b>Email: </b> <span className='text'> {props.selectedCustomer.customer_email}</span>
          </div>
          <div>
            <b>Phone: </b> <span className='text'>{props.selectedCustomer.customer_phone_number}</span>
          </div>
          <div>
            <b>Active Customer: </b><span className='text'>{props.selectedCustomer.active_customer_status==1? 'Yes' : 'No'}</span>
          </div>
          <div>
            <b>Edit Customer info: </b> <BorderColorOutlinedIcon  className='danger' /> 
          </div>
       </div>
       <div className="col-1 center m-0 mt-5 " >
        <div className="btn btn-danger">X</div>
       </div>
      </div>
    </div> }

   {props.vehicle &&  <div className="container mt-2" style={{backgroundColor: 'white'}}>
      <div className="row pt-5" >
          <div className="col-12">
            <h5 className='pb-3'>
                <b>Choose Vehicle d</b>
            </h5>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Mark</th>
                  <th>Model</th>
                  <th>Tag</th>
                  <th>Serial</th>
                  <th>Color</th>
                  <th>Mileage</th>
                  <th>Choose</th>
                </tr>
              </thead>
            
              <tbody>
              {props.vehicle.length<1 && <p className="text"> no vehicle found</p>}
               {props.vehicle && props.vehicle.map((single)=>{
                return <tr>
                        <td>{single.vehicle_year}</td>
                        <td>{single.vehicle_make}</td>
                        <td>{single.vehicle_model}</td>
                        <td>{single.vehicle_tag}</td>
                        <td>{single.vehicle_serial}</td>
                        <td>{single.vehicle_color}</td>
                        <td>{single.vehicle_mileage}</td>
                        <td><PanToolAltIcon onClick={()=>{props.setSelectedVehicles(single)}} /></td>
                      </tr>
               })}
              </tbody>
            </Table>
          </div>
        </div>
    </div>}
    
    </>
  )
}

export default OrderStepThree