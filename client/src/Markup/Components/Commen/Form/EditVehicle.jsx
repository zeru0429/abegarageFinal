import React from 'react'
import VehicleService from '../../../../Service/VehicleService'
import FormValidator from '../../../../Utility/FormValidator'
import { useToast } from "../../../../Context/ToastContext";

function EditVehicle(props) {
   const navigator = useNavigate();
	const [form, setForm] = useState({
		customer_id: props.data.customer_id, 
		customer_first_name: props.data.firstName,
		customer_last_name: props.data.lastName,
		customer_phone_number: props.data.phoneNumber,
		active_customer_status: props.data.active,
	});
   
	const [errors, setErrors] = useState({});
	const { toastData, hideToast,setToastData } = useToast();


  return (
    <div>EditVehicle</div>
  )
}

export default EditVehicle