import { Router } from "express";
import { getUser, createUser, updateUser } from "../controllers/users.controller.js";
import { validateCreateUser } from "../validators/users.validate.js";
import { authenticateUser } from "../authenticators/admin.authenticator.js";

export const router = Router();

router.get('/', authenticateUser, getUser);
router.post('/new', validateCreateUser, createUser);
router.put('/', authenticateUser, updateUser);