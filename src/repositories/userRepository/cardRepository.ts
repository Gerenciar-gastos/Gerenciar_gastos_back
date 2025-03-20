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

async function cardExists(id:number) {
    const card = await prisma.card.findMany({
        where:{
            id
        }
    })
    return card
}


export const CardRepository = {
    cardPost, ifMonthExists, cardExists
};