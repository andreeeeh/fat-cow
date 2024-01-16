import { Router } from "express";
import { getNutriInfo, deleteOneResult } from './controllers/result.controller.js';
import { getResultsByClient, addClient, getAllClientsResults, getOnlyClients, deleteOneClient } from './controllers/client.controller.js';
const router = Router();

router.get('/client-results/:id', getResultsByClient);
router.get('/all-client-results', getAllClientsResults)
router.get('/all-clients', getOnlyClients)
router.post('/nutri-result', getNutriInfo);
router.post('/add-client', addClient);
router.delete('/delete-result/:id', deleteOneResult);
router.delete('/delete-client/:id', deleteOneClient);

export default router;