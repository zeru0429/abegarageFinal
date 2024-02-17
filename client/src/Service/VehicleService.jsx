import axios from "../Utility/axios"
export default{
   register: async (data)=>{
      try {
         const response = await axios.post('api/vehicles', data);
          console.log(response.data)
         return response.data;
      } catch (error) {
         console.log(error.response.data.message)
         return error.response.data;
      }
   },
   updateVehicle: async (data,id)=>{
      try {
         const response = await axios.put(`api/vehicle/:${id}`,data);
         return response.data;
      } catch (error) {
         console.log(error.response.data.message)
         return error.response.data;
      }
   },
  
   deleteVehicle: async (id)=>{
      try {
         const response = await axios.delete(`/api/vehicle/:${id}`);
         //console.log(response);
         return response.data;
      } catch (error) {
         console.log(error);
         console.log(error.response.data.message)
         return error.response.data;
      }
   },

   getAllVehicle: async()=>{
      try {
         const response =  await axios.get('api/vehicle'); 
         return response.data.data;
      } catch (error) {
         console.log(error.response.data)
         return null;
      }
   },
   
   getSingleCustomerVehicle: async(id)=>{
      try {
         const response =  await axios.get(`api/vehicles/customer/:${id}`); 
         return response.data.data;
      } catch (error) {
         console.log(error.response.data)
         return null;
      }
   }
   
}