import { unauthorizedError, unauthorizedType } from "@/erros/unauthorizedRrror";
import { HomeRepository } from "@/repositories/homeRepository";
import { CardRepository } from "@/repositories/userRepository/cardRepository";


async function cardPost(name: string, userId: number) {
    const user = await HomeRepository.UserExists(userId)
    if (!user) {
        throw unauthorizedError()
    }
    const month = await CardRepository.ifMonthExists(userId)
    if (!month) {
        throw unauthorizedType("Mês não registrado")
    }

    const card = await CardRepository.cardPost(name, month.id);
    return card
}

async function cardDelete(id: number) {
    const cardExists = await CardRepository.cardExists(id);
    if(cardExists.length === 0){
        throw unauthorizedType("Cartão não registrado no banco de dados")
    }
    const card = await CardRepository.cardDelete(id)
    return card
}

export const CardService = {
    cardPost, cardDelete
};