import { unauthorizedError } from "@/erros/unauthorizedRrror";
import { HomeRepository } from "@/repositories/userRepository/homeRepository";


async function cardPost(name: string,  userId: number) {
    const user = await HomeRepository.UserExists(userId)
    if (!user) {
        throw unauthorizedError()
    }
    const card = await CardRepository.cardPost(name, userId);
    return card
}

export const CardService = {
    cardPost
};