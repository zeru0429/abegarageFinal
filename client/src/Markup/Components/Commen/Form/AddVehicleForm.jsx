import React, { useState } from 'react'
import VehicleService from '../../../../Service/VehicleService'
import FormValidator from '../../../../Utility/FormValidator'
import { useToast } from "../../../../Context/ToastContext";

function AddVehicleForm(props) {
  const [form, setForm] = useState({});
	const [errors, setErrors] = useState({});
	const { toastData, hideToast,setToastData } = useToast();

  const hadleSubmit = async (e) => {
		e.preventDefault();
	//	console.log(form)
		const formData = FormValidator.vehicleForm(form);
		const isValid = formData.isValid;
		if(!isValid){
			const errorData = formData.errors;
			console.log(errorData)
			setErrors(errorData)
			return;
		}
	

		else{
			const data = {customer_id: props.data.customer_id,
				vehicle_year: form.vehicleYear, 
				vehicle_make: form.vehicleMake, 
				vehicle_model:  form.vehicleModel, 
				vehicle_type:  form.vehicleType, 
				vehicle_mileage:  form.vehicleMileAge, 
				vehicle_tag:  form.vehicleTage, 
				vehicle_serial:  form.vehicleSerial, 
				vehicle_color:  form.vehicleColor
			} 

			//console.log(data);

		setErrors({})
		const response = await VehicleService.register(data);
		//alert(response.message);
		setToastData(response);
		
		if(response.success){
			console.log("added");
			setForm({})
			setErrors({})
			props.setVehicleForm(!props.showVehicleFom);
			props.handleVehicleSearch();
			// navigator('/admin/customer/{customerId}');
		}
		else{

		}

		}


  }

  
  return (
	<div className="contact-form">
		<h1 className='pb-3 center'>Add Vehicle</h1>
	<form onSubmit={hadleSubmit} id="contact-form">
		<div className="row clearfix">
			<div className="form-group col-12">
				<input
					type="number"
					name="vehicle year"
					placeholder="vehicle year"
					required
					onChange={(e) => {
						setForm({
							...form,
							vehicleYear: e.target.value,
						});
					}}
				/>
				{errors.vehicleYear && (
					<div className="validation-error" role="alert">
						{errors.vehicleYear}
					</div>
				)}
			</div>
			<div className="form-group col-12">
				<input
					type="text"
					name="vehicleMake"
					placeholder="vehicle Make"
					required
					onChange={(e) => {
						setForm({
							...form,
							vehicleMake: e.target.value,
						});
					}}
				/>
				{errors.vehicleMake && (
					<div className="validation-error" role="alert">
						{errors.vehicleMake}
					</div>
				)}
			</div>
			<div className="form-group col-md-12">
				<input
					type="text"
					name="vehicleModel"
					placeholder="vehicle Model"
					required
					onChange={(e) => {
						setForm({
							...form,
							vehicleModel: e.target.value,
						});
					}}
				/>
				{errors.vehicleModel && (
					<div className="validation-error" role="alert">
						{errors.vehicleModel}
					</div>
				)}
			</div>
			<div className="form-group col-md-12">
				<input
					type="text"
					name="vehicleType"
					placeholder="Vehicle Type"
					required
					onChange={(e) => {
						setForm({
							...form,
							vehicleType: e.target.value,
						});
					}}
				/>
				{errors.vehicleType && (
					<div className="validation-error" role="alert">
						{errors.vehicleType}
					</div>
				)}
			</div>
			<div className="form-group col-md-12">
				<input
					type="number"
					name="vehicleMileAge"
					placeholder="vehicle mile age"
					required
					onChange={(e) => {
						setForm({
							...form,
							vehicleMileAge: e.target.value,
						});
					}}
				/>
				{errors.vehicleMileAge && (
					<div className="validation-error" role="alert">
						{errors.vehicleMileAge}
					</div>
				)}
			</div>

			<div className="form-group col-md-12">
				<input
					type="text"
					name="vehicleTage"
					placeholder="vehicle Tage"
					required
					onChange={(e) => {
						setForm({
							...form,
							vehicleTage: e.target.value,
						});
					}}
				/>
				{errors.vehicleTage && (
					<div className="validation-error" role="alert">
						{errors.vehicleTage}
					</div>
				)}
			</div>
			<div className="form-group col-md-12">
				<input
					type="text"
					name="vehicleSerial"
					placeholder="Vehicle Serial"
					required
					onChange={(e) => {
						setForm({
							...form,
							vehicleSerial: e.target.value,
						});
					}}
				/>
				{errors.vehicleSerial && (
					<div className="validation-error" role="alert">
						{errors.vehicleSerial}
					</div>
				)}
			</div>
			<div className="form-group col-md-12">
				<input
					type="text"
					name="vehicleColor"
					placeholder="vehicle Color"
					required
					onChange={(e) => {
						setForm({
							...form,
							vehicleColor: e.target.value,
						});
					}}
				/>
				{errors.vehicleColor && (
					<div className="validation-error" role="alert">
						{errors.vehicleColor}
					</div>
				)}
			</div>	
			<div className="form-group col-md-12">
				<input
					id="form_botcheck"
					name="form_botcheck"
					className="form-control"
					type="hidden"
				/>
				<button
					className="theme-btn btn-style-one"
					type="submit"
					
					data-loading-text="Please wait..."
				>
					<span>Add Vehicle</span>
				</button>
			</div>
		</div>
	</form>
</div>

  )
}

export default AddVehicleForm