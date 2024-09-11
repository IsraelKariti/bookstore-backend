import { Router } from "express";
import { authenticateToken, authorizeAdmin } from "../authorizers/authorizer.js";
import { getSetting, setSetting } from "../controllers/settings.controller.js";
import { validateSetting } from "../validators/setting.validate.js";

export const router = Router();
router.use(authenticateToken);
router.use(authorizeAdmin);
router.post('/set', validateSetting, setSetting);
router.post('/get', getSetting);