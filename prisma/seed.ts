import prisma from "../src/database/database"

async function main() {
    await prisma.users.createMany({
        data: [{
            email: 'm@gmail.com',
            cpf: "555.555.555-57",
            password: '$2b$12$RBPyrSMsrg30WlriZcmfheYQkZ/jC0xwx4S2zEv6MqbFuV1T9jDAu',
            name: "monique",
        },
        {
            email: 'm2@gmail.com',
            cpf: "555.555.555-55",
            password: '$2b$12$RBPyrSMsrg30WlriZcmfheYQkZ/jC0xwx4S2zEv6MqbFuV1T9jDAu',
            name: "andressa",
        },
        {
            email: 'm3@gmail.com',
            cpf: "555.555.555-54",
            password: '$2b$12$RBPyrSMsrg30WlriZcmfheYQkZ/jC0xwx4S2zEv6MqbFuV1T9jDAu',
            name: "patrick",
        },]
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    });