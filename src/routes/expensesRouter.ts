import { expensesController } from '@/controllers/expensesController';
import { authenticateToken } from '@/middlewares/authenticationTokenMiddleware';
import { validateBody } from '@/middlewares/validationMiddlewere';
import { validatePurchases } from '@/schemas/addexpensesSchemas';
import { Router } from 'express';


const expensesRouter = Router();

expensesRouter
    .post('/', authenticateToken, validateBody(validatePurchases), expensesController.addexpensesPost)
    .delete('/:id', authenticateToken, expensesController.deleteExpensesDelete)
    .put('/', authenticateToken, expensesController.updateExpesesPut )

export { expensesRouter };