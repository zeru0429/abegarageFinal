import axios from "../Utility/axios";

export default{
   login: async(data)=>{
      try {
        // console.log(data)
         const response = await axios.post('api/login', data);
         return response.data
      } catch (error) {
         return error.response.data;
         
      }
   },
}