import prisma from "@/database/database";


async function findSession(token: string) {
    return prisma.session.findFirst({
        where: {
            token,
        },
    });
}

export const authenticationRepository = {
    findSession
};