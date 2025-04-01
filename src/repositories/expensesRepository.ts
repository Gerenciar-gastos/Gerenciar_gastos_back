import prisma from "@/database/database";
import { Expense } from "@/protocols";

async function addexpensesPost(monthId: number, containers: any[]) {

    const createdCards = [];

    for (const cardData of containers) {
        const card = await prisma.card.create({
            data: {
                name: cardData.nameCard, 
                monthId: monthId,
            },
        });

        let createdExpenses = [];

        if (cardData.entries && cardData.entries.length > 0) {
            for (const expenseData of cardData.entries) {
                const expense = await prisma.expense.create({
                    data: {
                        person: expenseData.person,
                        name: expenseData.name,
                        value: expenseData.value,
                        cardId: card.id, 
                    },
                });
                createdExpenses.push(expense);
            }
        }

        createdCards.push({
            card,
            expenses: createdExpenses,
        });
    }
    return createdCards;
}

async function expenseExists(id:number) {
    const expense = await prisma.expense.findMany({
        where:{
            id
        }
    })
    return expense
}

async function deleteExpensesDelete(id: number) {
    const expense = await prisma.expense.deleteMany({
        where: {
            id
        }
    })
    return expense
}

async function updateExpesesPut(expenses: Expense[], newCardName: string | null, cardId: number) {
    if (newCardName) {
        await prisma.card.update({
            where: {
                id: cardId, 
            },
            data: {
                name: newCardName, 
            },
        });
    }
    const updatedExpenses = await Promise.all(
        expenses.map(async (expense) => {
            return await prisma.expense.update({
                where: {
                    id: expense.id, 
                },
                data: {
                    value: Number(expense.value), 
                    name: expense.name,
                    person: expense.person   
                },
            });
        })
    );

    return updatedExpenses;
}


export const expensesRepository = {
    addexpensesPost, expenseExists, deleteExpensesDelete, updateExpesesPut
};
