import { createUser,getAllUsers,getUserById,updateUser,deleteUser} from "../controllers/user.controller.js";
import express from 'express'
const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.patch('/:id',updateUser)
router.delete('/:id',deleteUser)

export default router