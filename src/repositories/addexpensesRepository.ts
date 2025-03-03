import prisma from "@/database/database";

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

export const addexpensesRepository = {
    addexpensesPost,
};
