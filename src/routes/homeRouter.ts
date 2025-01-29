import { authenticateToken } from '@/middlewares/authenticationTokenMiddleware';
import { Router } from 'express';
import { HomeController } from '@/controllers/homeController';


const homeRouter = Router();

homeRouter
    .get('/', authenticateToken, HomeController.homeGet)

export { homeRouter };