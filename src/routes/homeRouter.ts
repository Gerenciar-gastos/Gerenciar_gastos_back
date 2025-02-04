import { authenticateToken } from '@/middlewares/authenticationTokenMiddleware';
import { Router } from 'express';
import { HomeController } from '@/controllers/homeController';


const homeRouter = Router();

homeRouter
    .get('/', authenticateToken, HomeController.HomeGet)
    .post('/month', authenticateToken, HomeController.MonthPost)
    .post('/card', authenticateToken, HomeController.CardPost)

export { homeRouter };