import axios from "../Utility/axios"
export default{
   register: async (data,token)=>{
      try {
         const response = await axios.post('api/employee', data);
         return{success: true, message: response.data.message}
      } catch (error) {
         //console.log(error.response.data.message)
         return {success: false,message: error.response.data.message}
      }
   },
   updateEmployee: async (data,id)=>{
      try {
         data.company_role_id = data.userRole;
         const response = await axios.put(`/api/employee/:${id}`,data);
        // console.log(response);
         return{success: true, message: response.data.message}
      } catch (error) {
         //console.log(error);
         //console.log(error.response.data.message)
         return {success: false,message: error.response.data.message}
      }
   },
   deleteEmployee: async (id)=>{
      try {
         const response = await axios.delete(`/api/employee/:${id}`);
         //console.log(response);
         return{success: true, message: response.data.message}
      } catch (error) {
        // console.log(error);
        // console.log(error.response.data.message)
         return {success: false,message: error.response.data.message}
      }
   },

   getRoles: async()=>{
      try {
         const response = await axios.get('api/employees/roles');  
         return response.data.data;
      } catch (error) {
         //console.log(error.response.data)
         return null;
      }
   },
   getAllEmployee: async()=>{
      try {
         const response =  await axios.get('api/employees'); 
         return response.data.data;
      } catch (error) {
       // console.log(error.response.data)
         return null;
      }
   }
   
}