import { expensesService } from "@/service/expensesService";
import { Request, Response } from "express";
import httpStatus from "http-status";


async function addexpensesPost(req: Request, res: Response) {
    const { monthId, containers } = req.body; 
    const expenses = await expensesService.addexpensesPost(monthId, containers);
    res.status(httpStatus.CREATED).send(expenses);
}

async function deleteExpensesDelete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const expenses = await expensesService.deleteExpensesDelete(id);

    res.status(httpStatus.OK).send(expenses);
}

async function updateExpesesPut(req: Request, res: Response) {
    const { expenses, newCardName } = req.body; 
    const updateexpenses = await expensesService.updateExpesesPut(expenses, newCardName);

    res.status(httpStatus.OK).send(updateexpenses);
}

export const expensesController = {
    addexpensesPost, deleteExpensesDelete, updateExpesesPut
};