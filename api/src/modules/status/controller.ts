import { Router } from "express";
import { statusService } from "./service";

export const statusController = Router();

statusController.get('/', statusService.getStatus)
