import { Router } from "express";
import { getNutriInfo } from './controllers/fatcow.controller.js';
const router = Router();

router.get('/nutri-info', getNutriInfo);

export default router;