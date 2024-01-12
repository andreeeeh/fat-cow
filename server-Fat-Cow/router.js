import { Router } from "express";
import { getNutriInfo } from './controllers/fatcow.controller.js';
const router = Router();

router.post('/nutri-result', getNutriInfo);

export default router;