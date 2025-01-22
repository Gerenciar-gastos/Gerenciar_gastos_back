import { RegisterSchema } from '@/schemas/registerSchemas';
import { Router } from 'express';
import { ObjectSchema } from 'joi';
import { loginController } from '../controllers/userController/loginController';
import { validateBody } from '../middlewares/validationMiddlewere';
import { LoginSchema } from '../schemas/loginSchemas';
import { registerController } from '@/controllers/userController/registerController';

const UserRouter = Router();

UserRouter.post('/login', validateBody(LoginSchema as ObjectSchema<any>), loginController.loginPost);
UserRouter.post('/register', validateBody(RegisterSchema as ObjectSchema<any>), registerController.registerPost);


export { UserRouter };
