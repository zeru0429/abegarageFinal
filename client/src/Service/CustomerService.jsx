import axios from "../Utility/axios"
export default{
   register: async (data)=>{
      try {
         const response = await axios.post('api/customer', data);
        //  console.log(response.data)
         return response.data;
      } catch (error) {
         //console.log(error.response.data.message)
         return error.response.data;
      }
   },
   updateCustomer: async (data,id)=>{
      try {
         const response = await axios.put(`api/customer/:${id}`,data);
         return response.data;
      } catch (error) {
         //console.log(error.response.data.message)
         return error.response.data;
      }
   },
  
   deleteCustomer: async (id)=>{
      try {
         //console.log(id);
         const response = await axios.delete(`/api/customer/:${id}`);
         //console.log(response);
         return response.data;
      } catch (error) {
        // console.log(error);
         //console.log(error.response.data.message)
         return error.response.data;
      }
   },

   getAllCustomers: async()=>{
      try {
         const response =  await axios.get('api/customer'); 
         return response.data.data;
      } catch (error) {
       //  console.log(error.response.data)
         return null;
      }
   }
   ,
   searchCustomer: async(userInput)=>{
      try {
         const response =  await axios.get(`api/customer/:${userInput}`); 
         return response.data.data;
      } catch (error) {
        // console.log(error.response.data)
         return null;
      }
   }
}