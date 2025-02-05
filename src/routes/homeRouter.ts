import { authenticateToken } from '@/middlewares/authenticationTokenMiddleware';
import { Router } from 'express';
import { HomeController } from '@/controllers/homeController';
import { validateBody } from '@/middlewares/validationMiddlewere';
import { RegisterMonthSchema } from '@/schemas/HomeMonthSchemas';


const homeRouter = Router();

homeRouter
    .get('/', authenticateToken, validateBody(RegisterMonthSchema), HomeController.HomeGet)
    .post('/month', authenticateToken, HomeController.MonthPost)

export { homeRouter };