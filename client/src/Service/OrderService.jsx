import axios from "../Utility/axios"
export default{
   register: async (data)=>{
      try {
         const response = await axios.post('api/order', data);
          console.log(response.data)
         return response.data;
      } catch (error) {
         console.log(error.response.data.message)
         return error.response.data;
      }
   },

   getAllOrders: async()=>{
      try {
         const response =  await axios.get('api/orders'); 
         return response.data.data;
      } catch (error) {
         console.log(error.response.data)
         return null;
      }
   },

   getSingleCustomerOrder: async(id)=>{
     
      try {
         const response =  await axios.get(`api/orders/customer/:${id}`); 
         
         return response.data.data;
      } catch (error) {
         console.log(error.response.data)
         return null;
      }
   },

   getSingleOrder: async(order_hash)=>{
      try {
         const response =  await axios.get(`api/order/${order_hash}`); 
         
         return response.data.data;
      } catch (error) {
         console.log(error.response.data)
         return null;
      }
   }

}  