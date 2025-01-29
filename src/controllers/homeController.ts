import { Request, Response } from "express";
import httpStatus from "http-status";

async function homeGet(req: Request, res: Response) {
    const home = await LoginService.HomeGet();

    res.status(httpStatus.OK).send(home);
}

export const HomeController = {
    homeGet
};