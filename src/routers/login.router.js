import { Router } from "express";
import { login } from "../controllers/login.controller.js";
import { validateLogin } from "../validators/login.validate.js";

export const router = Router();

// LOGIN WILL GET US A TOKEN
router.post('/',validateLogin, login);