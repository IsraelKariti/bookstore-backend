import { Router } from "express";
import { authenticateToken } from "../authorizers/authorizer.js";
import { ok } from "../utils/response.js";
export const router = Router();

router.get('/user',authenticateToken, (req, res)=> ok(res, req.user) ); 