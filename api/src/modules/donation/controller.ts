import { Router } from "express";
import { donationService } from "./service";

export const donationController = Router();

donationController.get('/', donationService.getDonationsFromUser)
donationController.post('/create', donationService.createDonation)
donationController.put('/edit/:id', donationService.editDonation)
donationController.delete('/delete/:id', donationService.deleteDonation)
