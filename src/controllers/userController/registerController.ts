import { Request, Response } from "express";
import httpStatus from "http-status";
import { LoginService } from "../../service/loginservice";

async function registerPost(req: Request, res: Response) {
    const { name, password, cpf, email } = req.body;
    const user = await LoginService.registerPost({ name, password, cpf, email });

    res.status(httpStatus.OK).send(user);
}

export const registerController = {
    registerPost
};