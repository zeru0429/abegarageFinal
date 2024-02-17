// Import the install service to handle communication with the database
import installService from '../service/install.service.js'

const installController=  {
  install: async (req,res)=>{
   try {
      const isInstalled = await installService.install();
      console.log(isInstalled.message);
      res.status(isInstalled.status).json({
        message: isInstalled.message
      })

   } catch (error) {
      res.status(500).json({
         message: "server error",
         sucess: false
       })
   }
  }

}


export default installController;
