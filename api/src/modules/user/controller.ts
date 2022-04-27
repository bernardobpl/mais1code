import { Router } from "express";
import { userService } from "./service";

export const userController = Router();

userController.get('/', userService.getUsers)
userController.get('/:id', userService.getUserById)
userController.post('/create', userService.createUser)
userController.put('/edit/:id', userService.editUser)
userController.delete('/delete/:id', userService.deleteUser)
