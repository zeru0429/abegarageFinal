import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ServicesService from '../../../Service/ServicesService';

function ServiceCard(props) {
  const handleDelete = async (id) => {
    const response = await ServicesService.deleteService(id);
    console.log(response);
    alert(response.message);
    if (response.success) {
      props.fetchData();
    } else {
      // Handle error case
    }
  }

  return (
    <div className="container m-2 p-2" style={{ background: 'white' }}>
      <div className="row m-0 p-0">
        <div className="col-12 pb-0">
          <h5><b>{props.data.service_name}</b></h5>
        </div>
      </div>
      <div className="row m-0 p-0">
        <div className="col-10 pt-0">
          <p className='text'>{props.data.service_description}.</p>
        </div>
        <div className="col-2 bottom">
          <EditIcon onClick={() => { props.setSelectedService(props.data); props.setOpen(true); }} />
          <DeleteIcon onClick={() => handleDelete(props.data.service_id)} />
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;