import { createUser } from "./createUser"
import { deleteUser } from "./deleteUser"
import { editUser } from "./editUser"
import { getUserById } from "./getUserById"
import { getUsers } from "./getUsers"

export const userService = {
  getUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
}