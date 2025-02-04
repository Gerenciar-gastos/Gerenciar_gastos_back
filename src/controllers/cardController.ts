import { HomeService } from "@/service/homeService";
import { Request, Response } from "express";
import httpStatus from "http-status";



async function cardPost(req: Request, res: Response) {
    const { name, totalFunds } = req.body;
    const { userId } = req;
    const monthHome = await CardService.cardPost(name, totalFunds, userId);
    res.status(httpStatus.CREATED).send(monthHome);
}

export const CardController = {
    cardPost
};