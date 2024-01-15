import { Router } from "express";
import { getNutriInfo, deleteOneResult } from './controllers/result.controller.js';
import { getResultsByClient, addClient, getAllClientsResults, getOnlyClients } from './controllers/client.controller.js';
const router = Router();

router.post('/nutri-result', getNutriInfo);
router.delete('/delete-result/:id', deleteOneResult);
router.get('/client-results/:id', getResultsByClient);
router.post('/add-client', addClient);
router.get('/all-client-results', getAllClientsResults)
router.get('/all-clients', getOnlyClients)

export default router;