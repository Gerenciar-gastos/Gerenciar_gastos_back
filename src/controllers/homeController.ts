import { HomeService } from "@/service/homeService";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function HomeGet(req: Request, res: Response) {
    const { userId } = req;
    const home = await HomeService.HomeGet(userId);

    res.status(httpStatus.OK).send(home);
}

async function MonthPost(req: Request, res: Response) {
    const { month } = req.body;
    const monthHome = await HomeService.MonthPost(month);
}

export const HomeController = {
    HomeGet, MonthPost
};