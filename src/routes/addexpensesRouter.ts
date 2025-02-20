import { addexpensesController } from '@/controllers/addexpensesController';
import { authenticateToken } from '@/middlewares/authenticationTokenMiddleware';
import { validateBody } from '@/middlewares/validationMiddlewere';
import { validatePurchases } from '@/schemas/addexpensesSchemas';
import { Router } from 'express';


const addexpensesRouter = Router();

addexpensesRouter
    .post('/', authenticateToken, validateBody(validatePurchases) ,addexpensesController.addexpensesPost)

export { addexpensesRouter };