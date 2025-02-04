import { authenticateToken } from '@/middlewares/authenticationTokenMiddleware';
import { Router } from 'express';


const cardRouter = Router();

cardRouter
    .post('/', authenticateToken, CardController.CardPost)

export { cardRouter };