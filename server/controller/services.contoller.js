import servicesService from "../service/services.service.js";

const servicesController = {
    insertCommonService: async (req, res) => {
        try {
         const { serviceName,serviceDescription} = req.body;

         if (!serviceName || !serviceDescription ){
               return res.status(400).json({
                  success: false,
                  message: "All fields are required",
               });
         }
          
         const isInserted =  await servicesService.insertIntoCommon_services(req.body);
         if(!isInserted){
            return res.status(500).json({
               success: false,
               message: "error during service  registering",
            });
         }

         return res.status(200).json({
            success: true,
            message: "service added sucessfully",
         });

         
        } catch (error) {
         return res.status(500).json({
            success: false,
            message: error.message,
         });

        }
    },

    updateCommonService: async (req, res) => {
        try {
            const id =  req.params.id.substring(1);	
            const { serviceName,serviceDescription} = req.body;

         if (!serviceName || !serviceDescription ){
               return res.status(400).json({
                  success: false,
                  message: "All fields are required",
               });
         }

         const isUpdated =  await servicesService.updateCommon_services(req.body,id);
         if(!isUpdated){
            return res.status(500).json({
               success: false,
               message: "error during service updating ",
            });
         }

         return res.status(200).json({
            success: true,
            message: "service updated sucessfully",
         });

           
        } catch (error) {
         return res.status(500).json({
            success: false,
            message: error.message,
         });

        }
    },

    deleteCommonService: async (req, res) => {
        try {
            const id =  req.params.id.substring(1);	
            const isUpdated =  await servicesService.deleteCommon_services(id);
            if(!isUpdated){
               return res.status(500).json({
                  success: false,
                  message: "error during service updating ",
               });
            }
   
            return res.status(200).json({
               success: true,
               message: "service deleted sucessfully",
            });
   
         } catch (error) {
            return res.status(500).json({
               success: false,
               message: error.message,
            });
   
           }
           
    },

    getAllCommonServices: async (req, res) => {
        try {
            const row = await servicesService.getAllCommon_services();
            res.status(200).json({
               success: true,
               data: row
            });
        } catch (error) {
         return res.status(500).json({
            success: false,
            message: error.message,
         });
        }
    },

    getCommonServiceById: async (req, res) => {
        try {
            const id =  req.params.id.substring(1);	
            const row = await servicesService.getCommon_servicesById(id);
            res.status(200).json({
               success: true,
               data: row
            });
        } catch (error) {
         return res.status(500).json({
            success: false,
            message: error.message,
         });
        }
    }
};

export default servicesController;
