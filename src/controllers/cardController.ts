import { CardService } from "@/service/cardService";
import { Request, Response } from "express";
import httpStatus from "http-status";


async function cardPost(req: Request, res: Response) {
    const { name } = req.body;
    const { userId } = req;
    const card = await CardService.cardPost(name, userId);
    res.status(httpStatus.CREATED).send(card);
}

export const CardController = {
    cardPost
};