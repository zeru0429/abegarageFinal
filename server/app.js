import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
const __dirname = path.resolve();
dotenv.config();
import appRoute from "./route/index.js";

const host = process.env.SERVER_HOST;
const port = process.env.SERVER_PORT;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ 
	origin: ['http://localhost:3000','*'],
	credentials: true 
 }));

app.use(appRoute);
app.get("/test", (req, res) => {
	res.send("<h1>Response</h1>");
});

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "clint", "dist", "index.html"));
});

app.listen(port, host, () => {
	console.log("object")
	console.log(`http://${host}:${port}`);
});
