import { invalidCredentialsError } from "@/erros/invalidCredentialsError";
import { HomeRepository } from "@/repositories/userRepository/homeRepository";

async function HomeGet(userId: number) {
    const home = await HomeRepository.HomeGet(userId);
    if (!home) {
        throw invalidCredentialsError("Nenhum dado encontrado");
    }

    return home;
}

export const HomeService = {
    HomeGet
};