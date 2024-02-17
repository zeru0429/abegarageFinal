import express from "express";
import installController from "../controller/install.controller.js";
const installRoute = express.Router();
installRoute.get("/api/install",installController.install);

export default installRoute;
