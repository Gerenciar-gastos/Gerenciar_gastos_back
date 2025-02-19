-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "cpf" TEXT NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "token" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "month" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "totalFunds" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "totalSpent" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "month_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "card" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "monthId" INTEGER NOT NULL,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expense" (
    "id" SERIAL NOT NULL,
    "cardId" INTEGER NOT NULL,
    "person" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "expense_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "month" ADD CONSTRAINT "month_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_monthId_fkey" FOREIGN KEY ("monthId") REFERENCES "month"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expense" ADD CONSTRAINT "expense_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "card"("id") ON DELETE CASCADE ON UPDATE CASCADE;
