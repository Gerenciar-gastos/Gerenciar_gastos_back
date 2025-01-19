import { Router } from 'express';
import { ObjectSchema } from 'joi';
import { validateBody } from '../middlewares/validationMiddlewere';
import { LoginSchema } from '../schemas/loginSchemas';
import { loginController } from '../controllers/loginController';

const LoginRouter = Router();

LoginRouter.post('/', validateBody(LoginSchema as ObjectSchema<any>), loginController.loginPost);


export { LoginRouter };