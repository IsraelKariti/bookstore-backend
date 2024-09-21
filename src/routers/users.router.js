import { Router } from "express";
import { getUser, createUser, updateUser, increaseBookAmountForUser, decreaseBookAmountForUser, deleteUser } from "../controllers/users.controller.js";
import { validateCreateUser } from "../validators/users.validate.js";
import { authenticateUser } from "../authenticators/user.authenticator.js";

export const router = Router();

router.get('/', authenticateUser, getUser);
router.post('/new', validateCreateUser, createUser);
router.put('/', authenticateUser, updateUser);
router.put('/inc', authenticateUser, increaseBookAmountForUser);
router.put('/dec', authenticateUser, decreaseBookAmountForUser);
router.delete('/', authenticateUser, deleteUser);