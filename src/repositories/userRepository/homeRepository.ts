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

export const HomeRepository = {
    HomeGet
};