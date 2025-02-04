import prisma from "@/database/database";



async function cardPost(name: string, MonthId: number) {
    const homeMonth = await prisma.card.create({
        data: {
            name,
            month: {
                connect: { id: MonthId }
            }
        }
    });
    return homeMonth
}

async function ifMonthExists(userId: number) {
    const month = await prisma.month.findFirst({
        where: { userId }
    });
    return month
}




export const CardRepository = {
    cardPost, ifMonthExists
};