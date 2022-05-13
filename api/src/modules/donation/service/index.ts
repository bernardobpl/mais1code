import { createDonation } from "./createDonation"
import { deleteDonation } from "./deleteDonation"
import { editDonation } from "./editDonation"
import { getDonations } from "./getDonations"
import { getDonationsFromUser } from "./getDonationsFromUser"

export const donationService = {
  createDonation,
  getDonationsFromUser,
  editDonation,
  deleteDonation,
  getDonations
}