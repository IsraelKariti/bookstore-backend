import { Router } from "express";
import {signup} from '../controllers/signup.controller.js';
import { validateSignup } from "../validators/signup.validate.js";

export const router = Router();

router.post('/', validateSignup, signup);