import { Router } from "express";
import { solicitationService } from "./service";

export const solicitationController = Router();

solicitationController.post('/create', solicitationService.createSolicitation)
solicitationController.put('/edit/:id', solicitationService.editSolicitation)
solicitationController.delete('/delete/:id', solicitationService.deleteSolicitation)