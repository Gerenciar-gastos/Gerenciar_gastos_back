import { Request, Response } from "express";
import httpStatus from "http-status";


async function addexpensesPost(req: Request, res: Response) {
    const { data } = req.body;
    const expenses = await addexpensesService.addexpensesPost(data);
    res.status(httpStatus.CREATED).send(expenses);
}

export const addexpensesController = {
    addexpensesPost
};