import { Router } from "express";
import { getNutriInfo, getResultsByClient, deleteOneResult, addOneClient } from './controllers/fatcow.controller.js';
const router = Router();

router.post('/nutri-result', getNutriInfo);
router.get('/client-results/:id', getResultsByClient);
router.delete('/delete-result/:id', deleteOneResult);

router.post('/add-client', addOneClient);

export default router;