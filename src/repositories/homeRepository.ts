import prisma from "@/database/database";


async function HomeGet(userId: number) {
    const home = await prisma.users.findUnique({
        where: { id: userId },
        select: {
            Month: {
                select: {
                    id: true,
                    name: true,
                    totalFunds: true,
                    totalSpent: true,
                    createdAt: true,
                    card: {
                        select: {
                            id: true,
                            name: true,
                            expense: {
                                select: {
                                    id: true,
                                    cardId: true,
                                    name: true,
                                    value: true,
                                    person: true,
                                },
                            },
                        },
                    },
                },
            },
        },
    });
    return home;
}


async function MonthPost(name: string, totalFunds: number, userId: number) {
    const homeMonth = await prisma.month.create({
        data: {
            user: {
                connect: { id: userId }
            },
            name,
            totalFunds
        }
    })
    return homeMonth
}

async function UserExists(userId: number) {
    const home = await prisma.users.findUnique({
        where: { id: userId },
    });
    return home
}

export const HomeRepository = {
    HomeGet, MonthPost, UserExists,
};