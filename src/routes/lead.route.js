import express from "express";
import { submitLead } from "../controllers/lead.controller.js";

const leadRouter = express.Router();

leadRouter.post("/submit-lead", submitLead);

export default leadRouter;