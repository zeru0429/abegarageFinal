import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const db = process.env.DB_NAME;

const pool = mysql.createPool({
	host,
	port,
	user,
	password,
	database: db,
	connectionLimit: 10,
});

async function query(sql, params) {
	const [rows, fields] = await pool.execute(sql, params);
	return rows;
}

export { query };
