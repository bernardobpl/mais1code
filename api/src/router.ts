import { Router } from "express";
import { donationController } from "./modules/donation/controller";
import { productController } from "./modules/product/controller";
import { solicitationController } from "./modules/solicitation/controller";
import { userController } from "./modules/user/controller";

export const router = Router()

router.use("/users", userController)
router.use("/donations", donationController)
router.use("/products", productController)
router.use("/solicitations", solicitationController)