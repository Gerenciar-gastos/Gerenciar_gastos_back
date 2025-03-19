import { invalidCredentialsError } from "@/erros/invalidCredentialsError";
import { expensesRepository } from "@/repositories/expensesRepository";


async function addexpensesPost(monthId: number, containers: any[] ) {
    const expenses = await expensesRepository.addexpensesPost(monthId, containers);
    return expenses
}

async function deleteExpensesDelete(id: number) {
    const expenseExists = await expensesRepository.expenseExists(id)
    if (expenseExists.length === 0){
        throw invalidCredentialsError("despesa não cadastrada");
    }else{
        const expenses = await expensesRepository.deleteExpensesDelete(id);
        return expenses
    }
}


export const expensesService = {
    addexpensesPost, deleteExpensesDelete
};