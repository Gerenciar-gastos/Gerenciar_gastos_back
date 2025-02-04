import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

    await prisma.users.createMany({
        data: [
            {
                email: 'm@gmail.com',
                cpf: '555.555.555-57',
                password: '$2b$12$RBPyrSMsrg30WlriZcmfheYQkZ/jC0xwx4S2zEv6MqbFuV1T9jDAu', 
                name: 'Monique',
            },
            {
                email: 'm2@gmail.com',
                cpf: '555.555.555-55',
                password: '$2b$12$RBPyrSMsrg30WlriZcmfheYQkZ/jC0xwx4S2zEv6MqbFuV1T9jDAu',
                name: 'Andressa',
            },
            {
                email: 'm3@gmail.com',
                cpf: '555.555.555-54',
                password: '$2b$12$RBPyrSMsrg30WlriZcmfheYQkZ/jC0xwx4S2zEv6MqbFuV1T9jDAu',
                name: 'Patrick',
            },
        ],
        skipDuplicates: true, 
    });

    const user = await prisma.users.upsert({
        where: { email: 'usuario1@email.com' },
        update: {},
        create: {
            email: 'usuario1@email.com',
            cpf: '123.456.789-00',
            password: '$2b$12$RBPyrSMsrg30WlriZcmfheYQkZ/jC0xwx4S2zEv6MqbFuV1T9jDAu',
            name: 'Usuário Teste 1',
        },
    });


    await prisma.session.create({
        data: {
            userId: user.id,
            token: 'token_usuario_1',
        },
    });


    await prisma.month.createMany({
        data: [
            { name: 'Janeiro', totalFunds: 5000.0, totalSpent: 1200.0, userId: user.id },
            { name: 'Fevereiro', totalFunds: 6000.0, totalSpent: 900.0, userId: user.id },
        ],
    });


    const months = await prisma.month.findMany({ where: { userId: user.id } });

    for (const month of months) {
        const card = await prisma.card.create({
            data: {
                name: month.name === 'Janeiro' ? 'Cartão Visa' : 'Cartão Mastercard',
                monthId: month.id,
            },
        });


        const expenses = month.name === 'Janeiro'
            ? [
                { name: 'Supermercado', value: 300.0, cardId: card.id },
                { name: 'Combustível', value: 200.0, cardId: card.id },
            ]
            : [
                { name: 'Cinema', value: 100.0, cardId: card.id },
                { name: 'Restaurante', value: 250.0, cardId: card.id },
            ];

        await prisma.expense.createMany({
            data: expenses,
        });

    }

}


main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error('Erro ao executar o seed:', e);
        await prisma.$disconnect();
        process.exit(1);
    });
