import { invalidCredentialsError } from "@/erros/invalidCredentialsError";
import { expensesRepository } from "@/repositories/expensesRepository";


async function addexpensesPost(monthId: number, containers: any[] ) {
    const expenses = await expensesRepository.addexpensesPost(monthId, containers);
    return expenses
}

async function deleteExpensesDelete(id: number) {
    const expenseExists = expensesRepository.expenseExists(id)
    if(!expenseExists){
        throw invalidCredentialsError("despesa não cadastrada");
    }
   

    return expenseExists
}


export const expensesService = {
    addexpensesPost, deleteExpensesDelete
};