import axios from "../Utility/axios"
export default{
   register: async (data)=>{
      try {
         const response = await axios.post('api/services', data);
          //console.log(response.data)
          return response.data;
      } catch (error) {
        // console.log(error.response.data.message)
         return error.response.data;
      }
   },
   updateService: async (data,id)=>{
      try {
         const response = await axios.put(`api/services/:${id}`,data);
         return response.data;
      } catch (error) {
       //  console.log(error.response.data.message)
         return error.response.data;
      }
   },
  
   deleteService: async (id)=>{
      try {
         const response = await axios.delete(`/api/services/:${id}`);
         //console.log(response);
         return response.data;
      } catch (error) {
         console.log(error);
         console.log(error.response.data.message)
         return error.response.data;
      }
   },

   getAllService: async()=>{
      try {
         const response =  await axios.get('api/services'); 
         return response.data.data;
      } catch (error) {
         console.log(error.response.data)
         return null;
      }
   }
   
}