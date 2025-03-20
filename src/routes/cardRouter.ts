import { CardController } from '@/controllers/cardController';
import { authenticateToken } from '@/middlewares/authenticationTokenMiddleware';
import { Router } from 'express';


const cardRouter = Router();

cardRouter
    .post('/post', authenticateToken, CardController.cardPost)
    .delete('/:id', authenticateToken, CardController.cardDelete)

export { cardRouter };