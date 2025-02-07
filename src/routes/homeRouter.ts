import { authenticateToken } from '@/middlewares/authenticationTokenMiddleware';
import { Router } from 'express';
import { HomeController } from '@/controllers/homeController';
import { validateBody } from '@/middlewares/validationMiddlewere';
import { RegisterMonthSchema } from '@/schemas/HomeMonthSchemas';


const homeRouter = Router();

homeRouter
    .get('/', authenticateToken,  HomeController.HomeGet)
    .post('/month', authenticateToken, validateBody(RegisterMonthSchema), HomeController.MonthPost)

export { homeRouter };