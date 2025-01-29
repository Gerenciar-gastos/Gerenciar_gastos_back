async function HomeGet(userId: number) {
    return this.prisma.users.findUnique({
        where: { id: userId },
        include: {
            month: {
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
}

export const HomeRepository = {
    HomeGet
};