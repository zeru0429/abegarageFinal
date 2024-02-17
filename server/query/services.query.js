export default {
	getAllCommon_services: `SELECT * FROM common_services;`,
	getSingleCommon_services: `SELECT * FROM common_services WHERE service_id = ?;`,
   deleteSingleCommon_services: `DELETE FROM common_services WHERE service_id = ?;`,
   updateSingleCommon_services: `update common_services set service_name=?, service_description=? WHERE service_id = ?;`,
   insertCommon_services: `insert into common_services(service_name,service_description) values  (?, ?);`,
}