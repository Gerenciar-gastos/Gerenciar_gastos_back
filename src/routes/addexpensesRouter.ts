import { authenticateToken } from '@/middlewares/authenticationTokenMiddleware';
import { Router } from 'express';


const addexpensesRouter = Router();

addexpensesRouter
    .post('/', authenticateToken, addexpensesController.addexpensesPost)

export { addexpensesRouter };