import { query } from "../config/pool.js";
import servicesQuery from "../query/services.query.js";

const servicesService ={
	insertIntoCommon_services: async (data) => {
		try {
			const row = await query(servicesQuery.insertCommon_services, [
				data.serviceName,
            data.serviceDescription
			]);
			return row;
		} catch (error) {
			console.log(error);
		}
	},

   updateCommon_services: async (data,id) => {
		try {
			const row = await query(servicesQuery.updateSingleCommon_services, [
            data.serviceName,
            data.serviceDescription,
            id
			]);

			return row;
		} catch (error) {
			console.log(error);
		}
	},

   deleteCommon_services: async (id) => {
		try {
			//console.log(ServicesQuery.deleteServicesInfo)
			const row = await query(servicesQuery.deleteSingleCommon_services, [
				id
			]);
			return row;
		} catch (error) {
			console.log(error);
		}
	},

   getAllCommon_services: async ()=>{
		try {
			const rows = await query(servicesQuery.getAllCommon_services);
			return rows;
		} catch (error) {
			console.log(error);
		}

	},
   getCommon_servicesById: async (id)=>{
		try {
			const rows = await query(servicesQuery.getSingleCommon_services,[id]);
			return rows;
		} catch (error) {
			console.log(error);
		}

	},

}

export default servicesService;