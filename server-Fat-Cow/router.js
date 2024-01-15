import { Router } from "express";
import { getNutriInfo, deleteOneResult } from './controllers/result.controller.js';
import { getResultsByClient, addOneClient, getAllClientsResults } from './controllers/client.controller.js';
const router = Router();

router.post('/nutri-result', getNutriInfo);
router.get('/client-results/:id', getResultsByClient);
router.delete('/delete-result/:id', deleteOneResult);
router.post('/add-client', addOneClient);
router.get('/all-client-results', getAllClientsResults)

export default router;