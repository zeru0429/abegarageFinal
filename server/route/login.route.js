import express from "express";
import loginController from "../controller/login.controller.js";
const loginRoute = express.Router();

loginRoute.post("/api/login", loginController.login);


export default loginRoute;
