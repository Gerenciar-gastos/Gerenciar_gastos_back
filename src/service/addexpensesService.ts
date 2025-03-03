import { addexpensesRepository } from "@/repositories/addexpensesRepository";


async function addexpensesPost(monthId: number, containers: any[] ) {
    console.log(monthId, containers)
    const expenses = await addexpensesRepository.addexpensesPost(monthId, containers);
    return expenses
}

export const addexpensesService = {
    addexpensesPost
};