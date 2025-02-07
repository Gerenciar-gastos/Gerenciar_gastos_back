import { HomeService } from "@/service/homeService";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function HomeGet(req: Request, res: Response) {
    const { userId } = req;
    const home = await HomeService.HomeGet(userId);

    res.status(httpStatus.OK).send(home);
}

async function MonthPost(req: Request, res: Response) {
    const { name, totalFunds } = req.body;
    console.log(totalFunds)
    const { userId } = req;
    const monthHome = await HomeService.MonthPost(name, totalFunds, userId);
    res.status(httpStatus.CREATED).send(monthHome);
}

export const HomeController = {
    HomeGet, MonthPost
};