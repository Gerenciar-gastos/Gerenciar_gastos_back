import { invalidCredentialsError } from "@/erros/invalidCredentialsError";
import { HomeRepository } from "@/repositories/userRepository/homeRepository";
import { Decimal } from "@prisma/client/runtime/library";

async function HomeGet(userId: number) {
    const home = await HomeRepository.HomeGet(userId);
    if (!home) {
        throw invalidCredentialsError("Nenhum dado encontrado");
    }

    return home;
}

async function MonthPost(month: string, totalFunds: Decimal) {
    const homeMonth = await HomeRepository.MonthPost(month, totalFunds);
    return homeMonth
}

export const HomeService = {
    HomeGet, MonthPost
};