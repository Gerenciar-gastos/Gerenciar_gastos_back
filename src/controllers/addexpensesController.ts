import { addexpensesService } from "@/service/addexpensesService";
import { Request, Response } from "express";
import httpStatus from "http-status";


async function addexpensesPost(req: Request, res: Response) {
    const { monthId, containers } = req.body; 
    const expenses = await addexpensesService.addexpensesPost(monthId, containers);
    res.status(httpStatus.CREATED).send(expenses);
}

export const addexpensesController = {
    addexpensesPost
};