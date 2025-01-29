import { HomeService } from "@/service/homeService";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function HomeGet(req: Request, res: Response) {
    const { userId } = req;
    const home = await HomeService.HomeGet(userId);

    res.status(httpStatus.OK).send(home);
}

export const HomeController = {
    HomeGet
};