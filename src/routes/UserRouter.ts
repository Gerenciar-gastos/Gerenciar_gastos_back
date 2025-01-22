import { Router } from 'express';
import { ObjectSchema } from 'joi';
import { validateBody } from '../middlewares/validationMiddlewere';
import { LoginSchema } from '../schemas/loginSchemas';
import { loginController } from '../controllers/loginController';

const UserRouter = Router();

UserRouter.post('/login', validateBody(LoginSchema as ObjectSchema<any>), loginController.loginPost);
UserRouter.post('/register', validateBody(LoginSchema as ObjectSchema<any>), loginController.loginPost);


export { UserRouter };