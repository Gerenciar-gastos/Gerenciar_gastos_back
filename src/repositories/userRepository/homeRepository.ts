import prisma from "@/database/database";


async function HomeGet(userId: number) {
    const home = await prisma.users.findUnique({
        where: { id: userId },
        include: {
            Month: {
                include: {
                    card: {
                        include: {
                            expense: true,
                        },
                    },
                },
            },
        },
    });
    return home
}

async function MonthPost(month: string, totalFunds: Decimal) {
    const homeMonth = await prisma.month.create({
        data:{
            name: month,
            totalFunds
        }
    })
}

async function UserExists(userId: number) {
    const home = await prisma.users.findUnique({
        where: { id: userId },
    });
    return home
}

export const HomeRepository = {
    HomeGet, MonthPost, UserExists
};